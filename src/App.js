import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
} from '@material-ui/core';

import Home from './pages/Home';
import User from './pages/User';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3e8bfa',
    },
    secondary: {
      main: '#2c2c2c',
    },
  },
});

const useStyles = makeStyles({
  viewport: {
    marginTop: 120,
  },
  title: {
    margin: 'auto',
  },
});

function App() {
  const [path, setPath] = useState('/');
  const classes = useStyles();
  const { location } = window;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" color="secondary">
          <Toolbar variant="dense">
            <Hidden xsUp={path === '/'}>
              <Button
                disableElevation
                variant="text"
                color="inherit"
                to="/"
                component={NavLink}
                className={classes.button}
              >
                &lt; Back
              </Button>
            </Hidden>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.viewport}>
          <Route path="/" exact component={() => <Home setPath={setPath} location={location} />} />
          <Route path="/users/:user" component={() => <User setPath={setPath} location={location} />} />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
