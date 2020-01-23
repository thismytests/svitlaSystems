import {url} from '../constants';
import {GamesAPI} from "./types";

const entryPoint = 'teams/games';

const headers = {};
const body = {};

const request = async (data?: {
  team_id?: string
}): Promise<GamesAPI | undefined> => {
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

export const getGame = (team_id: string): Promise<GamesAPI | undefined> => {
  return request({team_id})
};

