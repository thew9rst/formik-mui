import React from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import Typography from '../components/Typography'
import { useTheme } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import { useState } from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
function SingUp() {
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })
  const classes = useTheme()

  const handleChanged = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <Box style={{ display: 'grid', justifyContent: 'center' }}>
        <Box style={{ marginTop: 50 }}>
          <Typography
            tittle="Sign up to set your brand up for success"
            variant={classes.typography.variant.h4}
            style={{
              width: 550,
              height: 39,
              fontSize: '32px',
              lineHeight: '37px',
            }}
          />
        </Box>
        <Box style={{ display: 'flex', marginTop: 75 }}>
          <Button
            variant={classes.buttons.variant.contained}
            color={classes.buttons.colors.primary}
            title="Sign up with Google"
            style={{
              width: 270,
              height: 50,
              marginRight: 10,
            }}
          />
          <Button
            variant={classes.buttons.variant.contained}
            title="Sign up with Microsoft"
            style={{ width: 270, height: 50 }}
          />
        </Box>
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          <Box style={{ marginTop: 50, width: 550, height: 50 }}>
            <form>
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
              />
            </form>
          </Box>
          <Box style={{ marginTop: 50 }}>
            <form>
              <TextField
                id="outlined-basic"
                label="Email address"
                variant="outlined"
              />
            </form>
          </Box>
          <form>
            <FormControl variant="outlined" style={{ marginTop: 50 }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChanged('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </form>
        </Box>
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant={classes.buttons.variant.contained}
          color={classes.buttons.colors.secondary}
          title="Sign Up"
          style={{ width: 270, height: 50, marginTop: 30 }}
        />
      </Box>
    </>
  )
}

export default SingUp
