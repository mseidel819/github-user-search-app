import { styled } from "@mui/material";
import { Container } from "@mui/material";

export const StyledContainer = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  height: "100vh",
  // maxWidth: "120%",
  // margin: "0px",
  // padding: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));

/* .App {
  box-sizing: border-box;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
} */
