import Button from '@littlespoon/button'
import theme from '@littlespoon/theme'
import { createElement, isValidElement } from 'react'

import ui from '..'
import uiButton from '../Button'
import uiTheme from '../theme'

it('exports ui', () => {
  expect(ui).toMatchSnapshot()
})

it('exports Button', () => {
  expect(uiButton).toBe(Button)
  expect(isValidElement(createElement(Button))).toBe(true)
})

it('exports theme', () => {
  expect(uiTheme).toBe(theme)
})
