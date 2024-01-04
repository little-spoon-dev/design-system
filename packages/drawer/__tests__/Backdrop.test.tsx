import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Backdrop from '../src/Backdrop'
import { SHOW_HIDE_ANIMATION_DURATION } from '../src/Drawer'

const backdropTestId = 'backdrop'

describe('accessibility', () => {
  describe('backdrop', () => {
    it('is accessible without children', async () => {
      const { container } = render(<Backdrop open />)
      expect(await axe(container)).toHaveNoViolations()
    })

    it('is accessible with text', async () => {
      const text = 'Hello'
      const { container } = render(<Backdrop open>{text}</Backdrop>)
      expect(await axe(container)).toHaveNoViolations()
    })
  })
})

describe('without props', () => {
  it('does not render backdrop', () => {
    render(<Backdrop />)
    expect(screen.queryByTestId(backdropTestId)).not.toBeInTheDocument()
  })
})

describe('with props.open', () => {
  it('renders backdrop', () => {
    render(<Backdrop open={true} />)
    expect(screen.getByTestId(backdropTestId)).toBeInTheDocument()
  })

  it('does not render backdrop', () => {
    render(<Backdrop open={false} />)
    expect(screen.queryByTestId(backdropTestId)).not.toBeInTheDocument()
  })
})

describe('with props.onClick', () => {
  it('fires the onClick event', async () => {
    const handleClick = jest.fn()
    render(<Backdrop onClick={handleClick} open />)
    const backdrop = screen.getByTestId(backdropTestId)
    expect(backdrop).toBeInTheDocument()
    fireEvent.click(backdrop)
    // Make sure the animation is finished
    await new Promise((r) => setTimeout(r, SHOW_HIDE_ANIMATION_DURATION * 2))
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(backdrop).not.toBeInTheDocument()
  })

  it('does not fire the onClick event', () => {
    render(<Backdrop onClick={undefined} open />)
    const backdrop = screen.getByTestId(backdropTestId)
    expect(backdrop).toBeInTheDocument()
    fireEvent.click(backdrop)
    expect(backdrop).toBeInTheDocument()
  })
})
