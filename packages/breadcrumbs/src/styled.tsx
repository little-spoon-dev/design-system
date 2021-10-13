import { informative50 } from '@littlespoon/theme/lib/colors/alert'
import { visitedLinkPurple } from '@littlespoon/theme/lib/colors/secondary'
import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import { family, paragraph, weight } from '@littlespoon/theme/lib/fonts/primary'
import styled from 'styled-components'

import type { BreadcrumbsProps } from './Breadcrumbs'

const defaultStyles = `
  font-family: ${family};
  color: ${shadeBlack};
`

/**
 * Gets size styles.
 */
function getSizeCss(props: BreadcrumbsProps): string {
  switch (props.size) {
    case 'small':
      return `
        font-size: ${paragraph.small.fontSize};
        line-height: ${paragraph.small.lineHeight};
      `

    case 'medium':
      return `
        font-size: ${paragraph.medium.fontSize};
        line-height: ${paragraph.medium.lineHeight};
      `

    case 'large':
      return `
        font-size: ${paragraph.large.fontSize};
        line-height: ${paragraph.large.lineHeight};
      `

    default:
      return ''
  }
}

export const BreadcrumbsWrapper = styled.nav`
  display: flex;
  width: 100%;
`

export const BreadcrumbsList = styled.ol`
  display: flex;
  width: 100%;
  list-style: none;
  ${getSizeCss}
`

export const BreadcrumbItem = styled.li`
  > a {
    ${defaultStyles}
    text-decoration: none;

    &:focus {
      outline: 0.2rem solid ${informative50()};
      outline-offset: 0.2rem;
    }

    &:visited {
      color: ${visitedLinkPurple()};
    }
  }
`

export const BreadcrumbActive = styled.li`
  ${defaultStyles}
  margin: 0;
  font-weight: ${weight.bold};
`

export const Separator = styled.li`
  ${defaultStyles}
  margin: 0 1rem;
`
