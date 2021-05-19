import React from 'react'
import 'fontsource-roboto'
import { Typography as TypographyBase } from '@material-ui/core'

function Typography(props) {
  const { tittle, variant, component, style, className } = props
  return (
    <TypographyBase
      className={className}
      style={style}
      variant={variant}
      component={component}
      gutterBottom
    >
      {tittle}
    </TypographyBase>
  )
}

export default Typography
