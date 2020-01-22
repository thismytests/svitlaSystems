import React from 'react';

// react material
import {
  Grid,
  TableCell,
  TableRow
} from '@material-ui/core';

// routing
import {useRelocateToPlayerStatistics} from '../../../../hooks';

// types
import {PlayersInfoProps} from '../types';

// styles
import {useStyles} from '../styles';

export default function PlayerInfo(props: PlayersInfoProps) {
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
    <TableRow key={name} className={classes.root}
              onClick={relocateToAnotherPage}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{age}</TableCell>
      <TableCell align="right">{position}</TableCell>
      <TableCell align="right">{value}</TableCell>
      <TableCell align="right"> {renderHistory()}</TableCell>
    </TableRow>
  )
}
