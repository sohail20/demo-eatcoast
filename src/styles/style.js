import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    customclr: {
      main: '#2B817B',
      darkblacks: '#1A1824',
    },
  },
  typography: {
    fontFamily: "Outfit",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
export default theme;