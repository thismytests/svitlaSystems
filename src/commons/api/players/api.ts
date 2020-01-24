import {url} from '../constants';
import {PlayersAPI} from './types';

const entryPoint = 'teams/players';


const headers = {
  'Content-Type': 'application/json'
};
let body: {
  team_id?: string
} = {};

export const request = async (data?: {
  id?: string
}): Promise<PlayersAPI | undefined> => {
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

    if (json.errorCode) {
      return Promise.reject(json as PlayersAPI);
    }

    if (response.ok) {
      return Promise.resolve(json as PlayersAPI);
    }

  } catch (err) {
    console.log('err :', err);
    return Promise.reject(err)
  }
};

export const getPlayers = (): Promise<PlayersAPI | undefined> => {
  return request()
};

export const getPlayerByTeamId = (id: string): Promise<PlayersAPI | undefined> => {
  return request({id})
};

