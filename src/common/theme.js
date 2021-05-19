import { createMuiTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
// const colors = {
//   aqua: '#1edaf6',
// }

//const defaultTheme = createMuiTheme()
export const useStyles = makeStyles(() => ({
  mainBox: {
    display: 'grid',
    justifyContent: 'center',
  },
  typoBox: {
    marginTop: 50,
  },
  typo: {
    width: 550,
    height: 39,
    fontSize: '32px',
    lineHeight: '37px',
  },
  buttonBox: {
    display: 'flex',
    marginTop: 75,
  },
  button: {
    width: 270,
    height: 50,
    marginRight: 10,
    textTransform: 'none',
  },
  button2: {
    width: 270,
    height: 50,
    textTransform: 'none',
  },
  mainFormBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  formBox: {
    marginTop: 50,
    width: 550,
    height: 50,
  },
  mt: {
    marginTop: 50,
  },
  errorTypo: {
    fontSize: 12,
    color: '#f44366',
    paddingRight: 390,
  },
  lastButton: {
    width: 270,
    height: 50,
    marginTop: 30,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    fontSize: '1.5rem',
    color: '#a4acc4',
    marginRight: 10,
  },
}))

export const theme = createMuiTheme({
  buttons: {
    size: {
      large: 'large',
      medium: 'medium',
      small: 'small',
    },
    variant: {
      contained: 'contained',
      outlined: 'outlined',
    },
    colors: {
      primary: 'primary',
      secondary: 'secondary',
    },
  },
  typography: {
    tittle: 'Typography',
    variant: {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      subtitle1: 'subtitle1',
      subtitle2: 'subtitle2',
    },
  },
})
