import Button from '@littlespoon/button/src/Button'
import Drawer from '@littlespoon/drawer/src/Drawer'
import { rem } from '@littlespoon/theme/lib/utils'
import Typography from '@littlespoon/typography/src/Typography'
import { useArgs } from '@storybook/client-api'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

export default {
  title: 'Design System/Drawer',
  component: Drawer,
  argTypes: { onClose: { action: 'drawer-close' } },
} as ComponentMeta<typeof Drawer>

const ButtonsContainer = styled.div`
  display: flex;
  gap: ${rem(0.8)};
  justify-content: center;
`

const drawerChildren = (
  <>
    <Typography as="h2" center noMargin variant="h5">
      Lorem ipsum dolor sit amet
    </Typography>
    <Typography center noMargin variant="p4">
      Donec faucibus euismod sagittis. Etiam maximus tortor vel ullamcorper pharetra. Nam blandit
      suscipit tortor a cursus. Phasellus sit amet vestibulum dolor. Ut nec venenatis ante. Maecenas
      molestie massa ante, non tempus mauris luctus sed. Cras pellentesque enim a ipsum posuere
      dignissim. Suspendisse non tortor et justo pretium facilisis. Vestibulum ante ipsum primis in
      faucibus orci luctus et ultrices posuere cubilia curae; Maecenas magna leo, elementum quis
      dignissim commodo, bibendum et nibh. Sed varius feugiat dui non euismod. Quisque rutrum risus
      eget tincidunt pretium. Etiam gravida hendrerit dui, in vestibulum velit feugiat ultrices.
    </Typography>
    <ButtonsContainer>
      <Button>Lorem</Button>
      <Button variant="ghost">Ipsum</Button>
    </ButtonsContainer>
  </>
)

const useDrawer = (onClose?: () => void) => {
  const [{ open: isOpen }, updateArgs] = useArgs()

  const handleButtonClick = () => {
    updateArgs({ open: !isOpen })
  }

  const handleDrawerClose = () => {
    updateArgs({ open: !isOpen })
    onClose && onClose()
  }

  return {
    handleButtonClick,
    handleDrawerClose,
  }
}

const Template: ComponentStory<typeof Drawer> = (args) => {
  const { handleButtonClick, handleDrawerClose } = useDrawer(args.onClose)

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

const TemplateWithCustomStyles: ComponentStory<typeof Drawer> = (args) => {
  const { handleButtonClick, handleDrawerClose } = useDrawer(args.onClose)

  const StyledDrawer = styled(Drawer)`
    background-color: #95efc3;
    &.styled-drawer {
      color: #f10a86;
    }
  `

  return (
    <>
      <Button onClick={handleButtonClick}>Open Drawer</Button>
      <StyledDrawer {...args} onClose={handleDrawerClose} />
    </>
  )
}
export const DrawerWithCustomStyles = TemplateWithCustomStyles.bind({})
DrawerWithCustomStyles.args = {
  children: drawerChildren,
  className: 'styled-drawer',
  open: false,
}
