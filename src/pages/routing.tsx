import React from 'react' ;
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

// routes
import {routes} from './config';

// pages
import Teams from './Teams';
import Players from './Players';
import Games from './Games';

export default () => {
    // todo... Nick Litvin... must be default router
    console.log(' must works!:',);
    return (
        <Router>
            <Route path={routes.teams} component={Teams}/>
            <Route path={routes.players} component={Players}/>
            <Route path={routes.games} component={Games}/>
        </Router>
    );
};
