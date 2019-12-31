import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    paddingTop: 40,
  },
  element: {
    display: 'flex',
    marginRight: 10,
  },
  button: {
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#2967bf',
      boxShadow: '0px 5px 12px -5px rgba(0,0,0,0.75)',
    },
  },
});

const Home = (props) => {
  const topFive = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'];
  const classes = useStyles();
  const { location, setPath } = props;

  useEffect(() => {
    setPath(location.pathname);
  }, [location, setPath]);

  return (
    <div className={classes.Home}>
      <Typography variant="h2">
        Top 5 GitHub Users
      </Typography>
      <Typography variant="body1">
        Tap the username to see more information
      </Typography>
      <div className={classes.container}>
        {
          topFive.map((user) => (
            <div key={user} className={classes.element}>
              <Button
                disableElevation
                variant="contained"
                color="primary"
                to={`/users/${user}`}
                component={NavLink}
                className={classes.button}
              >
                {user}
              </Button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  setPath: PropTypes.func.isRequired,
};

Home.defaultProps = {
  location: {
    pathname: '',
  },
};

export default Home;
