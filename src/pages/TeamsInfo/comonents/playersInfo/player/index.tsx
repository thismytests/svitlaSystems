import React from 'react';

// react material
import {Card, Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// routing
import {useRelocateToPlayerStatistics} from '../../../../hooks';


// types
import {PlayersInfoProps} from '../types';

import {useStyles} from '../styles';

export default function PlayerInfo(props: PlayersInfoProps) {
  // styles
  const classes = useStyles();

  const {
    id, name, age,
    position, history, value
  } = props;

  const [makeRelocate] = useRelocateToPlayerStatistics(id);

  const relocateToAnotherPage = () => {
    makeRelocate(id)
  };

  const renderHistory = () => {
    return history.map((item, i) => {
      return <Grid item container xs={12} key={i}>
        <Grid item xs={6}>{item.apps}</Grid>
        <Grid item xs={6}>{item.goals}</Grid>
      </Grid>
    })
  };

  return (
    <Card className={classes.root}>
      <Grid item container onClick={relocateToAnotherPage}>
        <Grid item container onClick={relocateToAnotherPage}>
          <Grid item xs={2}>
            <Typography color="textSecondary">{name}</Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography color="textSecondary">{age}</Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography color="textSecondary">{position}</Typography>
          </Grid>


          <Grid item xs={2}>
            <Typography color="textSecondary">{value}</Typography>
          </Grid>

          <Grid item xs={2}>
            {renderHistory()}
          </Grid>

        </Grid>
      </Grid>
    </Card>
  )
}
