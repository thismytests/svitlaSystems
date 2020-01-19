import React from 'react';
import {Card, Grid} from "@material-ui/core";

// routing
import {useRelocateToTeamsInfo} from '../../../hooks';

import Typography from '@material-ui/core/Typography';
import {useStyles} from './styles';

export interface PlayersInfoProps {
  id: string,
  team_id: string,
  name: string,
  age: number,
  nationality: string,
  flag_url: string,
  position: string,
  history: [
    {
      team_id?: string,
      apps?: number,
      goals?: number
    }
  ],
  value: number
}

export default function PlayersInfo(props: PlayersInfoProps) {
  // styles
  const classes = useStyles();

  const {
    id, team_id, name, age, nationality, flag_url,
    position, history, value
  } = props;

  const [makeRelocate] = useRelocateToTeamsInfo();

  const relocateToAnotherPage = () => {
    makeRelocate(id)
  };

  const renderHistory = () => {
    return history.map((item, i) => {
      return <Grid item xs={12} key={i}>
        <Grid item xs={12}>{item.apps}</Grid>
        <Grid item xs={12}>{item.goals}</Grid>
      </Grid>
    })
  };

  return (
    <Card className={classes.root}>
      <Grid item container onClick={relocateToAnotherPage}>
        <Grid item xs={2}>
          <Typography color="textSecondary">{name}</Typography>
        </Grid>

        <Grid item xs={2}>{age}</Grid>
        <Grid item xs={2}>{nationality}</Grid>
        <Grid item xs={2}>{flag_url}</Grid>
        <Grid item xs={2}>{position}</Grid>
        <Grid item xs={2}>{value}</Grid>
        {renderHistory()}
      </Grid>
    </Card>
  )
}
