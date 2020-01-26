import {url} from '../constants';

// types
import {TeamsAPI} from './types';
import {ApiError} from '../types';

const entryPoint = 'teams';

const headers = {
  'Content-Type': 'application/json'
};

const requestUrl = url + entryPoint;

const request = async (data?: {
  'id'?: string
}): Promise<TeamsAPI | ApiError | any> => {

  let body: {
    id?: string
  } = {};


  if (data?.id) {
    body.id = data.id
  }

  try {
    let response = await fetch(requestUrl, {
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
      return Promise.resolve(json as TeamsAPI);
    }

  } catch (err) {
    console.error('err :', err);
    return Promise.reject(err)
  }

};

export const getTeams = (): Promise<TeamsAPI | undefined> => {
  return request()
};

export const getTeamById = (id: string): Promise<TeamsAPI | undefined> => {
  return request({id})
};
