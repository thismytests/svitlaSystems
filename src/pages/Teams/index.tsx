import React, {Component, useEffect, useState} from 'react';
import {match, RouteComponentProps} from 'react-router';
// request
import {request as TeamsRequest} from "../../commons/api/teams";

// components
import Team, {TeamProps} from './team';
import {GamesAPI} from "../../commons/api/teams/types";

export default function Teams(props: RouteComponentProps) {

  const [teams, setTeams] = useState<GamesAPI>();

  const getTeams = async () => {
    const teamsResult = await TeamsRequest();
    setTeams(teamsResult);
    console.log(' teamsResult:', teamsResult);


  };

  const createTeamsTemplate = () => {
    return teams?.data.map((item, i: number) => {
      const teamProps: TeamProps = {
        id: item.id,
        logo: item.logo_url,
        name: item.name
      };
      return (
        <Team key={i} {...teamProps}/>
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
