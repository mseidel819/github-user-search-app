import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0079ff",
      light: "#0079ff",
      dark: "#0079ff",
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
      disabled: "rgba(0,0,0,0.8)",
    },
  },
  typography: {
    fontFamily: '"Space Mono" , sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1.15,
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
    },
    body1: {
      fontSize: 15,
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
      main: "#0079ff",
      light: "#0079ff",
      dark: "#0079ff",
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
      disabled: "rgba(254,254,254,0.8)",
    },
  },
  typography: {
    fontFamily: '"Space Mono" , sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1.15,
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
    },
    body1: {
      fontSize: 15,
    },
  },
  shape: {
    borderRadius: 15,
  },
});
