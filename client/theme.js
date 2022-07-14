import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#4f83cc',
      main: '#FFB6C1',
      dark: '#002f6c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9fffe0',
      main: '#ff8c00',
      dark: '#2bbd7e',
      contrastText: '#000',
    },
      openTitle: '#002f6c',
      protectedTitle: '#2bbd7e',
      type: 'light'
    }

    
  })

  export default theme