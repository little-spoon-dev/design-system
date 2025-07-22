import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'
import styled from 'styled-components'

import Drawer, { SHOW_HIDE_ANIMATION_DURATION } from '../src/'

const backdropTestId = 'backdrop'
const closeButtonTitle = 'Close'
const drawerRole = 'dialog'

describe('accessibility', () => {
  describe('drawer', () => {
    it('is accessible without text', async () => {
      const { container } = render(<Drawer open />)
      expect(await axe(container)).toHaveNoViolations()
    })

    it('is accessible with text', async () => {
      const children = 'Hello'
      const { container } = render(<Drawer open>{children}</Drawer>)
      expect(await axe(container)).toHaveNoViolations()
    })
  })
})

describe('without props', () => {
  it('does not render drawer', () => {
    render(<Drawer />)
    expect(screen.queryByRole(drawerRole)).not.toBeInTheDocument()
    expect(screen.queryByTestId(backdropTestId)).not.toBeInTheDocument()
  })
})

describe('with props.open', () => {
  it('renders drawer', () => {
    render(<Drawer open={true} />)
    expect(screen.getByRole(drawerRole)).toBeInTheDocument()
    expect(screen.getByTestId(backdropTestId)).toBeInTheDocument()
  })

  it('does not render drawer', () => {
    render(<Drawer open={false} />)
    expect(screen.queryByRole(drawerRole)).not.toBeInTheDocument()
    expect(screen.queryByTestId(backdropTestId)).not.toBeInTheDocument()
  })

  it('closes drawer when open changes from true to false', async () => {
    const TestComponent = () => {
      const [open, setOpen] = React.useState(true)
      return (
        <div>
          <button onClick={() => setOpen(false)}>Close</button>
          <Drawer open={open} />
        </div>
      )
    }

    render(<TestComponent />)

    expect(screen.getByRole(drawerRole)).toBeInTheDocument()

    fireEvent.click(screen.getByText('Close'))

    // Wait for hide animation to finish
    await new Promise((r) => setTimeout(r, SHOW_HIDE_ANIMATION_DURATION * 2))

    expect(screen.queryByRole(drawerRole)).not.toBeInTheDocument()
  })
})

