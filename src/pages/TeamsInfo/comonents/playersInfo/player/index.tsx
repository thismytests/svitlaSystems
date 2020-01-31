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

  const totalGoalsInAllTeams = () => {
    return history.reduce((sum, current, i) => {
      return sum + current.goals;
    }, 0);
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
                 onClick={relocateToAnotherPage}> {totalGoalsInAllTeams()}</TableCell>
    </>
  )
}
