import { rem } from '@littlespoon/theme/src/utils'

import { CaptionType, ParagraphType } from './constants'
import type { TypographyProps } from './Typography'

type ParagraphTypeType = (typeof ParagraphType)[keyof typeof ParagraphType]
export function getLetterSpacingCssValue({
  bold,
  uppercase,
  variant,
}: Pick<TypographyProps, 'bold' | 'uppercase' | 'variant'>) {
  if (!uppercase) {
    return '0'
  }
  const paragraphTypes = Object.values(ParagraphType)
  if (typeof variant === 'string') {
    if (paragraphTypes.includes(variant as ParagraphTypeType)) {
      return bold ? rem(0.1) : rem(0.05)
    } else if (variant === CaptionType.CAPTION1) {
      return bold ? rem(0.05) : '0'
    }
  } else if (typeof variant === 'object') {
    // TODO: Implement this
    // Object.entries(variant).some(([, value]) => paragraphTypes.includes(value))))
  }
  return '0'
}
