import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'
import styled from 'styled-components'

import { getScale } from './utils/css-helpers'

export interface SubtractIconProps extends React.SVGAttributes<SVGElement> {
  /**
   * The fill of the component. Defaults to white.
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

export default function SubtractIcon({
  fill = shadeWhite,
  stroke = shadeBlack,
  size = 'small',
  ...other
}: SubtractIconProps) {
  return (
    <SubtractIconBase
      width="24"
      height="24"
      viewBox="0 0 24 24"
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <circle cx="12" cy="12" r="12" fill={fill} />
      <title>Subtract icon</title>
      <path
        d="M3 12h18.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SubtractIconBase>
  )
}

const SubtractIconBase = styled.svg<SubtractIconProps>`
  transition: transform 0.4s;
  transform: scale(${(p) => getScale(p.size)});
`
