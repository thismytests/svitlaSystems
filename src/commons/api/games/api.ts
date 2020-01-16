import {url} from '../constants';
import {GamesAPI} from "./types";

const entryPoint = 'teams/players';


const headers = {};
const body = {};


export const request = async ()=> {
    try {
        let response = await fetch(url + entryPoint, {
            headers,
            method: 'POST',
            body: JSON.stringify(body)
        });

        let json = await response.json();

        if (json.errorCode) {
            return Promise.reject(json);
        }

        if (response.ok) {
            return Promise.resolve(json);
        }

    } catch (err) {
        console.log('err :', err);
        return Promise.reject(err)
    }

}
