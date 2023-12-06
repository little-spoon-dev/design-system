import type { StyleProps } from '@littlespoon/theme/lib/style'
import type React from 'react'

import { Bold } from './Bold'
import { CaptionType, DisplayType, HeadingType, Paragraph, ParagraphType } from './constants'
import { TypographyBase } from './TypographyBase'

export type As = (typeof HeadingType)[keyof typeof HeadingType] | typeof Paragraph

export type VariantString =
  | As
  | (typeof CaptionType)[keyof typeof CaptionType]
  | (typeof DisplayType)[keyof typeof DisplayType]
  | (typeof ParagraphType)[keyof typeof ParagraphType]

export interface VariantStyleByBreakpoint {
  [key: number]: VariantString
}

export type Variant = VariantString | VariantStyleByBreakpoint

export interface TypographyProps extends StyleProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode

  /**
   * The root node component. Use a string for an HTML element. Defaults to "p".
   */
  as?: As

  /**
   * The variant to use. Defaults to `as`.
   */
  variant?: Variant

  /**
   * Whether the content is bold. Defaults to false.
   */
  bold?: boolean

  /**
   * Whether the content is extra bold. Defaults to false.
   */
  extraBold?: boolean

  /**
   * Whether the content is black. Defaults to false.
   */
  black?: boolean

  /**
   * Whether to remove bottom margin. Defaults to false.
   */
  noMargin?: boolean

  /**
   * Whether to transform the text to uppercase. Defaults to false.
   */
  uppercase?: boolean

  /**
   * Whether to align the text to the center. Defaults to false.
   */
  center?: boolean
}

/**
 * Typography
 */
export default function Typography({
  bold,
  extraBold,
  black,
  children,
  ...other
}: TypographyProps): React.ReactElement<TypographyProps> {
  return (
    <TypographyBase {...other} variant={other.variant || other.as}>
      {bold || extraBold || black ? (
        <Bold
          bold={bold}
          extraBold={extraBold}
          black={black}
          uppercase={other.uppercase}
          variant={other.variant}
        >
          {children}
        </Bold>
      ) : (
        children
      )}
    </TypographyBase>
  )
}
