import React from 'react';

// react material
import {Card, Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {useStyles} from '../styles';

// date convertor
import {convertDate} from '../../../../../commons/convertors/dateConvertor';

// routing
import {useRelocateToTeamsInfo} from '../../../../hooks';
import {GamesInfoProps} from '../types';

export default function GamesInfo(props: GamesInfoProps) {
  // styles
  const classes = useStyles();

  const {id, date, team_one_id, team_one_goals, team_two_goals} = props;
  const [makeRelocate] = useRelocateToTeamsInfo();

  const relocateToAnotherPage = () => {
    makeRelocate(id)
  };

  const convertedDate = () => convertDate(date);

  return (
    <Card className={classes.root}>
      <Grid item container onClick={relocateToAnotherPage}>
        <Grid item xs={2}>
          <Typography color='textSecondary'>{convertedDate()}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography color='textSecondary'>{team_one_goals}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography color='textSecondary'>{team_two_goals}</Typography>
        </Grid>
      </Grid>
    </Card>
  )
}
