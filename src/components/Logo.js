import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({
  logo: {
    // marginLeft: "10vw",
    marginTop: "0.4rem"
  }
}));

const Logo = (props) => {
  const classes = useStyles();
  return (
    <img className={classes.logo}
      alt="Logo"
      src="/static/logo.svg"
      {...props}
    />
  );
};

export default Logo;
