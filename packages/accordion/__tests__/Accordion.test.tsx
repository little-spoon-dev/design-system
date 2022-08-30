import { fireEvent, render, screen } from '@testing-library/react'

import Accordion from '../src/'

const singleArgs = {
  items: [
    {
      header: 'Heading1',
      content: 'content 1',
    },
  ],
}

const multipleArgs = {
  items: [
    {
      header: 'Heading1',
      content: 'content 1',
    },
    {
      header: 'Heading2',
      content: 'content 2',
    },
    {
      header: 'Heading3',
      content: 'content 3',
    },
  ],
}

window.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe('single accordion', () => {
  it('renders single accordion', async () => {
    render(<Accordion items={singleArgs.items}></Accordion>)
    expect(document.getElementsByTagName('dt')).toHaveLength(1)
  })
})

describe('single accordion', () => {
  it('renders single accordion', async () => {
    render(<Accordion items={singleArgs.items}></Accordion>)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(screen.getByText('content 1')).toBeInTheDocument()
  })
})

describe('multiple accordion', () => {
  it('renders multiple accordion', async () => {
    render(<Accordion items={multipleArgs.items}></Accordion>)
    const button = screen.getByText('Heading1')
    fireEvent.click(button)
    fireEvent.click(button)
    expect(screen.getByText('content 1')).toBeInTheDocument()
    const button2 = screen.getByText('Heading2')
    fireEvent.click(button2)
    expect(screen.getByText('content 2')).toBeInTheDocument()
    expect(document.getElementsByTagName('dt')).toHaveLength(3)
  })
})
