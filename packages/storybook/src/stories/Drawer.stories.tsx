import Drawer from '@littlespoon/drawer/src/Drawer'
import { breakpoints } from '@littlespoon/theme'
import { rem } from '@littlespoon/theme/lib/utils'
import { Button, Link, Typography } from '@littlespoon/ui'
import { useArgs } from '@storybook/client-api'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

export default {
  title: 'Design System/Drawer',
  component: Drawer,
  argTypes: { onClose: { action: 'onClose' } },
} as ComponentMeta<typeof Drawer>

const LoremIpsum = () => (
  <>
    <Typography as="h2" center noMargin variant="h5">
      Lorem ipsum dolor sit amet
    </Typography>
    <Typography center noMargin variant="p4">
      Donec faucibus euismod sagittis. Etiam maximus tortor vel ullamcorper pharetra. Nam blandit
      suscipit tortor a cursus. Phasellus sit amet vestibulum dolor. Ut nec venenatis ante. Maecenas
      molestie massa ante, non tempus mauris luctus sed.
    </Typography>
  </>
)

const DrawerContent1 = (showCloseButton = false) => {
  const Content = styled.div`
    align-content: stretch;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: ${rem(1.6)};
    overflow: auto;
    padding: ${rem(showCloseButton ? 6.8 : 2)} ${rem(2)} ${rem(2)};

    ${breakpoints.up(
      breakpoints.md,
      `
      gap: ${rem(3.2)};
      justify-content: flex-end;
      padding: ${rem(showCloseButton ? 10.4 : 4)} ${rem(4)} ${rem(4)};
      `,
    )}
  `

  const ButtonsContainer = styled.div`
    display: flex;
    gap: ${rem(0.8)};
    justify-content: center;
  `

  return (
    <Content>
      <LoremIpsum />
      <ButtonsContainer>
        <Button>Lorem</Button>
        <Button variant="ghost">Ipsum</Button>
      </ButtonsContainer>
    </Content>
  )
}

const DrawerContent2 = () => {
  const Image = styled.img`
    border-radius: ${rem(1.2)} ${rem(1.2)} 0 0;
    height: ${rem(22.4)};
    object-fit: cover;

    ${breakpoints.up(
      breakpoints.md,
      `
      border-radius: 0;
      min-height: ${rem(76.6)};
      `,
    )}
  `

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rem(1.6)};
    overflow: auto;
    padding: ${rem(1.6)} ${rem(2)} 0;

    ${breakpoints.up(
      breakpoints.md,
      `
      gap: ${rem(3.2)};
      padding: ${rem(3.2)} ${rem(4)} 0;
      `,
    )}
  `

  const ButtonsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${rem(0.8)};
  `

  return (
    <>
      <Image src={require('./assets/cover-image.jpg')} />
      <Content>
        <LoremIpsum />
        <ButtonsContainer>
          <Button>Lorem</Button>
          <Link>Ipsum</Link>
        </ButtonsContainer>
      </Content>
    </>
  )
}

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
  children: DrawerContent1(),
  open: false,
}

export const WithCloseButton = Template.bind({})
WithCloseButton.args = {
  children: DrawerContent1(true),
  open: false,
  showCloseButton: true,
}

export const WithDisabledEscapeKeyDownAndDisabledBackdropClick = Template.bind({})
WithDisabledEscapeKeyDownAndDisabledBackdropClick.args = {
  children: DrawerContent1(true),
  disableBackdropClick: true,
  disableEscapeKeyDown: true,
  open: false,
  showCloseButton: true,
}

const TemplateWithCustomStyles: ComponentStory<typeof Drawer> = (args) => {
  const { handleButtonClick, handleDrawerClose } = useDrawer(args.onClose)

  const StyledDrawer = styled(Drawer)`
    background-color: #95efc3;
    padding-bottom: ${rem(2)};

    ${breakpoints.up(
      breakpoints.md,
      `
      padding-bottom: ${rem(4)};
      `,
    )}

    &.styled-drawer {
      color: #f10a86;
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
        {args.children}
      </StyledDrawer>
    </>
  )
}
export const WithCustomStyles = TemplateWithCustomStyles.bind({})
WithCustomStyles.args = {
  children: DrawerContent2(),
  className: 'styled-drawer',
  open: false,
}
