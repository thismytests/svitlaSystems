import React from 'react';
import {Avatar, Grid} from "@material-ui/core";

// routing
import {useRelocateToTeamsInfo} from '../../hooks';

export interface TeamProps {
  id: string,
  name: string,
  logo: string
}

export default function Team(props: TeamProps) {
  const {id, name, logo} = props;
  const [makeRelocate] = useRelocateToTeamsInfo();

  const relocateToAnotherPage = () => {
    makeRelocate(id)
  };

  return (
    <Grid item container onClick={relocateToAnotherPage}>
      <Grid item xs={2}>
        <Avatar alt="Remy Sharp" src={logo}/>
      </Grid>
      <Grid item xs={10} alignContent={'flex-start'}>{name}</Grid>
    </Grid>
  )
}
