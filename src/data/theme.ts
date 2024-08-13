import { createTheme } from '@mui/material/styles';

//кастомизация шрифтов Typography
const theme = createTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 15,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600
  }
});

export default theme;
