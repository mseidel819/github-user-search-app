import { Grid, Button, Container, Typography } from "@mui/material";
import { ReactComponent as LightIcon } from "../../assets/icon-sun.svg";
import { ReactComponent as DarkIcon } from "../../assets/icon-moon.svg";

type TitleProps = {
  mode: boolean;
  themeHandler: () => void;
};

const TitleContainer = ({ mode, themeHandler }: TitleProps) => {
  return (
    <Container>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h1" color="text.primary">
            devfinder
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            startIcon={mode ? <LightIcon /> : <DarkIcon />}
            onClick={themeHandler}>
            {mode ? "Light" : "Dark"}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TitleContainer;
