import React from 'react';
import {Avatar, Card, Grid} from "@material-ui/core";

// routing
import {useRelocateToTeamsInfo} from '../../../hooks';

import Typography from '@material-ui/core/Typography';
import {useStyles} from './styles';

interface TeamInfoProps {
  "id": string,
  "name": string,
  "city": string,
  "logo_url": string,
  "founded": number,
  "colour": string,
  "budget": number
}

export default function TeamInfo(props: TeamInfoProps) {
  // styles
  const classes = useStyles();

  const {id, name, city, logo_url, founded, colour, budget} = props;
  const [makeRelocate] = useRelocateToTeamsInfo();

  const relocateToAnotherPage = () => {
    makeRelocate(id)
  };

  return (
    <Card className={classes.root}>
      <Grid item container onClick={relocateToAnotherPage}>
        <Grid item xs={2}>
          <Avatar alt={name} src={logo_url}/>
        </Grid>

        <Grid item xs={2}>{name}</Grid>
        <Grid item xs={2}>{city}</Grid>
        <Grid item xs={2}>{logo_url}</Grid>
        <Grid item xs={2}>{founded}</Grid>
        <Grid item xs={2}>{colour}</Grid>
        <Grid item xs={2}>{budget}</Grid>


        <Grid item xs={10}>
          <Typography color="textSecondary">{name}</Typography>
        </Grid>

      </Grid>
    </Card>
  )
}
