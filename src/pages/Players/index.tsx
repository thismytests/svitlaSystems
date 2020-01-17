import React, {useEffect} from 'react';

import {request as GamesRequest} from "../../commons/api/games";
import {request as PlayersRequest} from "../../commons/api/players";
import {request as TeamsRequest} from "../../commons/api/teams";


export default function Artists() {

    const wrapperFunction = async () => {
        const gamesResult = await GamesRequest();
        console.log(' gamesResult:', gamesResult);

        const playersResult = await PlayersRequest();
        console.log(' playersResult:', playersResult);

        const teamsResult = await TeamsRequest();
        console.log(' teamsResult:', teamsResult);

    };

    useEffect(() => {
        wrapperFunction();
    });


    return (
        <div>Players</div>
    )
}
