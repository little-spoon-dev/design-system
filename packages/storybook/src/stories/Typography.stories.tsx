import Typography from '@littlespoon/typography/src/Typography'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Defaults to paragraph.',
}

export const Paragraph = Template.bind({})
Paragraph.args = {
  as: 'p',
  children: 'Paragraph',
}

export const Heading1 = Template.bind({})
Heading1.args = {
  as: 'h1',
  children: 'Heading 1',
}

export const Heading2 = Template.bind({})
Heading2.args = {
  as: 'h2',
  children: 'Heading 2',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  as: 'h3',
  children: 'Heading 3',
}

export const Heading4 = Template.bind({})
Heading4.args = {
  as: 'h4',
  children: 'Heading 4',
}

export const Heading5 = Template.bind({})
Heading5.args = {
  as: 'h5',
  children: 'Heading 5',
}

export const Heading6 = Template.bind({})
Heading6.args = {
  as: 'h6',
  children: 'Heading 6',
}

export const NoMargin = Template.bind({})
NoMargin.args = {
  children: 'No margin',
  noMargin: true,
}

export const Variant = Template.bind({})
Variant.args = {
  as: 'h1',
  children: 'h1 styled as h6',
  variant: 'h6',
}

const Template2: ComponentStory<typeof Typography> = (args) => (
  <>
    <Typography {...args} />
    <Typography {...args} />
  </>
)

export const Multiple = Template2.bind({})
Multiple.args = {
  children: 'Lorem ipsum dolor sit amet.',
}
