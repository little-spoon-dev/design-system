import colors from '@littlespoon/theme/src/colors'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Colors from './Colors'

export default {
  title: 'Design System/Theme/Colors',
  component: Colors,
} as ComponentMeta<typeof Colors>

const Template: ComponentStory<typeof Colors> = (args) => <Colors {...args} />

export const Token = Template.bind({})
Token.args = {
  color: {
    token: colors.token,
  },
}

export const Primary = Template.bind({})
Primary.args = {
  color: colors.primary,
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: colors.secondary,
}

export const Alert = Template.bind({})
Alert.args = {
  color: colors.alert,
}
