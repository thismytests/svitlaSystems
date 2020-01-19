import {url} from '../constants';
import {TeamsAPI} from "./types";
import {stringify} from 'query-string';

const entryPoint = 'teams';


const request = async (data?: {
  team_id?: string
}): Promise<TeamsAPI | undefined> => {
  const headers = {};
  const body = {};

  const params: {
    [id: string]: any
  } = {lat: 35.696233, long: 139.570431};


  const requestUrl = url + entryPoint + '?' + stringify(params);

  try {
    let response = await fetch(requestUrl, {
      headers,
      method: 'POST',
      body: JSON.stringify(body)
    });

    let json = await response.json();

    if (json.errorCode) {
      return Promise.reject(json as TeamsAPI);
    }

    if (response.ok) {
      return Promise.resolve(json as TeamsAPI);
    }

  } catch (err) {
    console.log('err :', err);
    return Promise.reject(err)
  }

};

export const getTeams = (): Promise<TeamsAPI | undefined> => {
  return request()
};

export const getTeam = (team_id: string): Promise<TeamsAPI | undefined> => {
  return request({team_id})
};
