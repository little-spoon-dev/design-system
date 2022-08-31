import { surfaceOverlay60 } from '@littlespoon/theme/lib/colors/token'
import styled from 'styled-components'

export const BackdropBase = styled.div`
  align-items: center;
  background-color: ${surfaceOverlay60};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  -webkit-tap-highlight-color: transparent;
`
