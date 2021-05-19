import React, { useState } from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import { useTheme } from '@material-ui/core/styles'
import Typography from '../components/Typography'
import { useStyles } from '../common/theme'

function StoryBook() {
  const classes = useTheme()
  const style = useStyles()
  return (
    <Box pt={1} pl={1} display="flex" flexDirection="column">
      <Box pt={5} mb={1} ml={2}>
        <Box>
          <Button
            className={style.button}
            variant={classes.buttons.variant.contained}
            color={classes.buttons.colors.primary}
            size={classes.buttons.size.large}
            title="Sign Up"
          />
          <Button
            variant={classes.buttons.variant.contained}
            color={classes.buttons.colors.primary}
            size={classes.buttons.size.medium}
            title="Sign Up"
          />
          <Button
            variant={classes.buttons.variant.contained}
            color={classes.buttons.colors.primary}
            size={classes.buttons.size.small}
            title="Sign Up"
          />
        </Box>
        <Box>
          <Button
            variant={classes.buttons.variant.contained}
            color={classes.buttons.colors.secondary}
            size={classes.buttons.size.large}
            title="Sign Up"
          />
          <Button
            variant={classes.buttons.variant.contained}
            color={classes.buttons.colors.secondary}
            size={classes.buttons.size.medium}
            title="Sign Up"
          />
          <Button
            variant={classes.buttons.variant.contained}
            color={classes.buttons.colors.secondary}
            size={classes.buttons.size.small}
            title="Sign Up"
          />
        </Box>
        <Box>
          <Button
            variant={classes.buttons.variant.contained}
            size={classes.buttons.size.large}
            title="Sign Up"
          />
          <Button
            variant={classes.buttons.variant.contained}
            size={classes.buttons.size.medium}
            title="Sign Up"
          />
          <Button
            variant={classes.buttons.variant.contained}
            size={classes.buttons.size.small}
            title="Sign Up"
          />
        </Box>
      </Box>
      <Box>
        <Typography
          tittle={classes.typography.tittle}
          variant={classes.typography.variant.h1}
        />
        <Typography
          tittle={classes.typography.tittle}
          variant={classes.typography.variant.h2}
        />
        <Typography
          tittle={classes.typography.tittle}
          variant={classes.typography.variant.h3}
        />
        <Typography
          tittle={classes.typography.tittle}
          variant={classes.typography.variant.h4}
        />
        <Typography
          tittle={classes.typography.tittle}
          variant={classes.typography.variant.h5}
        />
        <Typography
          tittle={classes.typography.tittle}
          variant={classes.typography.variant.h6}
        />
        <Typography
          tittle={classes.typography.tittle}
          variant={classes.typography.variant.subtitle1}
        />
        <Typography
          tittle={classes.typography.tittle}
          variant={classes.typography.variant.subtitle2}
        />
      </Box>
    </Box>
  )
}

export default StoryBook
