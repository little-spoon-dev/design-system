import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import styled from 'styled-components'

import { getScale } from './utils/css-helpers'

export interface BillIconProps extends React.SVGAttributes<SVGElement> {
  /**
   * The fill of the component. Defaults to black.
   */
  fill?: string

  /**
   * The stroke of the component. Defaults to null.
   */
  stroke?: string

  /**
   * The size of the component. Defaults to "small".
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large'
}

export default function BillIcon({
  fill = shadeBlack,
  stroke,
  size = 'small',
  ...other
}: BillIconProps): React.ReactElement {
  return (
    <BillIconBase
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      size={size}
      {...other}
    >
      <title>Bill icon</title>
      <desc>Bill icon</desc>
      <path
        d="M4.07275 3.83246C4.07275 3.53211 4.19207 3.24406 4.40444 3.03169C4.61682 2.81931 4.90487 2.7 5.20521 2.7H18.7947C19.0951 2.7 19.3831 2.81931 19.5955 3.03169C19.8079 3.24406 19.9272 3.53211 19.9272 3.83246V21.3L15.9636 18.4689L12 21.3L8.03636 18.4689L4.07275 21.3V3.83246Z"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.60254 12.8921H15.3973M8.60254 8.3623H15.3973"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BillIconBase>
  )
}

export const BillIconBase = styled.svg<BillIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  transform: scale(${(props) => getScale(props.size)});
`
