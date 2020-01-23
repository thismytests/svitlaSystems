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
    makeRelocate()
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
    <>
      <TableCell component="th" scope="row" onClick={relocateToAnotherPage}>
        {name}
      </TableCell>
      <TableCell align="right"
                 onClick={relocateToAnotherPage}
      >{age}</TableCell>
      <TableCell align="right"
                 onClick={relocateToAnotherPage}
      >{position}</TableCell>
      <TableCell align="right"
                 onClick={relocateToAnotherPage}>{value}</TableCell>
      <TableCell align="right"
                 onClick={relocateToAnotherPage}> {renderHistory()}</TableCell>
    </>
  )
}
