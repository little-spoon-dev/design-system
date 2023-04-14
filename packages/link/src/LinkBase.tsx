import { informative50 } from '@littlespoon/theme/lib/colors/alert'
import { brand80 } from '@littlespoon/theme/lib/colors/primary'
import { grey20, grey70 } from '@littlespoon/theme/lib/colors/secondary'
import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import { family } from '@littlespoon/theme/lib/fonts/primary'
import styled from 'styled-components'

import { type LinkProps, LinkUnderline } from './Link'

/**
 * {@link https://zeroheight.com/3ddd0f892/p/1026a1-link/b/375553}
 */
export const LinkBase = styled.a<LinkProps>`
  color: ${shadeBlack};
  font-family: ${family};
  &:visited {
    color: ${brand80()};
  }
  &:hover {
    color: ${grey70()};
  }
  &:focus {
    border-radius: 0.2rem;
    outline: 0.2rem solid ${informative50()};
    outline-offset: 0.2rem;
  }
  // Remove focus styles for non-keyboard focus
  &:focus:not(:focus-visible) {
    outline: 0;
  }
  ${getUnderlineCss}
`

export const LinkDisabled = styled.span`
  color: ${grey20()};
  cursor: not-allowed;
  font-family: ${family};
  ${getUnderlineCss}
`

/**
 * Gets underline styles.
 */
function getUnderlineCss(props: LinkProps): string {
  let textDecoration = ''
  let textDecorationHover = ''

  switch (props.underline) {
    case LinkUnderline.NONE:
      textDecoration = 'none'
      textDecorationHover = 'none'
      break

    case LinkUnderline.HOVER:
      textDecoration = 'none'
      textDecorationHover = 'underline'
      break

    default:
      textDecoration = 'underline'
      textDecorationHover = 'underline'
      break
  }

  return `
    text-decoration: ${textDecoration};
    &:hover {
      text-decoration: ${textDecorationHover};
    }
  `
}
