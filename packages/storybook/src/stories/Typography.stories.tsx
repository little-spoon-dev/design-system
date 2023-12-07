import {
  CAPTION_TYPE,
  DISPLAY_TYPE,
  HEADING_TYPE,
  PARAGRAPH,
  PARAGRAPH_TYPE,
} from '@littlespoon/typography/src/constants'
import Typography from '@littlespoon/typography/src/Typography'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { STORYBOOK_BREAKPOINT } from '../constants'

export default {
  title: 'Design System/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

const TemplateAll: ComponentStory<typeof Typography> = (args) => (
  <>
    <Typography as={HEADING_TYPE.H1} variant={DISPLAY_TYPE.DISPLAY1} {...args}>
      Display 1
    </Typography>

    <Typography as={HEADING_TYPE.H2} variant={DISPLAY_TYPE.DISPLAY2} {...args}>
      Display 2
    </Typography>

    <Typography as={HEADING_TYPE.H1} {...args}>
      Heading 1
    </Typography>

    <Typography as={HEADING_TYPE.H2} {...args}>
      Heading 2
    </Typography>

    <Typography as={HEADING_TYPE.H3} {...args}>
      Heading 3
    </Typography>

    <Typography as={HEADING_TYPE.H4} {...args}>
      Heading 4
    </Typography>

    <Typography as={HEADING_TYPE.H5} {...args}>
      Heading 5
    </Typography>

    <Typography as={HEADING_TYPE.H6} {...args}>
      Heading 6
    </Typography>

    <Typography as={PARAGRAPH} {...args}>
      Paragraph
    </Typography>

    <Typography variant={PARAGRAPH_TYPE.P1} {...args}>
      Paragraph 1
    </Typography>

    <Typography variant={PARAGRAPH_TYPE.P2} {...args}>
      Paragraph 2
    </Typography>

    <Typography variant={PARAGRAPH_TYPE.P3} {...args}>
      Paragraph 3
    </Typography>

    <Typography variant={PARAGRAPH_TYPE.P4} {...args}>
      Paragraph 4
    </Typography>

    <Typography variant={CAPTION_TYPE.CAPTION1} {...args}>
      Caption 1
    </Typography>
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Defaults to Paragraph',
}

export const Paragraph = Template.bind({})
Paragraph.args = {
  as: PARAGRAPH,
  children: 'Paragraph',
}

export const Caption1 = Template.bind({})
Caption1.args = {
  children: 'Caption 1',
  variant: CAPTION_TYPE.CAPTION1,
}

export const Display1 = Template.bind({})
Display1.args = {
  children: 'Display 1',
  variant: DISPLAY_TYPE.DISPLAY1,
}

export const Display2 = Template.bind({})
Display2.args = {
  children: 'Display 2',
  variant: DISPLAY_TYPE.DISPLAY2,
}

export const Heading1 = Template.bind({})
Heading1.args = {
  as: HEADING_TYPE.H1,
  children: 'Heading 1',
}

export const Heading1Uppercase = Template.bind({})
Heading1Uppercase.args = {
  as: HEADING_TYPE.H1,
  children: 'Heading 1',
  uppercase: true,
}

export const Heading1UppercaseBold = Template.bind({})
Heading1UppercaseBold.args = {
  as: HEADING_TYPE.H1,
  bold: true,
  children: 'Heading 1',
  uppercase: true,
}

export const Heading2 = Template.bind({})
Heading2.args = {
  as: HEADING_TYPE.H2,
  children: 'Heading 2',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  as: HEADING_TYPE.H3,
  children: 'Heading 3',
}

export const Heading4 = Template.bind({})
Heading4.args = {
  as: HEADING_TYPE.H4,
  children: 'Heading 4',
}

export const Heading5 = Template.bind({})
Heading5.args = {
  as: HEADING_TYPE.H5,
  children: 'Heading 5',
}

export const Heading6 = Template.bind({})
Heading6.args = {
  as: HEADING_TYPE.H6,
  children: 'Heading 6',
}

export const Paragraph1 = Template.bind({})
Paragraph1.args = {
  children: 'Paragraph 1',
  variant: PARAGRAPH_TYPE.P1,
}

export const Paragraph1Uppercase = Template.bind({})
Paragraph1Uppercase.args = {
  children: 'Paragraph 1',
  uppercase: true,
  variant: PARAGRAPH_TYPE.P1,
}

export const Paragraph1UppercaseBold = Template.bind({})
Paragraph1UppercaseBold.args = {
  bold: true,
  children: 'Paragraph 1',
  uppercase: true,
  variant: PARAGRAPH_TYPE.P1,
}

export const Variant = Template.bind({})
Variant.args = {
  as: HEADING_TYPE.H1,
  children: `${HEADING_TYPE.H1} styled as ${HEADING_TYPE.H6}`,
  variant: HEADING_TYPE.H6,
}

export const Center = Template.bind({})
Center.args = {
  center: true,
  children: 'Centered',
}

export const Style = Template.bind({})
Style.args = {
  children: 'Styled (resize viewport to change my size)',
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

export const UppercaseBold = TemplateAll.bind({})
UppercaseBold.args = {
  bold: true,
  uppercase: true,
}

export const VariantByBreakpoint = Template.bind({})
VariantByBreakpoint.args = {
  children: 'Variant by breakpoint (resize viewport to change my size)',
  variant: {
    0: PARAGRAPH_TYPE.P4,
    [STORYBOOK_BREAKPOINT.LARGE_MOBILE]: PARAGRAPH_TYPE.P3,
    [STORYBOOK_BREAKPOINT.TABLET]: PARAGRAPH_TYPE.P2,
  },
}

export const VariantByBreakpointUppercase = Template.bind({})
VariantByBreakpointUppercase.args = {
  children: 'Variant by breakpoint (resize viewport to change my size)',
  uppercase: true,
  variant: {
    0: PARAGRAPH_TYPE.P1,
    [STORYBOOK_BREAKPOINT.LARGE_MOBILE]: HEADING_TYPE.H3,
    [STORYBOOK_BREAKPOINT.TABLET]: HEADING_TYPE.H1,
  },
}

export const VariantByBreakpointUppercaseBold = Template.bind({})
VariantByBreakpointUppercaseBold.args = {
  bold: true,
  children: 'Variant by breakpoint (resize viewport to change my size)',
  uppercase: true,
  variant: {
    0: PARAGRAPH_TYPE.P1,
    [STORYBOOK_BREAKPOINT.LARGE_MOBILE]: HEADING_TYPE.H3,
    [STORYBOOK_BREAKPOINT.TABLET]: HEADING_TYPE.H1,
  },
}
