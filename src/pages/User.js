import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from '@material-ui/core';

const User = (props) => {
  const { location, setPath } = props;
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    setPath(location.pathname);
    fetch(`https://api.github.com${location.pathname}`)
      .then((resp) => resp.json())
      .then((data) => {
        setUserdata(data);
      });
  }, [location, setUserdata, setPath]);

  return (
    <List>
      {
        userdata.name
          ? (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={userdata.name} src={userdata.avatar_url} />
                </ListItemAvatar>
                <ListItemText
                  primary={userdata.name}
                  secondary={userdata.location}
                />
              </ListItem>
              <Divider component="li" />
            </>
          )
          : null
      }
    </List>
  );
};

User.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  setPath: PropTypes.func.isRequired,
};

User.defaultProps = {
  location: {
    pathname: '',
  },
};

export default User;
