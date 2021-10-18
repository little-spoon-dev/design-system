import { Breadcrumb, Breadcrumbs } from '@littlespoon/breadcrumbs'
import Button from '@littlespoon/button'
import Divider from '@littlespoon/divider'
import icons from '@littlespoon/icons'
import Tag from '@littlespoon/tag'
import theme from '@littlespoon/theme'
import Typography from '@littlespoon/typography'
import { createElement, isValidElement } from 'react'

import ui from '..'
import uiBreadcrumb from '../Breadcrumb'
import uiBreadcrumbs from '../Breadcrumbs'
import uiButton from '../Button'
import uiDivider from '../Divider'
import uiIcons from '../icons'
import uiTag from '../Tag'
import uiTheme from '../theme'
import uiTypography from '../Typography'

it('exports ui', () => {
  expect(ui).toMatchSnapshot()
})

it('exports Breadcrumb', () => {
  expect(uiBreadcrumb).toBe(Breadcrumb)
  expect(isValidElement(createElement(Breadcrumb))).toBe(true)
})

it('exports Breadcrumbs', () => {
  expect(uiBreadcrumbs).toBe(Breadcrumbs)
  expect(isValidElement(createElement(Breadcrumbs))).toBe(true)
})

it('exports Button', () => {
  expect(uiButton).toBe(Button)
  expect(isValidElement(createElement(Button))).toBe(true)
})

it('exports Divider', () => {
  expect(uiDivider).toBe(Divider)
  expect(isValidElement(createElement(Divider))).toBe(true)
})

it('exports Tag', () => {
  expect(uiTag).toBe(Tag)
  expect(isValidElement(createElement(Tag))).toBe(true)
})

it('exports Typography', () => {
  expect(uiTypography).toBe(Typography)
  expect(isValidElement(createElement(Typography))).toBe(true)
})

it('exports theme', () => {
  expect(uiTheme).toBe(theme)
})

it('exports icons', () => {
  expect(uiIcons).toBe(icons)
})
