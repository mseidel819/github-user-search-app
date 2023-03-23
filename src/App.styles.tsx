import { styled } from "@mui/material";

export const StyledContainer = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  minHeight: "100vh",
  // maxWidth: "120%",
  // margin: "0px",
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));
