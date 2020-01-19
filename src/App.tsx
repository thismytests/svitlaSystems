import React from 'react';
import './App.css';

// material ui
import {Grid, Typography, NoSsr, makeStyles, Paper} from '@material-ui/core';

// routing
import Routing from './pages/routing';

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
        {/*header*/}
        <Grid item xs={12}></Grid>


        {/*indentation*/}
        <Grid item lg={2} sm={12}></Grid>

        {/*Routing*/}
        <Grid item lg={8} sm={12}>
          <Routing/>
        </Grid>

        {/*indentation*/}
        <Grid item lg={2} sm={12}></Grid>

      </Grid>
    </div>
  );
};

export default App;
