import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router';

// request
import {getTeams as getTeamsApi} from '../../commons/api/teams';
import {getGames as getGamesApi} from '../../commons/api/games';
import {getPlayers as getPlayersApi} from '../../commons/api/players';


// components
import TeamInfo, {TeamInfoProps} from './comonents/teamInfo';
import GamesInfo, {GamesInfoProps} from './comonents/gamesInfo';
import PlayersInfo, {PlayersInfoProps} from './comonents/playersInfo';

// types
import {TeamsAPI} from '../../commons/api/teams/types';
import {PlayersAPI} from '../../commons/api/players/types';
import {GamesAPI} from '../../commons/api/games/types';

// styles
import {Grid} from '@material-ui/core';

// styles
import {useStyles} from './styles';

export default function Teams(props: RouteComponentProps) {
  const classes = useStyles();

  const [team, setTeam] = useState<TeamsAPI>();
  const [players, setPlayers] = useState<PlayersAPI>();
  const [game, setGames] = useState<GamesAPI>();


  const getData = async () => {
    const teamsResult = await getTeamsApi();
    setTeam(teamsResult);

    const gamesResult = await getGamesApi();
    setGames(gamesResult);

    const playersResult = await getPlayersApi();
    setPlayers(playersResult);
  };

  const createTeamTemplate = () => {
    // todo... Nick Litvin... will be removed
    const result = [team?.data[0]];

    return result.map((item, i: number) => {
      const teamProps: TeamInfoProps = {
        id: item?.id || '',

        budget: item?.budget || 0,
        city: item?.city || '',
        colour: item?.colour || '',
        founded: item?.founded || 0,
        logo_url: item?.logo_url || '',
        name: item?.name || '',
      };

      return (
        <Grid item xs={12} key={i}>
          <TeamInfo  {...teamProps}/>
        </Grid>
      )
    });

  };

  const createGameTemplate = () => {
    // todo... Nick Litvin... will be removed
    const result = [game?.data[0]];

    return result.map((item, i: number) => {
      const gamesProps: GamesInfoProps = {
        id: item?.id || '',
        date: item?.date || new Date(),
        team_one_goals: item?.team_one_goals || 0,
        team_one_id: item?.team_one_id || '',
        team_two_goals: item?.team_two_goals || 0
      };

      return (
        <Grid item xs={12} key={i}>
          <div><GamesInfo {...gamesProps}/></div>
        </Grid>
      )
    });

  };


  const createPlayersTemplate = () => {
    // todo... Nick Litvin... will be removed
    const result = [players?.data[0]];

    if (!result) return;

    return result.map((item, i: number) => {
      const gamesProps: PlayersInfoProps = {
        id: item?.id || '',
        age: item?.age || 0,
        flag_url: item?.flag_url || '',
        history: item?.history || [{}],
        name: item?.name || '',
        nationality: item?.nationality || '',
        position: item?.position || '',
        team_id: item?.team_id || '',
        value: item?.value || 0
      };


      return (
        <Grid item xs={12} key={i}>
          <PlayersInfo {...gamesProps}/>
        </Grid>
      )
    });

  };
  useEffect(() => {
    getData();
  }, [props.history.location]);


  return (
    <Grid container item xs={12}>
      <Grid item container xs={12} className={classes.item}>
        {createTeamTemplate()}
      </Grid>


      <Grid item container lg={6} sm={12} className={classes.item}>
        {createPlayersTemplate()}
      </Grid>

      <Grid item container lg={6} sm={12} className={classes.item}>
        {createGameTemplate()}
      </Grid>


    </Grid>
  )
}
