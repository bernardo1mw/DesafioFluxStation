import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#4561ae',
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
  },
});
