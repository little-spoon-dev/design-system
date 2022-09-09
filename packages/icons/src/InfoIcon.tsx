import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'
import styled from 'styled-components'

import { getScale } from './utils/css-helpers'

export interface InfoIconProps extends React.SVGAttributes<SVGElement> {
  /**
   * The fill of the component. Defaults to black.
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

export default function InfoIcon({
  fill = shadeWhite,
  stroke = shadeBlack,
  size = 'small',
  ...other
}: InfoIconProps): React.ReactElement {
  return (
    <InfoBase
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      size={size}
      {...other}
    >
      <circle cx="12" cy="12" r="12" fill={fill} />
      <title>Info icon</title>
      <desc>Info icon</desc>
      <path
        d="M12 7.72391H11.8761L11.8761 7.59996H12V7.72391Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9382 16.4V11.4422"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </InfoBase>
  )
}

export const InfoBase = styled.svg<InfoIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  transform: scale(${(props) => getScale(props.size)});
`
