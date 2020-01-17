import React, {useEffect} from 'react';
import './App.css';

// todo ... Mykolai Lytvyn ... Will be discussed
import {request as GamesRequest} from './commons/api/games';
import {request as PlayersRequest} from './commons/api/players';
import {request as TeamsRequest} from './commons/api/teams';

const App: React.FC = () => {

    useEffect(() => {
        wrapperFunction();
    });

    const wrapperFunction = async () => {
        const gamesResult = await GamesRequest();
        console.log(' gamesResult:', gamesResult);

        const playersResult = await PlayersRequest();
        console.log(' playersResult:', playersResult);

        const teamsResult = await TeamsRequest();
        console.log(' teamsResult:', teamsResult);

    };

    return (
        <div className="App">
            {/*todo... will be rmeoved*/}
            <div>aa</div>
        </div>
    );
}

export default App;
