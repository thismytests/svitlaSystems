import React from 'react';
import {Grid} from "@material-ui/core";

// types
import {PlayersInfoProps} from './types';
import Item from './player';

export default function PlayersInfo(props: { data: Array<PlayersInfoProps> | undefined }) {
  const createPlayersTemplate = (): any => {
    if (props.data === undefined) {
      return null
    }

    return props.data.map((item, i: number) => {
      return (
        <Grid item xs={12} key={i}>
          <Item {...item}></Item>
        </Grid>
      )
    });
  }

  return (
    <>
      {createPlayersTemplate()}
    </>
  )

}
