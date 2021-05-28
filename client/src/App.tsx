import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useLoginStore } from "./pages/login/store/login-store";
import { Login } from "./pages/login/login";
import { addUserCount } from "./pages/login/store/login-actions";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function App() {
  const store = useLoginStore();
  return (
    <React.Fragment>
      <AppBar position="relative">
        <Toolbar>
          <AccountCircleIcon />
          <Typography variant="body1" color="inherit" noWrap>
            username
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Router>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Container maxWidth="sm">
              <Typography
                align="center"
                color="textPrimary"
                variant="h2"
                gutterBottom
              >
                feed me!
              </Typography>
              <Typography
                align="center"
                color="textSecondary"
                variant="h5"
                paragraph
              >
                Going for lunch?? Or a coffee? DO NOT WORRY!!
              </Typography>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained">button of impending doom</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">button of belated doom</Button>
                </Grid>
              </Grid>
            </Container>
          </Route>

          <Route exact path="/users">
            <button onClick={() => addUserCount()}>increment user count</button>
            <div>current user count: {store.users}</div>
            <h6>edi</h6>
            <h6>viktor</h6>
            <h6>julia</h6>
            <h6>KC</h6>
          </Route>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
