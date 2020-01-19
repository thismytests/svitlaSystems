export interface RouteConfig  {
    [id: string]: {
        url: string,
        useId?: boolean
    }
}

export const routes: RouteConfig = {
    teams: {
        url: '/teams'
    },
    playerStatistics: {
        url: '/playerStatistics',
        useId: true
    },
    teamsInfo: {
        url: '/teamsInfo',
        useId: true
    }
};
