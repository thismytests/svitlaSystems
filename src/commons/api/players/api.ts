import {url} from '../constants';

// types
import {PlayersAPI} from './types';
import {ApiError} from '../types';

const entryPoint = 'teams/players';


const headers = {
  'Content-Type': 'application/json'
};

export const request = async (data?: {
  id?: string
}): Promise<PlayersAPI | ApiError | any> => {
  let body: {
    team_id?: string
  } = {};

  if (data?.id) {
    body.team_id = data.id
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
      return Promise.resolve(json as PlayersAPI);
    }

  } catch (err) {
    console.error('err :', err);
    return Promise.reject(err)
  }
};

export const getPlayers = (): Promise<PlayersAPI | undefined> => {
  return request()
};

export const getPlayerByTeamId = (id: string): Promise<PlayersAPI | undefined> => {

  return request({id})
};

