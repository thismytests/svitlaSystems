import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router';

import {getPlayers as getPlayersApi} from '../../commons/api/players';


// components
import PlayersInfo, {PlayersInfoProps} from './comonents/playersInfo';

// types
import {PlayersAPI} from '../../commons/api/players/types';

// styles
import {Grid} from '@material-ui/core';

// styles
import {useStyles} from './styles';

export default function Teams(props: RouteComponentProps) {
  const classes = useStyles();

  const [players, setPlayers] = useState<PlayersAPI>();

  const getData = async () => {
    const playersResult = await getPlayersApi();
    setPlayers(playersResult);
  };

  const createPlayersTemplate = () => {
    // todo... Nick Litvin... will be removed
    const result = [players?.data[0]];

    return result.map((item, i: number) => {
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
      <Grid item container lg={6} sm={12} className={classes.item}>
        {createPlayersTemplate()}
      </Grid>
    </Grid>
  )
}
