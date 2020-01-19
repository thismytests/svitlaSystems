import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

// material ui
import {Grid, Typography, NoSsr, makeStyles, Paper} from '@material-ui/core';

// routing
import Routing from './pages/routing';
import {routes} from './pages/config';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/*Routing*/}
        <Grid item sm={12}>
          <Routing/>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
