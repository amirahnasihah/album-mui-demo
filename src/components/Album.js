import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import { Favorite, PhotoCamera, Share } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "h2",
          },
          style: {
            backgroundColor: "grey",
          },
        },
        {
          props: {
            variant: "h5",
          },
          style: {
            fontSize: 11,
          },
        },
      ],
    },
  },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Album = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera sx={{ mr: 2 }} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate commodi fuga, eligendi molestiae voluptas nisi
                corporis.
              </Typography>
              <div>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  sx={{ mt: 3 }}
                >
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </ThemeProvider>
        </div>
        <Container sx={{ maxWidth: "md" }}>
          <Grid container spacing={4} sx={{ pt: 2 }}>
            {cards.map((card) => (
              <Grid item xs={12} sm={6} md={3} key={card}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "red"[500] }} aria-label="recipe">
                        NA
                      </Avatar>
                    }
                    action={<IconButton aria-label="settings"></IconButton>}
                    title="Anime News"
                    subheader={new Date().toLocaleDateString("en-MY")}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    title="Image Title"
                    image="https://source.unsplash.com/random"
                    alt="Random Image from unsplash"
                  />
                  <CardContent>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ color: "red" }}
                    >
                      <Favorite />
                    </IconButton>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" sx={{ mt: 2 }} gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </>
  );
};

export default Album;
