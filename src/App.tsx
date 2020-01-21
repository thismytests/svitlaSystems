import React from 'react';
import './App.css';

// material ui
import {Grid, makeStyles} from '@material-ui/core';

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
        {/*Routing*/}
        <Grid item sm={12}>
          <Routing/>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
