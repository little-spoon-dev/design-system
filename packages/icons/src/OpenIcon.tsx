import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'

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
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(45)"
      {...other}
    >
      <circle cx="12" cy="12" r="12" fill={fill} />
      <title>Open icon</title>
      <desc>Open icon</desc>
      <path
        d="M7.56567 7.56583L16.4342 16.4343M7.56568 16.4343L16.4342 7.56583"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
