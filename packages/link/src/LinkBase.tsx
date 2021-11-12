import { informative50 } from '@littlespoon/theme/lib/colors/alert'
import { blue80 } from '@littlespoon/theme/lib/colors/primary'
import { grey70 } from '@littlespoon/theme/lib/colors/secondary'
import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import { family } from '@littlespoon/theme/lib/fonts/primary'
import styled from 'styled-components'

import type { LinkProps } from './Link'

/**
 * {@link https://zeroheight.com/3ddd0f892/p/1026a1-link/b/375553}
 */
export const LinkBase = styled.a<LinkProps>`
  color: ${shadeBlack};
  font-family: ${family};
  &:visited {
    color: ${blue80()};
  }
  &:hover {
    color: ${grey70()};
  }
  &:focus {
    border-radius: 0.2rem;
    outline: 0.2rem solid ${informative50()};
    outline-offset: 0.2rem;
  }
  // remove focus styles for non-keyboard focus
  :focus:not(:focus-visible) {
    outline: 0;
  }
  ${getUnderlineCss}
`

/**
 * Gets underline styles.
 */
function getUnderlineCss(props: LinkProps): string {
  let textDecoration = ''
  let textDecorationHover = ''

  switch (props.underline) {
    case 'none':
      textDecoration = 'none'
      break

    case 'hover':
      textDecoration = 'none'
      textDecorationHover = 'underline'
      break

    default:
      textDecoration = 'underline'
      break
  }

  return `text-decoration: ${textDecoration}; &:hover { text-decoration: ${textDecorationHover} }`
}
