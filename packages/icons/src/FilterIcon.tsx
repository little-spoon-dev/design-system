import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'
import styled from 'styled-components'

import { getSvgSize } from './utils/css-helpers'

export interface FilterIconProps extends React.SVGAttributes<SVGElement> {
  /**
   * The fill of the component. Defaults to white.
   */
  fill?: string

  /**
   * The size of the component. Defaults to "small".
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large'

  /**
   * The stroke of the component. Defaults to black.
   */
  stroke?: string
}

export default function FilterIcon({
  fill = shadeWhite,
  size = 'small',
  stroke = shadeBlack,
  ...other
}: FilterIconProps): React.ReactElement {
  return (
    <FilterBase xmlns="http://www.w3.org/2000/svg" size={size} viewBox="0 0 44 44" {...other}>
      <title>Filter icon</title>
      <desc>Filter icon</desc>
      <path
        d="M0 5a5 5 0 0 1 5-5h34a5 5 0 0 1 5 5v34a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5Z"
        fill={fill}
      />
      <path
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.584 28.38h16.833"
      />
      <circle cx="27.562" cy="28.666" r="1.583" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <path
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.584 15.047h16.833"
      />
      <path
        d="M27.562 16.917a1.583 1.583 0 1 0 0-3.167 1.583 1.583 0 0 0 0 3.167Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />
      <path
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M30.418 21.714H13.585"
      />
      <path
        d="M16.44 23.584a1.583 1.583 0 1 1 0-3.167 1.583 1.583 0 0 1 0 3.167Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />
    </FilterBase>
  )
}

export const FilterBase = styled.svg<FilterIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  height: ${(p) => getSvgSize(p.size)};
  width: ${(p) => getSvgSize(p.size)};
`
