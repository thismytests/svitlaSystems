import React from 'react' ;
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect, Link
} from 'react-router-dom';

// react material
import {AppBar, Grid, IconButton, Typography} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
// routes
import {routes} from './config';

// pages
import Teams from './Teams';
import PlayersStatistics from './PlayerStatitics';
import TeamsInfo from './TeamsInfo';

import {useRelocateToGamesRoute} from './hooks';
// styles
import {useStyles} from './styles';


export default () => {
  const classes = useStyles();

  // todo... Nick Litvin... must be 404 router
  return (
    <Router basename="/">
      {/*header*/}
      <AppBar position="static">
        <Toolbar>
          <Grid item container>
            <Grid item xs={12}>
              <Typography color="inherit"
                          variant="h6"
                          className={classes.title}
              >
                <Link to={routes.teams.url}>Teams</Link>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>


      {/*routes*/}
      <Switch>
        <Route path={routes.teams.url} component={Teams}/>
        <Route path={routes.playerStatistics.url} component={PlayersStatistics}/>
        <Route path={routes.teamsInfo.url} component={TeamsInfo}/>
        <Redirect to={routes.teams.url}/>
      </Switch>
    </Router>
  );
};
