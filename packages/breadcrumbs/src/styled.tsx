import { informative50 } from '@littlespoon/theme/lib/colors/alert'
import { visitedLinkPurple } from '@littlespoon/theme/lib/colors/secondary'
import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import { primary } from '@littlespoon/theme/lib/fonts'
import styled from 'styled-components'

import type { BreadcrumbsProps } from './Breadcrumbs'

const defaultStyles = `
  font-family: ${primary.family};
  color: ${shadeBlack};
`

/**
 * Gets size styles.
 */
function getSizeCss(props: BreadcrumbsProps): string {
  switch (props.size) {
    case 'small':
      return `
        font-size: ${primary.paragraph.small.fontSize};
        line-height: ${primary.paragraph.small.lineHeight};
      `

    case 'medium':
      return `
        font-size: ${primary.paragraph.medium.fontSize};
        line-height: ${primary.paragraph.medium.lineHeight};
      `

    case 'large':
      return `
        font-size: ${primary.paragraph.large.fontSize};
        line-height: ${primary.paragraph.large.lineHeight};
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

export const Crumb = styled.li`
  > * {
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

export const ActiveBreadcrumb = styled.li`
  margin: 0;
  ${defaultStyles}
  font-weight: ${primary.weight.bold};
`

export const Separator = styled.p`
  margin: 0 1rem;
  ${defaultStyles}
`
