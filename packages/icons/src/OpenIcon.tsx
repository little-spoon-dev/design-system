import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'
import styled from 'styled-components'

export interface OpenIconProps extends React.SVGAttributes<SVGElement> {
  /**
   * The fill of the component. Defaults to white.
   */
  fill?: string

  /**
   * The stroke of the component. Defaults to black.
   */
  stroke?: string
}

export default function OpenIcon({ fill = shadeWhite, stroke = shadeBlack, ...other }) {
  return (
    <OpenIconBase
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <circle cx="12" cy="12" r="12" fill={fill} />
      <title>Open icon</title>
      <path
        d="m7.566 7.566 8.868 8.868m-8.868 0 8.868-8.868"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </OpenIconBase>
  )
}

const OpenIconBase = styled.svg<OpenIconProps>`
  transform: rotate(45deg);
`
