import LittleSpoonAlert, {
  AlertProps,
  AlertProvider as LittleSpoonAlertProvider,
  AlertProviderProps,
  AlertTypes,
  AlertVariant,
  useAlertProvider,
} from '@littlespoon/alert/src/Alert'
import Button from '@littlespoon/button'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

const Alert = (args: AlertProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const handleClose = () => setIsOpen(false)
  return <LittleSpoonAlert isOpen={isOpen} onClose={handleClose} {...args} />
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
      children: `This is a test toast ${Math.ceil(Math.random() * 1000)}`,
      onClose: handleClose,
    })
  }

  return <Button onClick={handleAddToast}>Add Toast</Button>
}

const AlertProvider = (args: AlertProviderProps) => {
  return (
    <LittleSpoonAlertProvider {...args}>
      <AlertToastStack />
    </LittleSpoonAlertProvider>
  )
}

export default {
  title: 'Design System/Alert',
  component: Alert,
  argTypes: { onClose: { action: 'onClose' } },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

const ProviderTemplate: ComponentStory<typeof AlertProvider> = (args) => <AlertProvider {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Alert Title',
  children: 'Description Copy goes here',
  variant: AlertVariant.SUCCESS,
}

export const WithoutCloseButton = Template.bind({})
WithoutCloseButton.args = {
  title: 'Alert Title',
  children: 'Description Copy goes here',
  variant: AlertVariant.SUCCESS,
  showCloseButton: false,
}

export const WithoutTitle = Template.bind({})
WithoutTitle.args = {
  children: 'Description Copy goes here',
  variant: AlertVariant.SUCCESS,
}

export const WithoutTitleAndWithoutCloseButton = Template.bind({})
WithoutTitleAndWithoutCloseButton.args = {
  children: 'Description Copy goes here',
  variant: AlertVariant.SUCCESS,
  showCloseButton: false,
}

const alertChildren = (
  <>
    {'Description Copy goes here'}
    <br />
    <a href="https://www.littlespoon.com" target="_blank">
      Little Spoon
    </a>
  </>
)
export const WithLink = Template.bind({})
WithLink.args = {
  title: 'Alert Title',
  children: alertChildren,
  variant: AlertVariant.SUCCESS,
  showCloseButton: false,
}

export const Success = Template.bind({})
Success.args = {
  title: 'Alert Title',
  children: 'Description Copy goes here',
  variant: AlertVariant.SUCCESS,
}

export const Warning = Template.bind({})
Warning.args = {
  title: 'Alert Title',
  children: 'Description Copy goes here',
  variant: AlertVariant.WARNING,
}

export const Critical = Template.bind({})
Critical.args = {
  title: 'Alert Title',
  children: 'Description Copy goes here',
  variant: AlertVariant.CRITICAL,
}

export const Informative = Template.bind({})
Informative.args = {
  title: 'Alert Title',
  children: 'Description Copy goes here',
  variant: AlertVariant.INFORMATIVE,
}

export const Banner = Template.bind({})
Banner.args = {
  title: 'Alert Title',
  children: 'Description Copy goes here',
  variant: AlertVariant.SUCCESS,
  type: AlertTypes.BANNER,
}

export const Toast = Template.bind({})
Toast.args = {
  title: 'Alert Title',
  children: 'Description Copy goes here',
  variant: AlertVariant.SUCCESS,
  type: AlertTypes.TOAST,
  showCloseButton: false,
}

export const ToastStack = ProviderTemplate.bind({})
ToastStack.args = {
  maxStack: 3,
}
