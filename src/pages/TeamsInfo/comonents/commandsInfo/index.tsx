import React from 'react';
import {Avatar, Card, Grid} from "@material-ui/core";

// routing
import {useRelocateToTeamsInfo} from '../../../hooks';

import Typography from "@material-ui/core/Typography";
import {useStyles} from "./styles";




export interface TeamProps {
  id: string,
  name: string,
  logo: string
}

export default function Team(props: TeamProps) {
  // styles
  const classes = useStyles();

  const {id, name, logo} = props;
  const [makeRelocate] = useRelocateToTeamsInfo();

  const relocateToAnotherPage = () => {
    makeRelocate(id)
  };

  return (
    <Card className={classes.root}>
      <Grid item container onClick={relocateToAnotherPage}>
        <Grid item xs={2}>
          <Avatar alt="Remy Sharp" src={logo}/>
        </Grid>
        <Grid item xs={10}>
          <Typography color="textSecondary">{name}</Typography>
        </Grid>

      </Grid>
    </Card>
  )
}
