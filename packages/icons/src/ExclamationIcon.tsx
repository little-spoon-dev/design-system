import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'
import styled from 'styled-components'

import { getScale } from './utils/css-helpers'

export interface ExclamationIconProps extends React.SVGAttributes<SVGElement> {
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

export default function ExclamationIcon({
  fill = shadeWhite,
  stroke = shadeBlack,
  size = 'small',
  ...other
}: ExclamationIconProps): React.ReactElement {
  return (
    <ExclamationBase
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      size={size}
      {...other}
    >
      <circle cx="12" cy="12" r="12" fill={fill} />
      <title>Exclamation icon</title>
      <desc>Exclamation icon</desc>
      <path
        d="M11.876 16.276H12v.124h-.124v-.124ZM11.938 7.6v4.958"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </ExclamationBase>
  )
}

export const ExclamationBase = styled.svg<ExclamationIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  transform: scale(${(props) => getScale(props.size)});
`
