import CloseIcon from '@littlespoon/icons/lib/CloseIcon'
import type React from 'react'

import { Button, DefaultTag, DeletableTag, VisuallyHidden } from './styled'

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Content to display the component. Defaults to "Tag".
   */
  children?: React.ReactNode

  /**
   * The size of the component. Defaults to "medium".
   */
  size?: 'small' | 'medium' | 'large'

  /**
   * Callback when the component is clicked.
   */
  onClick?: () => void

  /**
   * Callback when close button is clicked.
   */
  onDelete?: () => void
}

export default function Tag(props: TagProps): React.ReactElement<TagProps> {
  if (typeof props.onClick === 'function') {
    return <DefaultTag {...props} />
  }

  const { onDelete, children, ...other } = props
  return (
    <DeletableTag {...other}>
      {children}
      <Button onClick={onDelete}>
        <VisuallyHidden>close</VisuallyHidden>
        <CloseIcon aria-hidden />
      </Button>
    </DeletableTag>
  )
}
