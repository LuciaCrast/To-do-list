import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#a13030",
    },
    secondary: {
      main: "#daa297",
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    h2: { fontFamily: "Bungee, sans-serif" },
    subtitle1: { fontFamily: "Bungee, sans-serif", fontSize: "18px" },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
