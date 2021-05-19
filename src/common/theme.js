import { createMuiTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
// const colors = {
//   aqua: '#1edaf6',
// }

//const defaultTheme = createMuiTheme()
export const useStyles = makeStyles(() => ({
  button: {
    width: 270,
    height: 50,
    padding: 50,
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
