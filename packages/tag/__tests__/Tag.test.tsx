import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { TagProps } from '../src'
import Tag from '../src'

const children = 'children'

describe('accessibility', () => {
  it('is accessible with text', async () => {
    const { container } = render(<Tag>text</Tag>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('is accessible without text', async () => {
    const { container } = render(<Tag />)
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('with props.children', () => {
  it('renders text', () => {
    render(<Tag>{children}</Tag>)
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})

describe('with props.size', () => {
  it.each<TagProps['size']>(['small', 'medium', 'large'])('renders button with size=%j', (size) => {
    render(<Tag size={size}>{size}</Tag>)
    expect(screen.getByText(size!)).toBeInTheDocument()
  })

  it('does not throw for invalid size', () => {
    render(<Tag size={'' as TagProps['size']}>{children}</Tag>)
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})

describe('with props.onClick', () => {
  const handleClick = jest.fn()
  it('fires the onClick event', () => {
    render(<Tag onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(screen.queryByTitle('Close icon')).not.toBeInTheDocument()
  })
})

describe('with props.onDelete', () => {
  const onDelete = jest.fn()
  it('renders with the close icon', () => {
    render(<Tag onDelete={onDelete} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onDelete).toHaveBeenCalledTimes(1)
    expect(screen.queryByTitle('Close icon')).toBeInTheDocument()
  })
})
