import React from 'react';
import {Avatar, Card, Grid} from "@material-ui/core";

// routing
import {useRelocateToTeamsInfo} from '../../../hooks';

import Typography from '@material-ui/core/Typography';
import {useStyles} from './styles';

interface GamesInfoProps {
  "id": string,
  "date": Date,
  "team_one_id": string,
  "team_one_goals": number,
  "team_two_goals": number
}

export default function GamesInfo(props: GamesInfoProps) {
  // styles
  const classes = useStyles();

  const {id, date, team_one_id, team_one_goals, team_two_goals} = props;
  const [makeRelocate] = useRelocateToTeamsInfo();

  const relocateToAnotherPage = () => {
    makeRelocate(id)
  };

  return (
    <Card className={classes.root}>
      <Grid item container onClick={relocateToAnotherPage}>
        <Grid item xs={12}>
          <Typography color="textSecondary">{date}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography color="textSecondary">{team_one_goals}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography color="textSecondary">{team_two_goals}</Typography>
        </Grid>
      </Grid>
    </Card>
  )
}
