import type React from 'react'

export interface DividerProps extends React.SVGAttributes<SVGElement> {
  /**
   * The curve divider variant, defaults to false
   */
  inverted?: boolean
}

export default function Divider({
  inverted = false,
}: DividerProps): React.ReactElement<DividerProps> {
  return (
    <svg
      fill="none"
      preserveAspectRatio="none"
      role="separator"
      viewBox={`0 0 1921 ${inverted ? 27 : 34}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Divider</title>
      <desc>Curved divider</desc>
      <path
        d={
          inverted
            ? 'M0.189453 4.69347C79.7719 11.8196 135.64 11.4505 222.462 9.58349C925.957 -5.54451 1280.29 -0.845186 1750.02 23.8048C1797.52 26.2977 1871.29 26.2977 1920.19 23.8048'
            : 'M1920.19 27.4928C1784.07 30.7849 1605.12 32.9591 1365.08 32.9591C820.689 32.9591 354.052 -11.0186 0.189453 4.20266'
        }
        stroke="#131415"
      />
    </svg>
  )
}
