import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import styled from 'styled-components'

import { getScale } from './utils/css-helpers'

export interface HamburgerMenuIconProps extends React.SVGAttributes<SVGElement> {
  /**
   * The fill of the component. Defaults to null
   */
  fill?: string

  /**
   * The stroke of the component. Defaults to black.
   */
  stroke?: string

  /**
   * The size of the component. Defaults to "small".
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large'
}

export default function HamburgerMenuIcon({
  fill,
  stroke = shadeBlack,
  size = 'small',
  ...other
}: HamburgerMenuIconProps): React.ReactElement {
  return (
    <HamburgerMenuIconBase
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      size={size}
      {...other}
    >
      {fill && <circle cx="12" cy="12" r="12" fill={fill} />}
      <title>HamburgerMenu icon</title>
      <desc>HamburgerMenu icon</desc>
      <path
        d="M2.75 18.1241H21.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.75 12H21.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.75 5.87587H21.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </HamburgerMenuIconBase>
  )
}

export const HamburgerMenuIconBase = styled.svg<HamburgerMenuIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  transform: scale(${(props) => getScale(props.size)});
`
