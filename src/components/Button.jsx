import React from 'react'
import { Button as ButtonBase } from '@material-ui/core'

function Button(props) {
  const { variant, color, size, title, style } = props
  return (
    <ButtonBase variant={variant} color={color} size={size} style={style}>
      {title}
    </ButtonBase>
  )
}

export default Button
