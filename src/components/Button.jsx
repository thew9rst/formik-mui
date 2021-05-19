import React from 'react'
import { Button as ButtonBase } from '@material-ui/core'

function Button(props) {
  const { variant, color, size, title, style, className, icono } = props
  return (
    <ButtonBase
      className={className}
      variant={variant}
      color={color}
      size={size}
      style={style}
      type="submit"
    >
      {icono} {title}
    </ButtonBase>
  )
}

export default Button
