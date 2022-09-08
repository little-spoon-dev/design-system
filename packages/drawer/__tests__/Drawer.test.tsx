import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Drawer from '../src/'

describe('accessibility', () => {
  describe('drawer', () => {
    it('is accessible without text', async () => {
      const { container } = render(<Drawer open={true} />)
      expect(await axe(container)).toHaveNoViolations()
    })

    it('is accessible with text', async () => {
      const children = 'Hello'
      const { container } = render(<Drawer open={true}>{children}</Drawer>)
      expect(await axe(container)).toHaveNoViolations()
    })
  })
})

describe('without props', () => {
  it('does not render drawer', () => {
    render(<Drawer />)
    expect(screen.queryByRole('dialog')).toEqual(null)
    expect(screen.queryByTestId('backdrop')).toEqual(null)
  })
})

describe('with props.open', () => {
  it('renders drawer', () => {
    render(<Drawer open={true} />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByTestId('backdrop')).toBeInTheDocument()
  })

  it('does not render drawer', () => {
    render(<Drawer open={false} />)
    expect(screen.queryByRole('dialog')).toEqual(null)
    expect(screen.queryByTestId('backdrop')).toEqual(null)
  })
})

describe('with props.children', () => {
  it('renders span with text', () => {
    const text = 'Hello'
    render(
      <Drawer open={true}>
        <span>{text}</span>
      </Drawer>,
    )
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})

describe('with props.aria-label', () => {
  it('renders labelled drawer', () => {
    const label = 'Hello'
    render(<Drawer aria-label={label} open={true} />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})

describe('with props.disableBackdropClick', () => {
  const backdropTestId = 'backdrop'
  const drawerRole = 'dialog'

  it('fires the onClose event', () => {
    const handleClose = jest.fn()
    render(<Drawer disableBackdropClick={false} onClose={handleClose} open={true} />)
    const backdrop = screen.getByTestId(backdropTestId)
    const drawer = screen.getByRole(drawerRole)
    expect(backdrop).toBeInTheDocument()
    expect(drawer).toBeInTheDocument()
    fireEvent.click(backdrop)
    expect(handleClose).toHaveBeenCalledTimes(1)
    expect(backdrop).not.toBeInTheDocument()
    expect(drawer).not.toBeInTheDocument()
  })

  it('does not fire the onClose event', () => {
    const handleClose = jest.fn()
    render(<Drawer disableBackdropClick={true} onClose={handleClose} open={true} />)
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
  const drawerRole = 'dialog'

  it('fires the onClose event', () => {
    const handleClose = jest.fn()
    render(<Drawer disableEscapeKeyDown={false} onClose={handleClose} open={true} />)
    const drawer = screen.getByRole(drawerRole)
    expect(drawer).toBeInTheDocument()
    fireEvent.keyDown(drawer, keyDownEventProperties)
    expect(handleClose).toHaveBeenCalledTimes(1)
    expect(drawer).not.toBeInTheDocument()
  })

  it('does not fire the onClose event', () => {
    const handleClose = jest.fn()
    render(<Drawer disableEscapeKeyDown={true} onClose={handleClose} open={true} />)
    const drawer = screen.getByRole(drawerRole)
    expect(drawer).toBeInTheDocument()
    fireEvent.keyDown(drawer, keyDownEventProperties)
    expect(handleClose).toHaveBeenCalledTimes(0)
    expect(drawer).toBeInTheDocument()
  })
})

describe('with props.showCloseButton', () => {
  const closeButtonTitle = 'Close'

  it('does not render close button', () => {
    render(<Drawer open={true} showCloseButton={false} />)
    expect(screen.queryByLabelText(closeButtonTitle)).toEqual(null)
  })

  it('renders close button', () => {
    render(<Drawer open={true} showCloseButton={true} />)
    expect(screen.getByLabelText(closeButtonTitle)).toBeInTheDocument()
  })
})

describe('with props.closeButtonTitle', () => {
  it('renders close button', () => {
    const closeButtonTitle = 'Hello'
    render(<Drawer closeButtonTitle={closeButtonTitle} open={true} showCloseButton={true} />)
    expect(screen.getByLabelText(closeButtonTitle)).toBeInTheDocument()
  })
})

describe('with props.onClose', () => {
  const closeButtonTitle = 'Close'
  const drawerRole = 'dialog'

  it('fires the onClose event', () => {
    const handleClose = jest.fn()
    render(<Drawer onClose={handleClose} open={true} showCloseButton={true} />)
    const drawer = screen.getByRole(drawerRole)
    const closeButton = screen.getByLabelText(closeButtonTitle)
    expect(drawer).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)
    expect(handleClose).toHaveBeenCalledTimes(1)
    expect(drawer).not.toBeInTheDocument()
    expect(closeButton).not.toBeInTheDocument()
  })

  it('does not fire the onClose event', () => {
    render(<Drawer onClose={undefined} open={true} showCloseButton={true} />)
    const drawer = screen.getByRole(drawerRole)
    const closeButton = screen.getByLabelText(closeButtonTitle)
    expect(drawer).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)
    expect(drawer).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
  })
})
