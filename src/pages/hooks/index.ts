import {useHistory} from 'react-router-dom';
import {routes} from '../config';

export function useRelocateToGamesRoute() {
  const history = useHistory();

  const makeRelocate = () => {
    history.push(routes.teams.url);
  };

  return [makeRelocate()];
}

export function useRelocateToPlayerStatistics(id: string) {
  const history = useHistory();

  const makeRelocate = () => {
    history.push({
      pathname: routes.playerStatistics.path + "/" + id,
      state: {
        id: id
      }
    });
  };

  return [makeRelocate];
}


export function useRelocateToTeamsInfo(id: string) {
  const history = useHistory();

  const makeRelocate = () => {
    history.push({
      pathname: routes.teamsInfo.path + "/" + id,
      state: {
        id: id
      }
    });
  };

  return [makeRelocate];
}

