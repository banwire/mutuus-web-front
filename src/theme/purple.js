import {createTheme} from '@mui/material';
import {red} from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
      primary: {
        main: '#000000',
        
      },
      secondary: {
        main: '#AED43A',
        dark: '#444343',
        contrastText: '#ffff',
      },
      error: {
        main: red.A400,
      },
    },
  })