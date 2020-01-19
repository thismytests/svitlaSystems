import React from 'react' ;
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

// routes
import {routes} from './config';

// pages
import Teams from './Teams';
import PlayersStatistics from './PlayerStatitics';
import TeamsInfo from './TeamsInfo';

export default () => {
    // todo... Nick Litvin... must be default router
    console.log(' must works!:',);
    return (
        <Router>
            <Route path={routes.teams.url} component={Teams}/>
            <Route path={routes.playerStatistics.url} component={PlayersStatistics}/>
            <Route path={routes.teamsInfo.url} component={TeamsInfo}/>
        </Router>
    );
};
