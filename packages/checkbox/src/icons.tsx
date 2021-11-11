import { shadeBlack, shadeWhite } from '@littlespoon/theme/lib/colors/token'

export const checkedIcon = (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Checked checkbox</title>
    <desc>Square with checkmark</desc>
    <path
      d="M16 0H2C0.89543 0 0 0.89543 0 2V16C0 17.1046 0.89543 18 2 18H16C17.1046 18 18 17.1046 18 16V2C18 0.89543 17.1046 0 16 0Z"
      fill={shadeBlack}
    />
    <path
      d="M14.4 5.2876L6.97498 12.7126L3.59998 9.3376"
      stroke={shadeWhite}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const uncheckedIcon = (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Unchecked checkbox</title>
    <desc>Empty square</desc>
    <path
      d="M2 0.916748H16C16.6904 0.916748 17.25 1.47639 17.25 2.16675V16.1667C17.25 16.8571 16.6904 17.4167 16 17.4167H2C1.30964 17.4167 0.75 16.8571 0.75 16.1667V2.16675C0.75 1.47639 1.30964 0.916748 2 0.916748Z"
      stroke={shadeBlack}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
