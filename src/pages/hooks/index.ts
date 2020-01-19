import {useHistory} from 'react-router-dom';
import {RouteConfig, routes} from '../config';

export function useRelocateToGamesRoute(id: string) {
    const history = useHistory();

    const makeRelocate = () => {
        history.push(routes.teams.url);
    };

    return [makeRelocate()];
}

export function useRelocateToPlayerStatistics() {
    const history = useHistory();

    const makeRelocate = (id: string) => {
        history.push(routes.playerStatistics.url + '/' + id);
    };

    return [makeRelocate];
}


export function useRelocateToTeamsInfo() {
    const history = useHistory();

    const makeRelocate = (id: string) => {
        history.push(routes.playerStatistics.url + '/' + id);
    };

    return [makeRelocate];
}

