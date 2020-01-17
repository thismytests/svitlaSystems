import React from 'react' ;
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

// routes
import {routes} from './config';

// pages
import Teams from './Teams';

export default () => {
    // todo... Nick Litvin... must be default router
    console.log(' must works!:', );
    return (
        <Router>
            <Route path={routes.teams} component={Teams}/>
        </Router>
    );
};
