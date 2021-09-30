export const dividerSVG = (inverted: boolean): React.ReactElement => {
  interface Divider {
    viewBox?: string
    pathD?: string
  }

  const divider: Divider = {}

  if (inverted) {
    divider.viewBox = '0 0 1921 27'
    divider.pathD =
      'M0.189453 4.69347C79.7719 11.8196 135.64 11.4505 222.462 9.58349C925.957 -5.54451 1280.29 -0.845186 1750.02 23.8048C1797.52 26.2977 1871.29 26.2977 1920.19 23.8048'
  } else {
    divider.viewBox = '0 0 1921 34'
    divider.pathD =
      'M1920.19 27.4928C1784.07 30.7849 1605.12 32.9591 1365.08 32.9591C820.689 32.9591 354.052 -11.0186 0.189453 4.20266'
  }

  return (
    <svg
      role="separator"
      viewBox={divider.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <title>Curved Dividing Line</title>
      <desc>A curved line dividing sections.</desc>
      <path d={divider.pathD} stroke="#131415" />
    </svg>
  )
}
