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
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { boolean } from 'yup/lib/locale'
function SingUp() {
  const [values, setValues] = useState({
    showPassword: false,
  })
  const classes = useTheme()

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  //* ---------------------------------------

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Min length 8 characters')
      .required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      setSubmitting(true)
      console.log('--------------', values)
      resetForm()
      setSubmitting(false)
    },
    validationSchema: validationSchema,
  })
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
              textTransform: 'none',
            }}
          />
          <Button
            variant={classes.buttons.variant.contained}
            title="Sign up with Microsoft"
            style={{ width: 270, height: 50, textTransform: 'none' }}
          />
        </Box>
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <Box style={{ marginTop: 50, width: 550, height: 50 }}>
          <form action="" onSubmit={formik.handleSubmit} method="POST">
            <TextField
              id="outlined-basic"
              label="Full Name"
              name="fullName"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              error={
                formik.touched.fullName && formik.errors.fullName ? true : false
              }
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
            <TextField
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email ? true : false}
              helperText={formik.touched.email && formik.errors.email}
              style={{ marginTop: 50 }}
            />
            <FormControl variant="outlined" style={{ marginTop: 50 }}>
              <InputLabel
                htmlFor="outlined-adornment-password"
                // style={{
                //   color:
                //     formik.errors.password && formik.touched.password
                //       ? '#f44366'
                //       : '#3f51b5',
                // }}
                error={formik.errors.password && formik.touched.password}
              >
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={
                  formik.touched.password && formik.errors.password
                    ? true
                    : false
                }
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
              <Typography
                tittle={formik.touched.password && formik.errors.password}
                style={{ fontSize: 12, color: '#f44366', paddingRight: 390 }}
              />
            </FormControl>

            <Button
              variant={classes.buttons.variant.contained}
              color={classes.buttons.colors.secondary}
              title="Sign Up"
              style={{ width: 270, height: 50, marginTop: 30 }}
              type="submit"
            />
          </form>
        </Box>
      </Box>
    </>
  )
}

export default SingUp
