import Button from '@littlespoon/button/src/Button'
import Drawer from '@littlespoon/drawer/src/Drawer'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Drawer',
  component: Drawer,
  argTypes: { onClose: { action: 'closed' } },
} as ComponentMeta<typeof Drawer>

const drawerChildren = (
  <>
    <h1>Drawer</h1>
    <p>
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
    </p>
    <p>
      Donec faucibus euismod sagittis. Etiam maximus tortor vel ullamcorper pharetra. Nam blandit
      suscipit tortor a cursus. Phasellus sit amet vestibulum dolor. Ut nec venenatis ante. Maecenas
      molestie massa ante, non tempus mauris luctus sed. Cras pellentesque enim a ipsum posuere
      dignissim. Suspendisse non tortor et justo pretium facilisis. Vestibulum ante ipsum primis in
      faucibus orci luctus et ultrices posuere cubilia curae; Maecenas magna leo, elementum quis
      dignissim commodo, bibendum et nibh. Sed varius feugiat dui non euismod. Quisque rutrum risus
      eget tincidunt pretium. Etiam gravida hendrerit dui, in vestibulum velit feugiat ultrices.
    </p>
    <div className="button-bar">
      <Button variant="ghost">One</Button>
      <Button variant="ghost">Two</Button>
      <Button variant="ghost">Thee</Button>
    </div>
  </>
)

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

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
