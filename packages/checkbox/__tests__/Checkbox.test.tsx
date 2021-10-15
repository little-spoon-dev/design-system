import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import type { CheckboxProps } from '../src'
import { Checkbox, CheckboxGroup } from '../src'

const checkboxProps: CheckboxProps = {
  children: 'Label',
}

let onChangeValue = 0

function onChangeFunction() {
  ++onChangeValue
}

it('checkbox is accessible', async () => {
  const { container } = render(<Checkbox {...checkboxProps} />)
  expect(await axe(container)).toHaveNoViolations()
})

it('checkbox group is accessible', async () => {
  const { container } = render(
    <CheckboxGroup>
      <Checkbox {...checkboxProps} />
    </CheckboxGroup>,
  )
  expect(await axe(container)).toHaveNoViolations()
})

it('renders text', () => {
  const text = 'Label'
  render(<Checkbox {...checkboxProps} />)
  expect(screen.getByText(text)).toBeInTheDocument()
})

it('renders in an unchecked state', () => {
  const uncheckedBox = 'Unchecked checkbox'
  render(<Checkbox {...checkboxProps} />)
  expect(screen.getByTitle(uncheckedBox)).toBeInTheDocument()
})

it('updates to checked state when clicked', () => {
  const checkedBox = 'Checked checkbox'
  render(<Checkbox {...checkboxProps} />)
  fireEvent.click(screen.getByText('Label'))
  expect(screen.getByTitle(checkedBox)).toBeInTheDocument()
})

it('invokes passed-in changeHandler function on-change', () => {
  checkboxProps.onChange = () => onChangeFunction()
  render(<Checkbox {...checkboxProps} />)
  fireEvent.click(screen.getByText('Label'))
  expect(onChangeValue).toEqual(1)
})

it('does not throw error if changeHandler prop is undefined', () => {
  const checkedBox = 'Checked checkbox'
  checkboxProps.onChange = undefined
  render(<Checkbox {...checkboxProps} />)
  fireEvent.click(screen.getByText('Label'))
  expect(screen.getByTitle(checkedBox)).toBeInTheDocument()
})

it('does not update state if disabled', () => {
  const uncheckedBox = 'Unchecked checkbox'
  checkboxProps.disabled = true
  render(<Checkbox {...checkboxProps} />)
  fireEvent.click(screen.getByText('Label'))
  expect(screen.getByTitle(uncheckedBox)).toBeInTheDocument()
})

it('renders expected amount of Checkboxes', () => {
  const uncheckedBox = 'Unchecked checkbox'
  render(
    <CheckboxGroup horizontal>
      <Checkbox {...checkboxProps} />
      <Checkbox {...checkboxProps} />
      <Checkbox {...checkboxProps} />
      <Checkbox {...checkboxProps} />
    </CheckboxGroup>,
  )
  expect(screen.getAllByTitle(uncheckedBox)).toHaveLength(4)
})

it('renders state based on checked prop', () => {
  const uncheckedBox = 'Unchecked checkbox'
  checkboxProps.checked = true
  checkboxProps.disabled = false
  render(<Checkbox {...checkboxProps} />)
  fireEvent.click(screen.getByText('Label'))
  expect(screen.getByTitle(uncheckedBox)).toBeInTheDocument()
})
