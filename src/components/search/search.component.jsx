import { TextField, Card, Grid, Button, Box } from "@mui/material";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

const SearchBar = ({ theme, textFieldHandler, searchHandler }) => {
  return (
    <Card
      color="background.default"
      sx={{
        // maxWidth: "700px",
        padding: {
          md: "0px 0px ",
          sm: "0px 36px",
          xs: "0px 28px",
        },

        margin: "12px",
        boxShadow: `${
          theme.palette.type === "dark"
            ? "0 0 0 0 rgba(0, 0,0, 0)"
            : "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
        }`,
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <SearchIcon />
        </Grid>
        <Grid item xs={11}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <TextField
              fullWidth
              label="Search GitHub username..."
              variant="standard"
              onChange={textFieldHandler}
              InputProps={{
                endAdornment: (
                  <Button type="submit" onClick={searchHandler}>
                    Search
                  </Button>
                ),
              }}
            ></TextField>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SearchBar;
