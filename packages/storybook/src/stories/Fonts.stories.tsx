import theme from '@littlespoon/theme'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Fonts from './Fonts'

export default {
  title: 'Design System/Fonts',
  component: Fonts,
} as ComponentMeta<typeof Fonts>

const Template: ComponentStory<typeof Fonts> = (args) => <Fonts {...args} />

export const Body = Template.bind({})
Body.args = {
  Body: theme.fonts.primary,
}

export const Heading = Template.bind({})
Heading.args = {
  Heading: theme.fonts.secondary,
}
