import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import styled from 'styled-components'

import { getScale } from './utils/css-helpers'

export interface LogoutIconProps extends React.SVGAttributes<SVGElement> {
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

export default function LogoutIcon({
  fill = shadeBlack,
  stroke = shadeBlack,
  size = 'small',
  ...other
}: LogoutIconProps): React.ReactElement {
  return (
    <LogoutIconBase
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      size={size}
      {...other}
    >
      <title>Logout icon</title>
      <desc>Logout icon</desc>
      <path
        d="M16.4865 16.5405C16.2883 16.3423 16.1892 16.0991 16.1892 15.8108C16.1892 15.5225 16.2973 15.2793 16.5135 15.0811L18.6216 12.973H10.2432C9.97297 12.973 9.74324 12.8739 9.55405 12.6757C9.36487 12.4775 9.27027 12.2432 9.27027 11.973C9.27027 11.7027 9.36487 11.473 9.55405 11.2838C9.74324 11.0946 9.97297 11 10.2432 11H18.5676L16.4054 8.81081C16.2072 8.63063 16.1126 8.40541 16.1216 8.13514C16.1306 7.86486 16.2342 7.63063 16.4324 7.43243C16.6306 7.25225 16.8694 7.16216 17.1486 7.16216C17.4279 7.16216 17.6757 7.26126 17.8919 7.45946L21.7568 11.3243C21.8468 11.4324 21.9189 11.545 21.973 11.6622C22.027 11.7793 22.0541 11.9009 22.0541 12.027C22.0541 12.1532 22.027 12.2748 21.973 12.3919C21.9189 12.509 21.8468 12.6126 21.7568 12.7027L17.9189 16.5676C17.7387 16.7477 17.509 16.8378 17.2297 16.8378C16.9505 16.8378 16.7027 16.7387 16.4865 16.5405V16.5405ZM3.97297 22C3.43243 22 2.96847 21.8018 2.58108 21.4054C2.19369 21.009 2 20.5495 2 20.027V3.97297C2 3.45045 2.19369 2.99099 2.58108 2.59459C2.96847 2.1982 3.43243 2 3.97297 2H10.9189C11.1892 2 11.4234 2.09459 11.6216 2.28378C11.8198 2.47297 11.9189 2.7027 11.9189 2.97297C11.9189 3.26126 11.8198 3.5 11.6216 3.68919C11.4234 3.87838 11.1892 3.97297 10.9189 3.97297H3.97297V20.027H10.9189C11.1892 20.027 11.4234 20.1216 11.6216 20.3108C11.8198 20.5 11.9189 20.7297 11.9189 21C11.9189 21.2883 11.8198 21.527 11.6216 21.7162C11.4234 21.9054 11.1892 22 10.9189 22H3.97297Z"
        fill={fill}
        stroke={stroke}
      />
    </LogoutIconBase>
  )
}

export const LogoutIconBase = styled.svg<LogoutIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  transform: scale(${(props) => getScale(props.size)});
`
