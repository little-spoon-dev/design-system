import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import styled from 'styled-components'

import { getRotate, getScale } from './utils/css-helpers'

export interface CaretIconProps extends React.SVGAttributes<SVGElement> {
  /**
   * The fill of the component. Defaults to black.
   */
  fill?: string

  /**
   * The direction of the component. Defaults to "down".
   */
  direction?: 'up' | 'down' | 'left' | 'right'

  /**
   * The size of the component. Defaults to "small".
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large'
}

export default function CaretIcon({
  direction = 'down',
  fill = shadeBlack,
  size = 'small',
  ...other
}: CaretIconProps): React.ReactElement {
  return (
    <CaretIconBase
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      size={size}
      direction={direction}
      {...other}
    >
      <title>Caret icon</title>
      <desc>Caret icon</desc>
      <path
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.71242 6.14214H20.2828C20.6222 6.14187 20.9541 6.2423 21.2365 6.43072C21.5189 6.61914 21.739 6.88708 21.8691 7.20064C21.9991 7.5142 22.0333 7.85929 21.9671 8.19226C21.901 8.52522 21.7376 8.83108 21.4976 9.07116L13.2116 17.3555C12.8898 17.6771 12.4534 17.8579 11.9985 17.8579C11.5435 17.8579 11.1071 17.6771 10.7853 17.3555L2.49757 9.07116C2.25914 8.83035 2.09718 8.52444 2.03205 8.19188C1.96692 7.85931 2.00153 7.51492 2.13151 7.20196C2.2615 6.88899 2.48108 6.62143 2.76266 6.43286C3.04423 6.2443 3.37526 6.14316 3.71414 6.14214H3.71242Z"
      />
    </CaretIconBase>
  )
}

const CaretIconBase = styled.svg<CaretIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  transform: scale(${(props) => getScale(props.size)})
    rotate(${(props) => getRotate(props.direction)}deg);
`
