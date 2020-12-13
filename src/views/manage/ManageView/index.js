import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LibraryView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Manage Order"
    >
      <Container maxWidth="lg">
      </Container>
    </Page>
  );
};

export default LibraryView;
