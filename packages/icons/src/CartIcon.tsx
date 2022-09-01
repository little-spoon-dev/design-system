import { shadeBlack } from '@littlespoon/theme/lib/colors/token'
import styled from 'styled-components'

import { getScale } from './utils/css-helpers'

export interface CartIconProps extends React.SVGAttributes<SVGElement> {
  /**
   * The fill of the component. Defaults to black.
   */
  fill?: string

  /**
   * The size of the component. Defaults to "small".
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large'
}

export default function CartIcon({
  fill = shadeBlack,
  size = 'small',
  ...other
}: CartIconProps): React.ReactElement {
  return (
    <CartIconBase
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      size={size}
      {...other}
    >
      <title>Cart icon</title>
      <desc>Cart icon</desc>
      <path
        d="M7.99777 17.9978C6.89818 17.9978 6.00851 18.8975 6.00851 19.997C6.00851 21.0966 6.89818 21.9963 7.99777 21.9963C9.09736 21.9963 9.99703 21.0966 9.99703 19.997C9.99703 18.8975 9.09736 17.9978 7.99777 17.9978ZM2 3.00335C2 3.55315 2.44983 4.00298 2.99963 4.00298H3.99926L7.59792 11.5902L6.24842 14.0293C5.51869 15.3688 6.47834 16.9982 7.99777 16.9982H18.9937C19.5435 16.9982 19.9933 16.5483 19.9933 15.9985C19.9933 15.4487 19.5435 14.9989 18.9937 14.9989H7.99777L9.09737 12.9996H16.5446C17.2943 12.9996 17.9541 12.5898 18.2939 11.97L21.8726 5.48243C22.2425 4.82268 21.7627 4.00298 21.0029 4.00298H6.20844L5.53869 2.57351C5.37875 2.22364 5.01888 2.00372 4.63902 2.00372H2.99963C2.44983 2.00372 2 2.45356 2 3.00335ZM17.9941 17.9978C16.8945 17.9978 16.0048 18.8975 16.0048 19.997C16.0048 21.0966 16.8945 21.9963 17.9941 21.9963C19.0937 21.9963 19.9933 21.0966 19.9933 19.997C19.9933 18.8975 19.0937 17.9978 17.9941 17.9978Z"
        fill={fill}
      />
    </CartIconBase>
  )
}

export const CartIconBase = styled.svg<CartIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  transform: scale(${(props) => getScale(props.size)});
`
