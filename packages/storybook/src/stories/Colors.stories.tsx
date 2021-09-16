import { ComponentStory, ComponentMeta } from '@storybook/react'

import Colors from './Colors'
import theme from '@littlespoon/theme'

export default {
  title: 'Example/Colors',
  component: Colors,
} as ComponentMeta<typeof Colors>

const Template: ComponentStory<typeof Colors> = (args) => <Colors {...args} />

export const Token = Template.bind({})
Token.args = {
  color: {
    token: theme.colors.token,
  },
}

export const Primary = Template.bind({})
Primary.args = {
  color: theme.colors.primary,
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: theme.colors.secondary,
}

export const Alert = Template.bind({})
Alert.args = {
  color: theme.colors.alert,
}
