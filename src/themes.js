import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2b3442",
      light: "#2b3442",
      dark: "#2b3442",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#F6F8FF",
      paper: "#FEFEFE",
    },
    text: {
      secondary: "#4B6A9B",
      primary: "#2b3442",
      disabled: "rgba(0,0,0,0.6)",
    },
  },
  typography: {
    fontFamily: '"Space Mono" , sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1.15,
      marginBottom: "10px",
    },
    h2: {
      fontSize: 23,
      fontWeight: 700,
    },
    h3: {
      fontSize: 16,
      fontWeight: 400,
    },
    h4: {
      fontSize: 13,
      marginBottom: "10px",
    },
    body1: {
      fontSize: 15,
      marginLeft: "15px",
    },
  },
  shape: {
    borderRadius: 15,
  },
});

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fefefe",
      light: "#fefefe",
      dark: "#fefefe",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#141d2f",
      paper: "#1e2a47",
    },
    text: {
      secondary: "#4B6A9B",
      primary: "#fefefe",
      disabled: "rgba(254,254,254,0.6)",
    },
  },
  typography: {
    fontFamily: '"Space Mono" , sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1.15,
      marginBottom: "10px",
    },
    h2: {
      fontSize: 23,
      fontWeight: 700,
    },
    h3: {
      fontSize: 16,
      fontWeight: 400,
    },
    h4: {
      fontSize: 13,
      marginBottom: "10px",
    },
    body1: {
      fontSize: 15,
      marginLeft: "15px",
    },
  },
  shape: {
    borderRadius: 15,
  },
});
