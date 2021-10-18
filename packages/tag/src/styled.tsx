import { secondary } from '@littlespoon/theme/lib/colors'
import { token } from '@littlespoon/theme/lib/colors'
import { primary } from '@littlespoon/theme/lib/fonts'
import styled from 'styled-components'

import { TagProps } from './Tag'

/**
 * Gets size styles.
 */
function getSizeCss(props: TagProps): string {
  switch (props.size) {
    case 'small':
      return `
      font-size: ${primary.paragraph.small.fontSize};
      line-height: ${primary.paragraph.small.lineHeight};
      svg {
        width: 1.6rem;
        height: 1.6rem;
      };
    `

    case 'medium':
      return `
      font-size: ${primary.paragraph.medium.fontSize};
      line-height: ${primary.paragraph.medium.lineHeight};
      svg {
        width: 1.65rem;
        height: 1.65rem;
      };
    `

    case 'large':
      return `
      font-size: ${primary.paragraph.large.fontSize};
      line-height: ${primary.paragraph.large.lineHeight};
      svg {
        width: 2.0rem;
        height: 2.0rem;
      };
    `

    default:
      return ''
  }
}

export const DefaultTag = styled.button<TagProps>`
  ${getSizeCss}
  font-family: ${primary.family};
  display: inline-flex;
  align-items: center;
  padding: 0.6rem;
  background-color: ${secondary.secondaryNeutralGrey.grey100()};
  color: ${token.shadeWhite};
  border-radius: 0.5rem;
  border: none;
`

export const DeletableTag = styled.div<TagProps>`
  ${getSizeCss}
  font-family: ${primary.family};
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 0.6rem;
  background-color: ${secondary.secondaryNeutralGrey.grey100()};
  color: ${token.shadeWhite};
  border-radius: 0.5rem;
`

export const Button = styled.button`
  background-color: ${secondary.secondaryNeutralGrey.grey100()};
  padding-right: 0.2rem;
  padding-top: 0.2rem;
  border: none;
`

export const VisuallyHidden = styled.span`
  clip: rect(0 0 0 0);
  position: absolute;
`
