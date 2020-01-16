import React, {useEffect} from 'react';
import './App.css';

// todo ... Mykolai Lytvyn ... Will be discussed
import {request as GamesRequest} from './commons/api/games';

const App: React.FC = () => {

    useEffect(() => {
        wrapperFunction();
    });

    const wrapperFunction = async () => {
        const gamesResult = await GamesRequest();
        console.log(' gamesResult:', gamesResult);
    };

    return (
        <div className="App">
            {/*todo... will be rmeoved*/}
            <div>aa</div>
        </div>
    );
}

export default App;
