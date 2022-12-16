import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary:{
      main:'#2B817B'
    },
    secondary:{
      main:'#2B817B'
    }
    
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