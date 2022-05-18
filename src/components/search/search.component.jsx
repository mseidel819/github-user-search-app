import {
  TextField,
  Card,
  Grid,
  Button,
  Box,
  Container,
  InputAdornment,
  Typography,
} from "@mui/material";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

const SearchBar = ({ theme, textFieldHandler, searchHandler, user }) => {
  return (
    <Container
      color="background.default"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        alignItems="center"
        columnSpacing={4}
        sx={{
          maxWidth: "780px",
          padding: "10px 6px",
          backgroundColor: "background.paper",
          boxShadow: `${
            theme.palette.type === "dark"
              ? "0 0 0 0 rgba(0, 0,0, 0)"
              : "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
          }`,
          borderRadius: "15px",
        }}
      >
        <Grid item xs={1}>
          <SearchIcon />
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            placeholder="Search GitHub username..."
            variant="standard"
            onChange={textFieldHandler}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {user.message === "Not Found" && (
                    <Typography variant="body1" color="red">
                      No results
                    </Typography>
                  )}
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ borderRadius: "10px" }}
            onClick={searchHandler}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchBar;
