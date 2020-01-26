export interface RouteConfig {
  [id: string]: {
    url: string,
    useId?: boolean,
    path: string
  }
}

export const routes: RouteConfig = {
  notFoundPage: {
    path: '/404',
    url: '/404'
  },

  teams: {
    path: '/teams',
    url: '/teams'
  },
  playerStatistics: {
    path: '/playerStatistics',
    url: '/playerStatistics/:id',
    useId: true
  },
  teamsInfo: {
    path: '/teamsInfo',
    url: '/teamsInfo/:id',
    useId: true
  }
};
