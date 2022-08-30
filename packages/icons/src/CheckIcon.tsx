import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'
import styled from 'styled-components'

import { getScale } from './utils/css-helpers'

export interface CheckIconProps extends React.SVGAttributes<SVGElement> {
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

export default function CheckIcon({
  fill = shadeWhite,
  stroke = shadeBlack,
  size = 'small',
  ...other
}: CheckIconProps) {
  return (
    <CheckIconBase
      width="24"
      height="24"
      viewBox="0 0 24 24"
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <circle cx="12" cy="12" r="12" fill={fill} />
      <title>Check icon</title>
      <desc>Check icon</desc>
      <path
        d="m17.454 8.25-7.5 7.5-3.409-3.41"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </CheckIconBase>
  )
}

const CheckIconBase = styled.svg<CheckIconProps>`
  transition: transform 0.4s;
  transform: scale(${(p) => getScale(p.size)});
`
