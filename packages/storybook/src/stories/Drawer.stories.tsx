import Button from '@littlespoon/button/src/Button'
import Drawer from '@littlespoon/drawer/src/Drawer'
import { rem } from '@littlespoon/theme/lib/utils'
import Typography from '@littlespoon/typography/src/Typography'
import { useArgs } from '@storybook/client-api'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Drawer',
  component: Drawer,
  argTypes: { onClose: { action: 'drawer-close' } },
} as ComponentMeta<typeof Drawer>

const drawerChildren = (
  <>
    <Typography as="h2" noMargin variant="h5">
      Lorem ipsum dolor sit amet
    </Typography>
    <Typography noMargin variant="p4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec convallis dolor. Morbi a
      vestibulum augue. Nunc quis turpis ipsum. Etiam volutpat, dui id finibus efficitur, libero
      erat dictum tellus, ut volutpat tellus metus nec neque. Suspendisse viverra, enim vel
      vulputate lobortis, libero lacus tincidunt quam, et maximus massa nisl sed dui. Quisque at
      congue eros, vel maximus metus. Nulla quis viverra dui. Suspendisse tempus a ipsum blandit
      tincidunt. Phasellus sed orci eros. Ut sapien dui, pellentesque nec aliquam vulputate, tempor
      eu lacus. Vestibulum pretium orci et efficitur hendrerit. Integer maximus enim sit amet tortor
      venenatis, non tristique orci consectetur. Vestibulum consequat at elit ultrices rutrum. Donec
      egestas sit amet lorem nec dapibus. Duis non tellus augue. Praesent blandit nibh eu lobortis
      volutpat. Ut eros metus, pulvinar sed facilisis nec, imperdiet quis est. Suspendisse potenti.
    </Typography>
    <Typography noMargin variant="p4">
      Donec faucibus euismod sagittis. Etiam maximus tortor vel ullamcorper pharetra. Nam blandit
      suscipit tortor a cursus. Phasellus sit amet vestibulum dolor. Ut nec venenatis ante. Maecenas
      molestie massa ante, non tempus mauris luctus sed. Cras pellentesque enim a ipsum posuere
      dignissim. Suspendisse non tortor et justo pretium facilisis. Vestibulum ante ipsum primis in
      faucibus orci luctus et ultrices posuere cubilia curae; Maecenas magna leo, elementum quis
      dignissim commodo, bibendum et nibh. Sed varius feugiat dui non euismod. Quisque rutrum risus
      eget tincidunt pretium. Etiam gravida hendrerit dui, in vestibulum velit feugiat ultrices.
    </Typography>
    <div style={{ display: 'flex', gap: rem(0.8), justifyContent: 'center' }}>
      <Button>Lorem</Button>
      <Button variant="ghost">Ipsum</Button>
    </div>
  </>
)

const Template: ComponentStory<typeof Drawer> = (args) => {
  const [{ open: isOpen }, updateArgs] = useArgs()

  const handleButtonClick = () => {
    updateArgs({ open: !isOpen })
  }

  const handleDrawerClose = () => {
    updateArgs({ open: !isOpen })
    if (!args.onClose) {
      return
    }
    args.onClose()
  }

  return (
    <>
      <Button onClick={handleButtonClick}>Open Drawer</Button>
      <Drawer {...args} onClose={handleDrawerClose} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: drawerChildren,
  open: false,
}

export const DrawerWithCloseButton = Template.bind({})
DrawerWithCloseButton.args = {
  children: drawerChildren,
  open: false,
  showCloseButton: true,
}

export const DrawerWithDisabledEscapeKeyDownAndDisabledBackdropClick = Template.bind({})
DrawerWithDisabledEscapeKeyDownAndDisabledBackdropClick.args = {
  children: drawerChildren,
  disableBackdropClick: true,
  disableEscapeKeyDown: true,
  open: false,
  showCloseButton: true,
}
