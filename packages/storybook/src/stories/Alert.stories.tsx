import Alert from '@littlespoon/alert/src/Alert'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>

function onClose() {
  // eslint-disable-next-line no-console
  console.log('Clicked Alert close button')
}

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  onClose,
}

export const AlertWithoutClose = Template.bind({})
AlertWithoutClose.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  onClose: undefined,
}

export const AlertWithClose = Template.bind({})
AlertWithClose.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  onClose,
}

export const NoTitleNotDismissableNoAction = Template.bind({})
NoTitleNotDismissableNoAction.args = {
  description: 'Description Copy goes here',
  variant: 'success',
  onClose: undefined,
}

export const NoTitleDismissibleNoAction = Template.bind({})
NoTitleDismissibleNoAction.args = {
  description: 'Description Copy goes here',
  variant: 'success',
  onClose,
}

export const NoTitleNotDismissibleAction = Template.bind({})
NoTitleNotDismissibleAction.args = {
  description: 'Description Copy goes here',
  variant: 'success',
  actionLinkUrl: 'https://example.com/',
  actionLinkText: 'Action link',
  onClose: undefined,
}

export const NoTitleDismissibleAction = Template.bind({})
NoTitleDismissibleAction.args = {
  description: 'Description Copy goes here',
  variant: 'success',
  onClose,
  actionLinkUrl: 'https://example.com/',
  actionLinkText: 'Action link',
}

export const Success = Template.bind({})
Success.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  onClose,
}

export const Warning = Template.bind({})
Warning.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'warning',
  onClose,
}

export const Critical = Template.bind({})
Critical.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'critical',
  onClose,
}

export const Informative = Template.bind({})
Informative.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'informative',
  onClose,
}

export const Toast = Template.bind({})
Toast.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  type: 'toast',
  onClose: undefined,
}

export const Banner = Template.bind({})
Banner.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  type: 'banner',
  onClose,
}
