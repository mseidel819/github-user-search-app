import { Card, Grid, CardMedia, Typography, Box, Link } from "@mui/material";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as CompanyIcon } from "../../assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "../../assets/icon-location.svg";
import { ReactComponent as WebsiteIcon } from "../../assets/icon-website.svg";

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
        padding: "32px 49px 60px 49px",
        boxShadow: `${
          theme.palette.type === "dark"
            ? "0 0 0 0 rgba(0, 0,0, 0)"
            : "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
        }`,
      }}
    >
      <Grid container columnSpacing={5}>
        <Grid item xs={3} sx={{ display: { xs: "none", sm: "block" } }}>
          <CardMedia
            component="img"
            image={user.avatar_url}
            alt="avatar image"
            sx={{ borderRadius: "1000px" }}
          />
        </Grid>

        <Grid item xs={9}>
          <Grid container columnSpacing={3} sx={{ marginBottom: "20px" }}>
            <Grid
              item
              xs={4}
              sm={0}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <CardMedia
                component="img"
                image={user.avatar_url}
                alt="avatar image"
                sx={{ borderRadius: "1000px" }}
              />
            </Grid>

            <Grid container item xs={8} sm={12}>
              <Grid item xs={12} sm={8}>
                <Typography variant="h1">{user.name}</Typography>
                <Typography variant="h3" color="primary">
                  @{user.login}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="h4"> Joined {formatedDate}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Box sx={{ marginBottom: "32px", boxShadow: "0 0 0" }}>
            {user.bio ? (
              <Typography variant="body1" sx={{ marginLeft: "0px" }}>
                {user.bio}
              </Typography>
            ) : (
              <Typography
                variant="body1"
                color="rgba(254,254,254,0.5)"
                sx={{ marginLeft: "0px" }}
              >
                This profile has no bio
              </Typography>
            )}
          </Box>
          <Card
            sx={{
              backgroundColor: "background.default",
              padding: "15px 32px",
              borderRadius: "10px",
              marginBottom: "38px",
              boxShadow: "0 0 0",
            }}
          >
            <Grid container>
              <Grid item xs={4}>
                <Typography variant="h4">Repos</Typography>
                <Typography variant="h2">{user.public_repos}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h4">Followers</Typography>
                <Typography variant="h2">{user.followers}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h4">Following</Typography>
                <Typography variant="h2">{user.following}</Typography>
              </Grid>
            </Grid>
          </Card>

          <Grid container columnSpacing={5} rowSpacing={2}>
            <Grid item container xs={12} sm={6}>
              <LocationIcon />
              <Typography variant="body1">{user.location}</Typography>
            </Grid>
            <Grid item container xs={12} sm={6}>
              <TwitterIcon />
              {user.twitter_username ? (
                <Link underline="hover" href="# " color="primary">
                  <Typography variant="body1">
                    {user.twitter_username}
                  </Typography>
                </Link>
              ) : (
                <Typography color="text.disabled">not available</Typography>
              )}
            </Grid>
            <Grid item container xs={12} sm={6}>
              <WebsiteIcon />
              {user.blog ? (
                <Link underline="hover" href="#" color="primary">
                  <Typography variant="body1">{user.blog}</Typography>
                </Link>
              ) : (
                <Typography variant="body1" color="text.disabled">
                  not available
                </Typography>
              )}
            </Grid>
            <Grid item container xs={12} sm={6}>
              <CompanyIcon />
              {user.company ? (
                <Link underline="hover" href="#" color="primary">
                  <Typography variant="body1">{user.company}</Typography>
                </Link>
              ) : (
                <Typography variant="body1" color="text.disabled">
                  not available
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardComponent;
