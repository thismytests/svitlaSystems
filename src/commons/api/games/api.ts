import {url} from '../constants';
import {GamesAPI} from "./types";

const entryPoint = 'teams/games';

const headers = {
  'Content-Type': 'application/json'
};

const request = async (data?: {
  id?: string
}): Promise<GamesAPI | undefined> => {

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

    if (json.errorCode) {
      return Promise.reject(json as GamesAPI);
    }

    if (response.ok) {
      return Promise.resolve(json as GamesAPI);
    }

  } catch (err) {
    console.log('err :', err);
    return Promise.reject(err)
  }
};

export const getGames = (): Promise<GamesAPI | undefined> => {
  return request()
};

export const getGameByTeamId = (id: string): Promise<GamesAPI | undefined> => {
  return request({id})
};

