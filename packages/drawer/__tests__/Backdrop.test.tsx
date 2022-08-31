import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Backdrop from '../src/Backdrop'

const backdropTestId = 'backdrop'

describe('accessibility', () => {
  describe('backdrop', () => {
    it('is accessible without children', async () => {
      const { container } = render(<Backdrop open={true} />)
      expect(await axe(container)).toHaveNoViolations()
    })

    it('is accessible with text', async () => {
      const text = 'Hello'
      const { container } = render(<Backdrop open={true}>{text}</Backdrop>)
      expect(await axe(container)).toHaveNoViolations()
    })
  })
})

describe('with props.open', () => {
  it('renders backdrop', () => {
    render(<Backdrop open={true} />)
    expect(screen.getByTestId(backdropTestId)).toBeInTheDocument()
  })

  it('does not render backdrop', () => {
    render(<Backdrop open={false} />)
    expect(screen.queryByTestId(backdropTestId)).toEqual(null)
  })
})

describe('with props.onClick', () => {
  it('fires the onClick event', () => {
    const handleClick = jest.fn()
    render(<Backdrop onClick={handleClick} open={true} />)
    const backdrop = screen.getByTestId(backdropTestId)
    expect(backdrop).toBeInTheDocument()
    fireEvent.click(backdrop)
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(backdrop).not.toBeInTheDocument()
  })

  it('does not fire the onClick event', () => {
    render(<Backdrop onClick={undefined} open={true} />)
    const backdrop = screen.getByTestId(backdropTestId)
    expect(backdrop).toBeInTheDocument()
    fireEvent.click(backdrop)
    expect(backdrop).not.toBeInTheDocument()
  })
})
