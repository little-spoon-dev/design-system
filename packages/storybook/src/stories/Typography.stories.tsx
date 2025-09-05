import {
  CAPTION_TYPE,
  DISPLAY_TYPE,
  HEADING_TYPE,
  PARAGRAPH_TYPE,
} from '@littlespoon/typography/src/constants'
import Typography, { type TypographyProps } from '@littlespoon/typography/src/Typography'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { STORYBOOK_BREAKPOINT } from '../constants'

export default {
  title: 'Design System/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

const TemplateAll: ComponentStory<typeof Typography> = (args) => (
  <>
    <Typography {...args} variant={DISPLAY_TYPE.DISPLAY1}>
      Display 1
    </Typography>

    <Typography {...args} variant={DISPLAY_TYPE.DISPLAY2}>
      Display 2
    </Typography>

    <Typography {...args} variant={HEADING_TYPE.H1}>
      Heading 1
    </Typography>

    <Typography {...args} variant={HEADING_TYPE.H2}>
      Heading 2
    </Typography>

    <Typography {...args} variant={HEADING_TYPE.H3}>
      Heading 3
    </Typography>

    <Typography {...args} variant={HEADING_TYPE.H4}>
      Heading 4
    </Typography>

    <Typography {...args} variant={HEADING_TYPE.H5}>
      Heading 5
    </Typography>

    <Typography {...args} variant={HEADING_TYPE.H6}>
      Heading 6
    </Typography>

    <Typography {...args} variant={PARAGRAPH_TYPE.P1}>
      Paragraph 1
    </Typography>

    <Typography {...args} variant={PARAGRAPH_TYPE.P2}>
      Paragraph 2
    </Typography>

    <Typography {...args} variant={PARAGRAPH_TYPE.P3}>
      Paragraph 3
    </Typography>

    <Typography {...args} variant={PARAGRAPH_TYPE.P4}>
      Paragraph 4
    </Typography>

    <Typography {...args} variant={CAPTION_TYPE.CAPTION1}>
      Caption 1
    </Typography>
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Defaults to p',
}

export const Display = (args: TypographyProps) => (
  <>
    <Typography {...args} variant={DISPLAY_TYPE.DISPLAY1}>
      Display 1
    </Typography>

    <Typography {...args} variant={DISPLAY_TYPE.DISPLAY2}>
      Display 2
    </Typography>
  </>
)

export const Heading = (args: TypographyProps) => (
  <>
    <Typography {...args} variant={HEADING_TYPE.H1}>
      Heading 1
    </Typography>

    <Typography {...args} variant={HEADING_TYPE.H2}>
      Heading 2
    </Typography>

    <Typography {...args} variant={HEADING_TYPE.H3}>
      Heading 3
    </Typography>

    <Typography {...args} variant={HEADING_TYPE.H4}>
      Heading 4
    </Typography>

    <Typography {...args} variant={HEADING_TYPE.H5}>
      Heading 5
    </Typography>

    <Typography {...args} variant={HEADING_TYPE.H6}>
      Heading 6
    </Typography>
  </>
)

export const Paragraph = (args: TypographyProps) => (
  <>
    <Typography {...args} variant={PARAGRAPH_TYPE.P1}>
      Paragraph 1
    </Typography>

    <Typography {...args} variant={PARAGRAPH_TYPE.P2}>
      Paragraph 2
    </Typography>

    <Typography {...args} variant={PARAGRAPH_TYPE.P3}>
      Paragraph 3
    </Typography>

    <Typography {...args} variant={PARAGRAPH_TYPE.P4}>
      Paragraph 4
    </Typography>
  </>
)

export const Caption = (args: TypographyProps) => (
  <Typography {...args} variant={CAPTION_TYPE.CAPTION1}>
    Caption 1
  </Typography>
)

export const As = (args: TypographyProps) => {
  return (
    <>
      <Typography as={HEADING_TYPE.H1} variant={DISPLAY_TYPE.DISPLAY1} {...args}>
        variant="display1" as="h1"
      </Typography>

      <Typography as={HEADING_TYPE.H2} variant={DISPLAY_TYPE.DISPLAY2} {...args}>
        variant="display2" as="h2"
      </Typography>
    </>
  )
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

export const Center = TemplateAll.bind({})
Center.args = {
  center: true,
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
