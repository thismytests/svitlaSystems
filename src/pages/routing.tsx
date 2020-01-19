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
// routes
import {routes} from './config';

// pages
import Teams from './Teams';
import PlayersStatistics from './PlayerStatitics';
import TeamsInfo from './TeamsInfo';

// not found page
import NotFoundPage from '../404page';

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


      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          {/*routes*/}
          <Switch>
            <Route path={routes.teams.url} component={Teams}/>
            <Route path={routes.playerStatistics.url} component={PlayersStatistics}/>
            <Route path={routes.teamsInfo.url} component={TeamsInfo}/>

            <Route exact path='/' component={Teams}/>
            <Route path="*" component={NotFoundPage} />

            {/*<Redirect to={routes.teams.url}/>*/}
          </Switch>
        </Grid>
        <Grid item xs={2}></Grid>

      </Grid>

    </Router>
  );
};