describe('with props.children', () => {
  it('renders span with text', () => {
    const text = 'Hello'
    render(
      <Drawer open>
        <span>{text}</span>
      </Drawer>,
    )
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders labelled drawer', () => {
    const label = 'Hello'
    render(<Drawer aria-label={label} open />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
    expect(screen.getByRole(drawerRole).getAttribute('aria-label')).toBe(label)
  })
})

describe('with props.data-test', () => {
  it('sets the default test identifier', () => {
    render(<Drawer open />)
    expect(screen.getByRole(drawerRole)).toBeInTheDocument()
    expect(screen.getByRole(drawerRole).getAttribute('data-test')).toBe('@modal:drawer')
  })

  it('sets a custom test identifier', () => {
    const testId = '@modal:myDrawer'
    render(<Drawer data-test={testId} open />)
    expect(screen.getByRole(drawerRole)).toBeInTheDocument()
    expect(screen.getByRole(drawerRole).getAttribute('data-test')).toBe(testId)
  })
})

describe('with props.className', () => {
  it('renders a styled drawer', () => {
    const className = 'styled-drawer'
    const backgroundColor = 'yellow'
    const textColor = 'green'
    const StyledDrawer = styled(Drawer)`
      background-color: ${backgroundColor};
      &.${className} {
        color: ${textColor};
      }
    `
    render(<StyledDrawer className={className} open />)
    const drawer = screen.getByRole(drawerRole)
    expect(drawer).toBeInTheDocument()
    expect(drawer.classList.contains(className)).toBe(true)
    const drawerStyle = getComputedStyle(drawer)
    expect(drawerStyle.backgroundColor).toBe(backgroundColor)
    expect(drawerStyle.color).toBe(textColor)
    expect(drawerStyle.position).toBe('fixed')
  })
})

describe('with props.useFullHeight', () => {
  it('renders a drawer without props.useFullHeight', () => {
    render(<Drawer open />)
    const drawerContent = screen.getByTestId('@modal:drawer:content')
    expect(drawerContent).toBeInTheDocument()
    const drawerContentStyle = getComputedStyle(drawerContent)
    expect(drawerContentStyle.flexGrow).toBe('0')
  })
  it('renders a drawer with props.useFullHeight', () => {
    render(<Drawer useFullHeight open />)
    const drawerContent = screen.getByTestId('@modal:drawer:content')
    expect(drawerContent).toBeInTheDocument()
    const drawerContentStyle = getComputedStyle(drawerContent)
    expect(drawerContentStyle.flexGrow).toBe('1')
  })
})

describe('with props.disableBackdropClick', () => {
  it('fires the onClose event', async () => {
    const handleClose = jest.fn()
    render(<Drawer disableBackdropClick={false} onClose={handleClose} open />)
    const backdrop = screen.getByTestId(backdropTestId)
    const drawer = screen.getByRole(drawerRole)
    expect(backdrop).toBeInTheDocument()
    expect(drawer).toBeInTheDocument()
    fireEvent.click(backdrop)
    // Make sure the animation is finished
    await new Promise((r) => setTimeout(r, SHOW_HIDE_ANIMATION_DURATION * 2))
    expect(handleClose).toHaveBeenCalledTimes(1)
    expect(backdrop).not.toBeInTheDocument()
    expect(drawer).not.toBeInTheDocument()
  })

  it('does not fire the onClose event', () => {
    const handleClose = jest.fn()
    render(<Drawer disableBackdropClick={true} onClose={handleClose} open />)
    const backdrop = screen.getByTestId(backdropTestId)
    const drawer = screen.getByRole(drawerRole)
    expect(backdrop).toBeInTheDocument()
    expect(drawer).toBeInTheDocument()
    fireEvent.click(backdrop)
    expect(handleClose).toHaveBeenCalledTimes(0)
    expect(backdrop).toBeInTheDocument()
    expect(drawer).toBeInTheDocument()
  })
})

describe('with props.disableEscapeKeyDown', () => {
  const keyDownEventProperties = { charCode: 27, code: 'Escape', key: 'Escape' }

  it('fires the onClose event', async () => {
    const handleClose = jest.fn()
    render(<Drawer disableEscapeKeyDown={false} onClose={handleClose} open />)
    const drawer = screen.getByRole(drawerRole)
    expect(drawer).toBeInTheDocument()
    fireEvent.keyDown(drawer, keyDownEventProperties)
    // Make sure the animation is finished
    await new Promise((r) => setTimeout(r, SHOW_HIDE_ANIMATION_DURATION * 2))
    expect(handleClose).toHaveBeenCalledTimes(1)
    expect(drawer).not.toBeInTheDocument()
  })

  it('does not fire the onClose event', () => {
    const handleClose = jest.fn()
    render(<Drawer disableEscapeKeyDown={true} onClose={handleClose} open />)
    const drawer = screen.getByRole(drawerRole)
    expect(drawer).toBeInTheDocument()
    fireEvent.keyDown(drawer, keyDownEventProperties)
    expect(handleClose).toHaveBeenCalledTimes(0)
    expect(drawer).toBeInTheDocument()
  })
})

describe('with props.showCloseButton', () => {
  it('does not render close button', () => {
    render(<Drawer open showCloseButton={false} />)
    expect(screen.queryByLabelText(closeButtonTitle)).not.toBeInTheDocument()
  })

  it('renders close button', () => {
    render(<Drawer open showCloseButton={true} />)
    const closeButton = screen.getByLabelText(closeButtonTitle)
    expect(closeButton).toBeInTheDocument()
    expect(closeButton.getAttribute('data-test')).toBe('@button:closeDrawer')
  })
})

describe('with props.closeButtonTitle', () => {
  it('renders close button', () => {
    const closeButtonTitle = 'Hello'
    render(<Drawer closeButtonTitle={closeButtonTitle} open showCloseButton />)
    expect(screen.getByLabelText(closeButtonTitle)).toBeInTheDocument()
  })
})

describe('with props.onClose', () => {
  it('fires the onClose event', async () => {
    const handleClose = jest.fn()
    render(<Drawer onClose={handleClose} open showCloseButton />)
    const drawer = screen.getByRole(drawerRole)
    const closeButton = screen.getByLabelText(closeButtonTitle)
    expect(drawer).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)
    // Make sure the animation is finished
    await new Promise((r) => setTimeout(r, SHOW_HIDE_ANIMATION_DURATION * 2))
    expect(handleClose).toHaveBeenCalledTimes(1)
    expect(drawer).not.toBeInTheDocument()
    expect(closeButton).not.toBeInTheDocument()
  })

  it('does not fire the onClose event', () => {
    render(<Drawer onClose={undefined} open showCloseButton />)
    const drawer = screen.getByRole(drawerRole)
    const closeButton = screen.getByLabelText(closeButtonTitle)
    expect(drawer).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)
    expect(drawer).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
  })
})
