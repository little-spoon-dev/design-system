import Alert, {
  AlertProps,
  AlertProvider,
  AlertProviderProps,
  AlertTypes,
  useAlertProvider,
} from '@littlespoon/alert/src/Alert'
import Button from '@littlespoon/button'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

const AlertStory = (args: AlertProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const handleClose = () => setIsOpen(false)
  return <Alert isOpen={isOpen} onClose={handleClose} {...args} />
}

const AlertToastStack = () => {
  const [, setIsOpen] = useState(true)
  const handleClose = () => setIsOpen(false)
  const { addToast } = useAlertProvider()

  const handleAddToast = () => {
    addToast({
      title: 'Test Toast',
      type: AlertTypes.TOAST,
      showCloseButton: false,
      description: `This is a test toast ${Math.ceil(Math.random() * 1000)}`,
      onClose: handleClose,
    })
  }

  return <Button onClick={handleAddToast}>Add Toast</Button>
}

const AlertProviderStory = (args: AlertProviderProps) => {
  return (
    <AlertProvider {...args}>
      <AlertToastStack />
    </AlertProvider>
  )
}

export default {
  title: 'Design System/Alert',
  component: AlertStory,
} as ComponentMeta<typeof AlertStory>

const Template: ComponentStory<typeof AlertStory> = (args) => <AlertStory {...args} />

const ProviderTemplate: ComponentStory<typeof AlertProviderStory> = (args) => (
  <AlertProviderStory {...args} />
)

export const ToastStack = ProviderTemplate.bind({})
ToastStack.args = {
  maxStack: 3,
}

export const Default = Template.bind({})
Default.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
}

export const AlertWithoutClose = Template.bind({})
AlertWithoutClose.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  showCloseButton: false,
}

export const AlertWithClose = Template.bind({})
AlertWithClose.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
}

export const NoTitleNotDismissableNoAction = Template.bind({})
NoTitleNotDismissableNoAction.args = {
  description: 'Description Copy goes here',
  variant: 'success',
  showCloseButton: false,
}

export const NoTitleDismissibleNoAction = Template.bind({})
NoTitleDismissibleNoAction.args = {
  description: 'Description Copy goes here',
  variant: 'success',
}

export const NoTitleNotDismissibleAction = Template.bind({})
NoTitleNotDismissibleAction.args = {
  description: 'Description Copy goes here',
  variant: 'success',
  actionLinkUrl: 'https://example.com/',
  actionLinkText: 'Action link',
  showCloseButton: false,
}

export const NoTitleDismissibleAction = Template.bind({})
NoTitleDismissibleAction.args = {
  description: 'Description Copy goes here',
  variant: 'success',
  actionLinkUrl: 'https://example.com/',
  actionLinkText: 'Action link',
}

export const Success = Template.bind({})
Success.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
}

export const Warning = Template.bind({})
Warning.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'warning',
}

export const Critical = Template.bind({})
Critical.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'critical',
}

export const Informative = Template.bind({})
Informative.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'informative',
}

export const Toast = Template.bind({})
Toast.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  type: AlertTypes.TOAST,
  showCloseButton: false,
}

export const Banner = Template.bind({})
Banner.args = {
  title: 'Alert Title',
  description: 'Description Copy goes here',
  variant: 'success',
  type: AlertTypes.BANNER,
}
