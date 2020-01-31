import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router';

// api
import {getPlayerByTeamId as getPlayersApi} from '../../commons/api/players';

// material
import {Grid} from '@material-ui/core';

// components
import PlayersInfo from './comonents/playersInfo';

// types
import {PlayersAPI} from '../../commons/api/players/types';
import {PlayersInfoProps} from '../TeamsInfo/comonents/playersInfo/types';

export default function Teams(props: RouteComponentProps) {
  const [players, setPlayers] = useState<PlayersAPI>();

  const getData = async () => {
    const params = props.match.params as { id: string };
    const playersResult = await getPlayersApi(params.id);
    setPlayers(playersResult);
  };

  const createPlayersTemplate = () => {
    return players?.data?.map((item, i: number) => {
      const gamesProps: PlayersInfoProps = {
        id: item?.id || '',
        age: item?.age || 0,
        flag_url: item?.flag_url || '',
        history: item?.history || [{}],
        name: item?.name || '',
        nationality: item?.nationality || '',
        position: item?.position || '',
        team_id: item?.team_id || '',
        value: item?.value || 0
      };


      return (
        <Grid item xs={12} key={i}>
          <PlayersInfo {...gamesProps}/>
        </Grid>
      )
    });

  };

  useEffect(() => {
    getData();
  }, [props.history.location]);


  return (
    <Grid container item xs={12}>
      <Grid item container lg={12} sm={12}>
        {createPlayersTemplate()}
      </Grid>
    </Grid>
  )
}
