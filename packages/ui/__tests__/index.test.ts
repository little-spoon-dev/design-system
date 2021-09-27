import Button from '@littlespoon/button'
import icons from '@littlespoon/icons'
import theme from '@littlespoon/theme'
import { createElement, isValidElement } from 'react'

import ui from '..'
import uiButton from '../Button'
import uiIcons from '../icons'
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

it('exports icons', () => {
  expect(uiIcons).toBe(icons)
})
