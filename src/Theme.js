import {createTheme} from '@mui/material/styles';

export const customTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#9ed0dd',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#29634a',
      },
      text: {
        primary: '#000000',
        secondary: '#000000',
      },
      background: {
        default: '#9ed0dd'
      },
      
    },
    typography: {
      fontFamily: "Segoe UI"
    }
  });

export default customTheme