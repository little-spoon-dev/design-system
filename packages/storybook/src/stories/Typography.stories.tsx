import Typography from '@littlespoon/typography/src/Typography'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Design System/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

const TemplateAll: ComponentStory<typeof Typography> = (args) => (
  <>
    <Typography as="p" {...args}>
      Paragraph
    </Typography>

    <Typography variant="caption1" {...args}>
      Caption 1
    </Typography>

    <Typography as="h1" variant="display1" {...args}>
      Display 1
    </Typography>

    <Typography as="h2" variant="display2" {...args}>
      Display 2
    </Typography>

    <Typography as="h1" {...args}>
      Heading 1
    </Typography>

    <Typography as="h2" {...args}>
      Heading 2
    </Typography>

    <Typography as="h3" {...args}>
      Heading 3
    </Typography>

    <Typography as="h4" {...args}>
      Heading 4
    </Typography>

    <Typography as="h5" {...args}>
      Heading 5
    </Typography>

    <Typography as="h6" {...args}>
      Heading 6
    </Typography>
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Defaults to paragraph.',
}

export const Paragraph = Template.bind({})
Paragraph.args = {
  as: 'p',
  children: 'Paragraph',
}

export const Caption1 = Template.bind({})
Caption1.args = {
  variant: 'caption1',
  children: 'Caption 1',
}

export const Display1 = Template.bind({})
Display1.args = {
  children: 'Display 1',
  variant: 'display1',
}

export const Display2 = Template.bind({})
Display2.args = {
  children: 'Display 2',
  variant: 'display2',
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

export const Variant = Template.bind({})
Variant.args = {
  as: 'h1',
  children: 'h1 styled as h6',
  variant: 'h6',
}

export const Center = Template.bind({})
Center.args = {
  children: 'Centered text',
  center: true,
}

export const Style = Template.bind({})
Style.args = {
  children: 'Styled text',
  sx: {
    mobile: {
      fontSize: '1rem',
    },
    tablet: {
      fontSize: '2rem',
    },
    desktop: {
      fontSize: '3rem',
    },
    xxl: {
      fontSize: '4rem',
    },
    fontSize: '5rem',
  },
}

export const NoMargin = TemplateAll.bind({})
NoMargin.args = {
  noMargin: true,
}

export const Bold = TemplateAll.bind({})
Bold.args = {
  bold: true,
}

export const ExtraBold = TemplateAll.bind({})
ExtraBold.args = {
  extraBold: true,
}

export const Black = TemplateAll.bind({})
Black.args = {
  black: true,
}

export const Uppercase = TemplateAll.bind({})
Uppercase.args = {
  uppercase: true,
}
