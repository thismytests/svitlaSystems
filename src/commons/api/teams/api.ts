import {url} from '../constants';
import {TeamsAPI} from "./types";

const entryPoint = 'teams';

const headers = {
  'Content-Type': 'application/json'
};
let body: {
  id?: string
} = {};

const request = async (data?: {
  'id'?: string
}): Promise<TeamsAPI | undefined> => {

  if (data?.id) {
    body.id = data.id
  }


  const requestUrl = url + entryPoint;

  try {
    let response = await fetch(requestUrl, {
      headers,
      method: 'POST',
      body: JSON.stringify(body)
    });

    let json = await response.json();

    console.log('json is', json);
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

export const getTeamById = (id: string): Promise<TeamsAPI | undefined> => {
  return request({id})
};
