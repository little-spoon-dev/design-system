import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { CheckboxProps } from '../src'
import { Checkbox, CheckboxGroup } from '../src'

// Setup

const defaultProps: CheckboxProps = {
  children: 'Label',
  checked: true,
  onChange: () => {
    return undefined
  },
}

// Used to track individual tests' scoped state changes.
class CheckboxController {
  state: boolean
  constructor(initialValue = false) {
    this.state = initialValue
  }

  toggleState = () => {
    this.state = !this.state
  }
}

const CHECKED_BOX_TITLE = 'Checked checkbox'
const UNCHECKED_BOX_TITLE = 'Unchecked checkbox'

// Tests

describe('Checkbox', () => {
  it('is is accessible', async () => {
    const { container } = render(<Checkbox {...defaultProps} />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders text', () => {
    const text = 'Label'
    render(<Checkbox {...defaultProps} />)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('renders in an unchecked state', () => {
    render(<Checkbox {...defaultProps} checked={false} />)
    expect(screen.getByTitle(UNCHECKED_BOX_TITLE)).toBeInTheDocument()
  })

  it('updates to checked/unchecked state when clicked', () => {
    const controller = new CheckboxController(false)

    const getComponentWithState = () => (
      <Checkbox {...defaultProps} checked={controller.state} onChange={controller.toggleState} />
    )

    const { rerender } = render(getComponentWithState())
    fireEvent.click(screen.getByText('Label'))

    rerender(getComponentWithState())
    expect(screen.getByTitle(CHECKED_BOX_TITLE)).toBeInTheDocument()

    fireEvent.click(screen.getByText('Label'))
    rerender(getComponentWithState())
    expect(screen.getByTitle(UNCHECKED_BOX_TITLE)).toBeInTheDocument()
  })

  it('does not update state if disabled', () => {
    const controller = new CheckboxController()

    const getComponentWithState = () => (
      <Checkbox
        {...defaultProps}
        checked={controller.state}
        onChange={controller.toggleState}
        disabled
      />
    )

    const { rerender } = render(getComponentWithState())

    fireEvent.click(screen.getByText('Label'))

    rerender(getComponentWithState())
    expect(screen.getByTitle(UNCHECKED_BOX_TITLE)).toBeInTheDocument()
  })
})

describe('CheckboxGroup', () => {
  it('checkbox group is accessible', async () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox {...defaultProps} />
      </CheckboxGroup>,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders expected amount of Checkboxes', () => {
    render(
      <CheckboxGroup horizontal>
        <Checkbox {...defaultProps} />
        <Checkbox {...defaultProps} />
        <Checkbox {...defaultProps} />
        <Checkbox {...defaultProps} />
      </CheckboxGroup>,
    )
    expect(screen.getAllByTitle(CHECKED_BOX_TITLE)).toHaveLength(4)
  })
})
