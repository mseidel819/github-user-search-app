import { Grid, Button, Container, Typography } from "@mui/material";
import { ReactComponent as LightIcon } from "../../assets/icon-sun.svg";
import { ReactComponent as DarkIcon } from "../../assets/icon-moon.svg";
import { StyledDiv } from "./title.styles";

const TitleContainer = ({ mode, themeHandler }) => {
  console.log(mode);
  return (
    <Container>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h2" color="text.primary">
            devfinder
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            startIcon={mode ? <LightIcon /> : <DarkIcon />}
            onClick={themeHandler}
          >
            {mode ? "Light" : "Dark"}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TitleContainer;
