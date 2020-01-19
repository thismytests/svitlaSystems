import {url} from '../constants';
import {PlayersAPI} from './types';

const entryPoint = 'teams/players';


const headers = {};
const body = {};


export const request = async (data?: {
    team_id?: string
}): Promise<PlayersAPI | undefined> => {
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

export const getPlayer = (team_id: string): Promise<PlayersAPI | undefined> => {
    return request({team_id})
};

