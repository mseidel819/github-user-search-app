import {
  TextField,
  Grid,
  Button,
  Container,
  InputAdornment,
  Typography,
  Theme,
} from "@mui/material";
import { notFound, User } from "../../App";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

type SearchProps = {
  theme: Theme;
  textFieldHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchHandler: (e: Event) => void;
  user: User | notFound | "";
};
const SearchBar = ({
  theme,
  textFieldHandler,
  searchHandler,
  user,
}: SearchProps) => {
  return (
    <Container
      color="background.default"
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "0 12px",
      }}>
      <Grid
        container
        alignItems="center"
        sx={{
          maxWidth: "780px",
          padding: "10px 6px",
          backgroundColor: "background.paper",
          // boxShadow: `${
          //   theme.palette.type === "dark"
          //     ? "0 0 0 0 rgba(0, 0,0, 0)"
          //     : "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
          // }`,
          borderRadius: "15px",
        }}>
        <Grid item container justifyContent="center" xs={2} sm={1}>
          <SearchIcon />
        </Grid>
        <Grid item xs={7} sm={9}>
          <TextField
            fullWidth
            placeholder="Search GitHub username..."
            variant="standard"
            onChange={textFieldHandler}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {user.message === "Not Found" && (
                    <Typography
                      variant="body1"
                      color="red"
                      sx={{ marginLeft: "0px", marginRight: "16px" }}>
                      No results
                    </Typography>
                  )}
                </InputAdornment>
              ),
              disableUnderline: true,
            }}></TextField>
        </Grid>
        <Grid item container justifyContent="center" xs={3} sm={2}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{
              borderRadius: "10px",
              fontWeight: "700",
              textTransform: "none",
            }}
            onClick={searchHandler}>
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchBar;
