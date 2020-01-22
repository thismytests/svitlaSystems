import React from 'react';

// material
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";

// types
import {PlayersInfoProps} from './types';
import Item from './player';

import {locale} from './locale';

// styles
import {useStyles} from './styles';

export default function PlayersInfo(props: { data: Array<PlayersInfoProps> | undefined }) {
  const classes = useStyles();

  const createPlayersTemplate = (): any => {
    if (props.data === undefined) {
      return null
    }

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{locale.NAME}</TableCell>
              <TableCell align="right">{locale.AGE}</TableCell>
              <TableCell align="right">{locale.POSITION}</TableCell>
              <TableCell align="right">{locale.VALUE}</TableCell>
              <TableCell align="right">{locale.HISTORY}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((item, i) =>
              (
                <Item {...item}></Item>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    )
  };

  return (
    <>
      {createPlayersTemplate()}


    </>
  )
}
