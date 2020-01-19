import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router';

// request
import {request as TeamsRequest} from '../../commons/api/teams';

// components
import Team, {TeamProps} from './team';
import {GamesAPI} from '../../commons/api/teams/types';

// styles
import {Grid} from '@material-ui/core';

export default function Teams(props: RouteComponentProps) {
  const [teams, setTeams] = useState<GamesAPI>();

  const getTeams = async () => {
    const teamsResult = await TeamsRequest();
    setTeams(teamsResult);
  };

  const createTeamsTemplate = () => {
    return teams?.data.map((item, i: number) => {
      const teamProps: TeamProps = {
        id: item.id,
        logo: item.logo_url,
        name: item.name
      };
      return (
        <Grid item xs={12} key={item.id}>
          <Team  {...teamProps}/>
        </Grid>
      )
    });

  };

  useEffect(() => {
    getTeams();
  }, [props.history.location]);


  return (
    <div>
      {createTeamsTemplate()}
    </div>
  )
}
