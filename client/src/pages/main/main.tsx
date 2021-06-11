import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  createMuiTheme,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import { LeafletMap } from "../../components/leaflet-map";
import { fetchClick, selectReview } from "../main/store/main-actions";
import { useMainStore } from "./store/main-store";
import { ReviewDialog } from "./review-dialog";

export const Main = () => {
  const store = useMainStore();

  return (
    <Container maxWidth="md">
      <AppBar position="relative">
        <Toolbar>
          <Grid container spacing={2} justify="space-between">
            <Grid item>
              <Typography variant="body1" color="inherit" noWrap>
                Feed me!
              </Typography>
            </Grid>
            <Grid item>
              <MenuIcon />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Typography
          align="center"
          color="textPrimary"
          variant="h2"
          gutterBottom
        >
          feed me!
        </Typography>
        <Typography align="center" color="textSecondary" variant="h5" paragraph>
          Going for lunch?? Or a coffee? Explore some nice options by fetching
          the reviews.
        </Typography>
        <Box position="relative">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    color="primary"
                    onClick={() => fetchClick()}
                    variant="contained"
                  >
                    fetch reviews
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button color="secondary" variant="outlined">
                    button of belated doom
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <LeafletMap />
            </Grid>
            {store.selectedReview ? (
              <Grid item xs={12}>
                <Box
                  position="absolute"
                  bottom={16}
                  zIndex={1500}
                  style={{ width: "100%" }}
                >
                  <ReviewDialog />
                </Box>
              </Grid>
            ) : (
              "please click map icon nowwww"
            )}
            <Grid item xs={12}>
              <Grid container justify="flex-end">
                <Grid item>
                  <Box position="fixed" bottom={32}>
                    <Fab color="secondary">
                      <AddIcon fontSize="large" />
                    </Fab>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};
