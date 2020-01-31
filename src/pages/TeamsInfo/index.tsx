import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router';

// request
import {getTeamById as getTeamsApi} from '../../commons/api/teams';
import {getGameByTeamId} from '../../commons/api/games';
import {getPlayerByTeamId} from '../../commons/api/players';

// components
import TeamInfo, {TeamInfoProps} from './comonents/teamInfo';
import PlayersInfo from './comonents/playersInfo';
import GamesInfo from './comonents/gamesInfo';

// types
import {TeamsAPI} from '../../commons/api/teams/types';
import {PlayersAPI} from '../../commons/api/players/types';
import {GamesAPI} from '../../commons/api/games/types';

// material
import {Grid, Typography} from '@material-ui/core';

// routing
import {useRelocateNotFoundPage} from '../hooks';

// locales
import {locale} from './locale';

// styles
import {useStyles} from './styles';


export default function Teams(props: RouteComponentProps) {
  const classes = useStyles();

  const [makeRelocate] = useRelocateNotFoundPage();

  const [team, setTeam] = useState<TeamsAPI>();
  const [players, setPlayers] = useState<PlayersAPI>();
  const [game, setGames] = useState<GamesAPI>();

  const getData = async (id: string) => {
    try {
      const teamsResult = await getTeamsApi(id);
      setTeam(teamsResult);

      const gamesResult = await getGameByTeamId(id);
      setGames(gamesResult);

      const playersResult = await getPlayerByTeamId(id);
      setPlayers(playersResult);
    } catch (e) {
      console.log('err component', e);
      makeRelocate()
    }

  };

  const createTeamTemplate = () => {
    return team?.data?.map((item, i: number) => {
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
    const gamesProps = {
      data: game?.data
    };

    return (
      <GamesInfo {...gamesProps}/>
    )

  };


  const createPlayersTemplate = (): any => {
    const playersInfoProps = {
      data: players?.data
    };


    return (
      <>
        <PlayersInfo {...playersInfoProps}/>
      </>)
  };

  useEffect(() => {
    const params = props.match.params as { id: string };
    getData(params.id);
  }, []);


  return (
    <Grid container item xs={12}>
      {/*game*/}
      <Grid item container xs={12} className={classes.item}>
        <Grid item xs={12}>
          {createTeamTemplate()}
        </Grid>
      </Grid>

      {/*players*/}
      <Grid container item xs={12} alignItems={'flex-start'}>
        {
          players && (
            <Grid item container lg={6} sm={12} className={classes.item}>
              <Grid item xs={12}>{locale.PLAYERS}</Grid>
              <Grid item xs={12}>
                {createPlayersTemplate()}
              </Grid>
            </Grid>
          )
        }


        {/*goals*/}
        <Grid item container lg={6} sm={12} className={classes.item}>
          <Grid item xs={12}>{locale.GAMES}</Grid>
          <Grid item xs={12}>{createGameTemplate()}</Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}
