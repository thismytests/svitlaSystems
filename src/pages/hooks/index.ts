import {useHistory} from 'react-router-dom';
import {RouteConfig, routes} from '../config';

export function useRelocateToGamesRoute(id: string) {
    const history = useHistory();

    const makeRelocate = () => {
        history.push(routes.teams.url);
    };

    return [makeRelocate()];
}

export function useRelocateToPlayerStatistics(id: string) {
    const history = useHistory();

    const makeRelocate = () => {
        history.push(routes.playerStatistics.url + '/' + id);
    };

    return [makeRelocate()];
}


export function useRelocateToTeamsInfo(id: string) {
    const history = useHistory();

    const makeRelocate = () => {
        history.push(routes.playerStatistics.url + '/' + id);
    };

    return [makeRelocate()];
}

