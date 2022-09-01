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

describe('with props.ariaLabelledBy', () => {
  it('renders labelled drawer', () => {
    const label = 'Hello'
    render(
      <Drawer ariaLabelledBy="drawer-title" open={true}>
        <h1 id="drawer-title">{label}</h1>
      </Drawer>,
    )
    expect(screen.getByLabelText(label)).toBeInTheDocument()
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

  it('fires the onClose event', () => {
    const handleClose = jest.fn()
    render(<Drawer onClose={handleClose} open={true} showCloseButton={true} />)
    const closeButton = screen.getByLabelText(closeButtonTitle)
    fireEvent.click(closeButton)
    expect(handleClose).toHaveBeenCalledTimes(1)
    expect(closeButton).not.toBeInTheDocument()
  })

  it('does not fire the onClose event', () => {
    render(<Drawer onClose={undefined} open={true} showCloseButton={true} />)
    const closeButton = screen.getByLabelText(closeButtonTitle)
    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)
    expect(closeButton).not.toBeInTheDocument()
  })
})
