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
  argTypes: { onClose: { action: 'onClose' } },
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
      molestie massa ante, non tempus mauris luctus sed.
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

export const WithCloseButton = Template.bind({})
WithCloseButton.args = {
  children: drawerChildren,
  open: false,
  showCloseButton: true,
}

export const WithDisabledEscapeKeyDownAndDisabledBackdropClick = Template.bind({})
WithDisabledEscapeKeyDownAndDisabledBackdropClick.args = {
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
    padding: 0;
    padding-bottom: 2rem;

    @media (min-width: 768px) {
      padding-bottom: 4rem;
    }

    &.styled-drawer {
      color: #f10a86;
    }
  `

  const Body = styled.div`
    padding: 0 2rem;

    @media (min-width: 768px) {
      padding: 0 4rem;
    }
  `

  const Image = styled.img`
    max-height: 32rem;
    overflow: hidden;

    @media (min-width: 768px) {
      max-height: 76rem;
    }
  `

  return (
    <>
      <Button onClick={handleButtonClick}>Open Drawer</Button>
      <StyledDrawer
        className={args.className}
        open={args.open}
        onClose={handleDrawerClose}
        showCloseButton
      >
        <Image src={require('./assets/cover-image.jpg')} />
        <Body>{args.children}</Body>
      </StyledDrawer>
    </>
  )
}
export const WithCustomStyles = TemplateWithCustomStyles.bind({})
WithCustomStyles.args = {
  children: drawerChildren,
  className: 'styled-drawer',
  open: false,
}
