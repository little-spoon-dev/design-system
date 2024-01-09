import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Portal from '../src/Portal'

describe('with props.container', () => {
  const text = 'Hello'

  it('renders portal children into document.body', () => {
    render(
      <Portal>
        <div>{text}</div>
      </Portal>,
    )
    const element = screen.getByText(text)
    expect(element).toBeInTheDocument()
    expect(element?.parentElement?.tagName.toLowerCase()).toEqual('body')
  })

  it('renders portal children into created DOM element', () => {
    const container = document.createElement('div')
    container.id = 'test1'
    document.body.append(container)
    render(
      <Portal container={container}>
        <div>{text}</div>
      </Portal>,
    )
    const element = screen.getByText(text)
    expect(element).toBeInTheDocument()
    expect(element?.parentElement?.id).toEqual(container.id)
    expect(container.contains(element)).toEqual(true)
  })

  it('renders portal children into the DOM element specified by the container function', () => {
    const containerTestId = 'test1'
    const containerFunction = () => screen.getByTestId(containerTestId)
    render(
      <>
        <div data-testid={containerTestId}></div>
        <Portal container={containerFunction}>
          <div>{text}</div>
        </Portal>
      </>,
    )
    const element = screen.getByText(text)
    expect(element).toBeInTheDocument()
    const container = screen.getByTestId(containerTestId)
    expect(element?.parentElement?.id).toEqual(container.id)
    expect(container.contains(element)).toEqual(true)
  })
})
