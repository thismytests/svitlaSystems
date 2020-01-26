import {url} from '../constants';

// types
import {GamesAPI} from './types';
import {ApiError} from '../types';

const entryPoint = 'teams/games';

const headers = {
  'Content-Type': 'application/json'
};

const request = async (data?: {
  id?: string
}): Promise<GamesAPI | ApiError | any> => {

  let body: {
    team_one_id?: string
  } = {};

  if (data?.id) {
    body.team_one_id = data.id
  }

  try {
    let response = await fetch(url + entryPoint, {
      headers,
      method: 'POST',
      body: JSON.stringify(body)
    });

    let json = await response.json();

    if (json.error) {
      const err: ApiError = {
        url: response.url,
        errorText: json.error
      };

      return Promise.reject(err);
    }

    if (response.ok) {
      return Promise.resolve(json as GamesAPI);
    }

  } catch (err) {
    console.error('err :', err);
    return Promise.reject(err)
  }
};

export const getGames = (): Promise<GamesAPI | undefined> => {
  return request()
};

export const getGameByTeamId = (id: string): Promise<GamesAPI | undefined> => {
  return request({id})
};

