import { surfaceOverlay60 } from '@littlespoon/theme/lib/colors/token'
import ZIndex from '@littlespoon/theme/lib/z-index'
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
  z-index: ${ZIndex.backdrop};
  -webkit-tap-highlight-color: transparent;
`
