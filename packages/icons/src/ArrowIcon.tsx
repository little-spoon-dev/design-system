import { shadeBlack } from '@littlespoon/theme/lib/colors/token'

import { ArrowBase } from './ArrowBase'

export interface ArrowIconProps extends React.SVGAttributes<SVGElement> {
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

export default function ArrowIcon({
  direction = 'down',
  fill = shadeBlack,
  size = 'small',
  ...other
}: ArrowIconProps): React.ReactElement {
  return (
    <ArrowBase
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="10"
      viewBox="0 0 15 10"
      size={size}
      direction={direction}
      {...other}
    >
      <title>Arrow icon</title>
      <desc>Arrow icon</desc>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M7.754 9.392l6.644-6.861a.365.365 0 000-.507L13.027.608a.353.353 0 00-.508 0L7.5 5.791 2.481.608a.353.353 0 00-.508 0L.603 2.024a.365.365 0 000 .507l6.643 6.86c.14.145.368.145.508 0z"
      />
    </ArrowBase>
  )
}
