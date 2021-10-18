import CloseIcon from '@littlespoon/icons/src/CloseIcon'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Icons/CloseIcon',
  component: CloseIcon,
} as ComponentMeta<typeof CloseIcon>

const Template: ComponentStory<typeof CloseIcon> = () => <CloseIcon />

export const Default = Template.bind({})
Default.args = {}
