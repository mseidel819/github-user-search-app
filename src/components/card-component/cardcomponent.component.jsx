import { Card, Grid, CardMedia, Typography } from "@mui/material";

const CardComponent = ({ user, theme }) => {
  console.log(user);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const joined = new Date(user.created_at);

  const month = months[joined.getMonth()];
  const day = joined.getDate();
  const year = joined.getFullYear();
  const formatedDate = `${day} ${month} ${year}`;

  return (
    <Card
      sx={{
        maxWidth: "700px",
        padding: "32px 49px",
        boxShadow: `${
          theme.palette.type === "dark"
            ? "0 0 0 0 rgba(0, 0,0, 0)"
            : "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
        }`,
      }}
    >
      <Grid container columnSpacing={5}>
        <Grid item md={3}>
          <CardMedia
            component="img"
            image={user.avatar_url}
            alt="avatar image"
            sx={{ borderRadius: "1000px" }}
          />
        </Grid>
        <Grid container item md={9}>
          <Grid item md={8}>
            <Typography variant="h1">{user.name}</Typography>
            <Typography variant="body1" color="primary">
              @{user.login}
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h3"> Joined {formatedDate}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <h1>Hello</h1>
    </Card>
  );
};

export default CardComponent;
