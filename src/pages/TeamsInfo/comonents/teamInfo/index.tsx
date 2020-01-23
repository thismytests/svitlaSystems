import React from 'react';
import {Avatar, Card, Grid, Paper} from "@material-ui/core";

// routing
import {useRelocateToTeamsInfo} from '../../../hooks';

import Typography from '@material-ui/core/Typography';
import {useStyles} from './styles';

export interface TeamInfoProps {
  "id": string,
  "name"?: string,
  "city"?: string,
  "logo_url"?: string,
  "founded"?: number,
  "colour"?: string,
  "budget"?: number
}

export default function TeamInfo(props: TeamInfoProps) {
  // styles
  const classes = useStyles();

  const {id, name, city, logo_url, founded, colour, budget} = props;
  const [makeRelocate] = useRelocateToTeamsInfo(id);

  const relocateToAnotherPage = () => {
    makeRelocate()
  };

  return (
    <Card className={classes.root}>
      <Grid item container xs={12} onClick={relocateToAnotherPage}>
        <Grid item xs={2}>
          <Avatar alt={name} src={logo_url}/>
        </Grid>

        <Grid item xs={2}>
          <Paper elevation={3} style={
            {
              'background': colour,
              'height': '50px',
              'width': '50px'
            }
          }/>
        </Grid>


        <Grid item xs={2}>
          <Typography color="textSecondary">{city}</Typography>
        </Grid>


        <Grid item xs={2}>
          <Typography color="textSecondary">{founded}</Typography>
        </Grid>


        <Grid item xs={2}>
          <Typography color="textSecondary">{budget}</Typography>
        </Grid>

      </Grid>
    </Card>
  )
}
