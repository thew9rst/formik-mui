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
import { useStyles } from '../common/theme'
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SingUp() {
  const [disab, setDisab] = useState(false)
  const [values, setValues] = useState({
    showPassword: false,
  })
  const classes = useTheme()
  const styles = useStyles()

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
    onSubmit: (values, { resetForm, setSubmitting, isSubmitting }) => {
      setSubmitting(true)
      alert(JSON.stringify(values))
      setDisab(isSubmitting)
      resetForm()
      setSubmitting(false)
    },
    validationSchema: validationSchema,
  })
  return (
    <>
      <Box className={styles.mainBox}>
        <Box className={styles.typoBox}>
          <Typography
            tittle="Sign up to set your brand up for success"
            variant={classes.typography.variant.h4}
            className={styles.typo}
          />
        </Box>
        <Box className={styles.buttonBox}>
          <Button
            variant={classes.buttons.variant.contained}
            color={classes.buttons.colors.primary}
            title="Sign up with Google"
            className={styles.button}
            icono={<FontAwesomeIcon icon={faGoogle} className={styles.icon} />}
          />
          <Button
            variant={classes.buttons.variant.contained}
            title="Sign up with Microsoft"
            className={styles.button2}
            icono={
              <FontAwesomeIcon icon={faMicrosoft} className={styles.icon} />
            }
          />
        </Box>
      </Box>
      <Box className={styles.mainFormBox}>
        <Box className={styles.formBox}>
          <form
            action=""
            onSubmit={formik.handleSubmit}
            method="POST"
            className={styles.form}
          >
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
              className={styles.mt}
            />
            <FormControl variant="outlined" className={styles.mt}>
              <InputLabel
                htmlFor="outlined-adornment-password"
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
                className={styles.errorTypo}
              />
            </FormControl>

            <Button
              variant={classes.buttons.variant.contained}
              color={classes.buttons.colors.secondary}
              title="Sign Up"
              className={styles.lastButton}
              disabled={disab ? true : false}
              // type="submit"
            />
          </form>
        </Box>
      </Box>
    </>
  )
}

export default SingUp
