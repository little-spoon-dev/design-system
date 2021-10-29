import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { useState } from 'react'

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
function useToggle(initialState: boolean): [boolean, () => void] {
  const [state, setState] = useState(initialState)
  const toggleState = () => {
    setState(!state)
  }
  return [state, toggleState]
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
    const ComponentWithState = () => {
      const [state, toggleState] = useToggle(false)
      return <Checkbox {...defaultProps} checked={state} onChange={toggleState} />
    }

    const { rerender } = render(<ComponentWithState />)
    fireEvent.click(screen.getByText('Label'))

    rerender(<ComponentWithState />)
    expect(screen.getByTitle(CHECKED_BOX_TITLE)).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeChecked()

    fireEvent.click(screen.getByText('Label'))
    rerender(<ComponentWithState />)
    expect(screen.getByTitle(UNCHECKED_BOX_TITLE)).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('does not update state if disabled', () => {
    const ComponentWithState = () => {
      const [state, toggleState] = useToggle(false)
      return <Checkbox {...defaultProps} checked={state} onChange={toggleState} disabled />
    }

    const { rerender } = render(<ComponentWithState />)

    fireEvent.click(screen.getByText('Label'))

    rerender(<ComponentWithState />)
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
