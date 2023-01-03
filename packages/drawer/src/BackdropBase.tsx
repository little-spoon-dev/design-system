import { surfaceOverlay60 } from '@littlespoon/theme/lib/colors/token'
import zIndex from '@littlespoon/theme/lib/z-index'
import styled, { css } from 'styled-components'

import { ANIMATION_DURATION } from './Drawer'

export const BackdropBase = styled.div<{ opacity: number }>(
  (props) => css`
    align-items: center;
    background-color: ${surfaceOverlay60};
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: ${zIndex.backdrop};
    -webkit-tap-highlight-color: transparent;
    transition: opacity ${ANIMATION_DURATION}ms ease-in-out;
    opacity: ${props.opacity};
  `,
)
