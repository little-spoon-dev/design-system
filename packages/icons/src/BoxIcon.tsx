import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import styled from 'styled-components'

import { getScale } from './utils/css-helpers'

export interface BoxIconProps extends React.SVGAttributes<SVGElement> {
  /**
   * The fill of the component. Defaults to black.
   */
  fill?: string

  /**
   * The color of the notification circle in the top right corner of the box.
   * Hidden if it's not provided.
   */
  notificationColor?: string

  /**
   * The size of the component. Defaults to "small".
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large'
}

export default function BoxIcon({
  fill = shadeBlack,
  notificationColor,
  size = 'small',
  ...other
}: BoxIconProps): React.ReactElement {
  return (
    <BoxIconBase
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      size={size}
      {...other}
    >
      <title>Box icon</title>
      <desc>Box icon</desc>
      <path
        d="M13.409 4.51299C12.5054 4.14663 11.4946 4.14663 10.591 4.51299L8.401 5.40099L17.993 9.13099L21.367 7.82799C21.2287 7.71321 21.0736 7.62045 20.907 7.55299L13.409 4.51299V4.51299ZM22 9.19099L12.75 12.765V23.688C12.974 23.643 13.194 23.576 13.409 23.489L20.907 20.449C21.23 20.3182 21.5065 20.0939 21.7013 19.8049C21.896 19.516 22 19.1754 22 18.827V9.19199V9.19099ZM11.25 23.688V12.765L2 9.19099V18.828C2.0002 19.1763 2.10431 19.5166 2.29903 19.8054C2.49374 20.0941 2.77019 20.3182 3.093 20.449L10.591 23.489C10.806 23.576 11.026 23.642 11.25 23.689V23.688ZM2.633 7.82799L12 11.447L15.917 9.93299L6.374 6.22299L3.093 7.55299C2.923 7.62199 2.769 7.71499 2.633 7.82799V7.82799Z"
        fill={fill}
      />
      {notificationColor && <circle cx="19.3943" cy="6.69098" r="6" fill={notificationColor} />}
    </BoxIconBase>
  )
}

export const BoxIconBase = styled.svg<BoxIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  transform: scale(${(props) => getScale(props.size)});
`
