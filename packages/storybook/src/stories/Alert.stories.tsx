import Alert from '@littlespoon/alert/src/Alert'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Alert',
  component: alert,
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  type: 'toast',
  dismissable: true,
}

export const TitleNotDismissableNoAction = Template.bind({})
TitleNotDismissableNoAction.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  type: 'toast',
  dismissable: false,
}

export const TitleDismissableNoAction = Template.bind({})
TitleDismissableNoAction.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  type: 'toast',
  dismissable: true,
}

export const NoTitleNotDismissableNoAction = Template.bind({})
NoTitleNotDismissableNoAction.args = {
  description: 'Description Copy goes here',
  variant: 'success',
  type: 'toast',
  dismissable: false,
}

export const NoTitleDismissibleNoAction = Template.bind({})
NoTitleDismissibleNoAction.args = {
  description: 'Description Copy goes here',
  variant: 'success',
  type: 'toast',
  dismissable: true,
}

export const NoTitleNotDismissibleAction = Template.bind({})
NoTitleNotDismissibleAction.args = {
  description: 'Description Copy goes here',
  variant: 'success',
  type: 'toast',
  dismissable: false,
  actionLinkUrl: 'test',
  actionLinkText: 'Action link',
}

export const NoTitleDismissibleAction = Template.bind({})
NoTitleDismissibleAction.args = {
  description: 'Description Copy goes here',
  variant: 'success',
  type: 'toast',
  dismissable: true,
  actionLinkUrl: 'test',
  actionLinkText: 'Action link',
}

export const Success = Template.bind({})
Success.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  type: 'toast',
  dismissable: true,
}

export const Warning = Template.bind({})
Warning.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'warning',
  type: 'toast',
  dismissable: true,
}

export const Critical = Template.bind({})
Critical.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'critical',
  type: 'toast',
  dismissable: true,
}

export const Informative = Template.bind({})
Informative.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'informative',
  type: 'toast',
  dismissable: true,
}

export const Toast = Template.bind({})
Toast.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  type: 'toast',
  dismissable: true,
}

export const Banner = Template.bind({})
Banner.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  type: 'banner',
  dismissable: true,
}
