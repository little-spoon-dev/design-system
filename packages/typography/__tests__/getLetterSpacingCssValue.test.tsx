import type { Variant } from '../src'
import { CaptionType, HeadingType, ParagraphType } from '../src/constants'
import { getLetterSpacingCssValue } from '../src/util'

it.each<
  [bold: boolean | undefined, uppercase: boolean | undefined, variant: Variant, expected: string]
>([
  [undefined, undefined, ParagraphType.P4, '0'],
  [false, undefined, ParagraphType.P4, '0'],
  [true, undefined, ParagraphType.P4, '0'],

  [undefined, undefined, { 0: ParagraphType.P4, 768: HeadingType.H4 }, '0'],
  [false, undefined, { 0: ParagraphType.P4, 768: HeadingType.H4 }, '0'],
  [true, undefined, { 0: ParagraphType.P4, 768: HeadingType.H4 }, '0'],

  [undefined, false, ParagraphType.P4, '0'],
  [false, false, ParagraphType.P4, '0'],
  [true, false, ParagraphType.P4, '0'],

  [undefined, false, { 0: ParagraphType.P4, 768: HeadingType.H4 }, '0'],
  [false, false, { 0: ParagraphType.P4, 768: HeadingType.H4 }, '0'],
  [true, false, { 0: ParagraphType.P4, 768: HeadingType.H4 }, '0'],

  [undefined, true, ParagraphType.P4, '0.05rem'],
  [false, true, ParagraphType.P4, '0.05rem'],
  [true, true, ParagraphType.P4, '0.1rem'],

  [undefined, undefined, CaptionType.CAPTION1, '0'],
  [false, undefined, CaptionType.CAPTION1, '0'],
  [true, undefined, CaptionType.CAPTION1, '0'],

  [undefined, undefined, { 0: CaptionType.CAPTION1, 768: HeadingType.H4 }, '0'],
  [false, undefined, { 0: CaptionType.CAPTION1, 768: HeadingType.H4 }, '0'],
  [true, undefined, { 0: CaptionType.CAPTION1, 768: HeadingType.H4 }, '0'],

  [undefined, false, CaptionType.CAPTION1, '0'],
  [false, false, CaptionType.CAPTION1, '0'],
  [true, false, CaptionType.CAPTION1, '0'],

  [undefined, false, { 0: CaptionType.CAPTION1, 768: HeadingType.H4 }, '0'],
  [false, false, { 0: CaptionType.CAPTION1, 768: HeadingType.H4 }, '0'],
  [true, false, { 0: CaptionType.CAPTION1, 768: HeadingType.H4 }, '0'],

  [undefined, true, CaptionType.CAPTION1, '0'],
  [false, true, CaptionType.CAPTION1, '0'],
  [true, true, CaptionType.CAPTION1, '0.05rem'],

  [undefined, true, HeadingType.H4, '0'],
  [false, true, HeadingType.H4, '0'],
  [true, true, HeadingType.H4, '0'],

  [undefined, true, { 0: ParagraphType.P4, 768: HeadingType.H4 }, '0'],
  [false, true, { 0: ParagraphType.P4, 768: HeadingType.H4 }, '0'],
  [true, true, { 0: ParagraphType.P4, 768: HeadingType.H4 }, '0'],

  [undefined, true, { 0: HeadingType.H4, 768: HeadingType.H3 }, '0'],
  [false, true, { 0: HeadingType.H4, 768: HeadingType.H3 }, '0'],
  [true, true, { 0: HeadingType.H4, 768: HeadingType.H3 }, '0'],
])(
  'getLetterSpacingCssValue({bold: %j, uppercase: %j, variant: %j})',
  (bold, uppercase, variant, expected) => {
    expect(
      getLetterSpacingCssValue({
        bold,
        uppercase,
        variant,
      }),
    ).toBe(expected)
  },
)
