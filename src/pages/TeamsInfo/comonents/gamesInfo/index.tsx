import React from 'react';

// react material
import {Grid} from '@material-ui/core';

// types
import {GamesInfoProps} from './types';
import Item from './gameInfo';

export default function GamesInfo(props: { data: Array<GamesInfoProps> | undefined }) {
  const createGameTemplate = () => {
    if (props.data === undefined) {
      return null
    }

    return props.data.map((item, i: number) => {
      const gamesProps: GamesInfoProps = {
        id: item?.id || '',
        date: item?.date || new Date(),
        team_one_goals: item?.team_one_goals || 0,
        team_one_id: item?.team_one_id || '',
        team_two_goals: item?.team_two_goals || 0
      };

      return (
        <Grid item xs={12} key={i}>
          <Item {...gamesProps}/>
        </Grid>
      )
    });

  };

  return (
    <>
      {createGameTemplate()}
    </>
  )
}
