import {url} from '../constants';
import {Item} from "./types";

const entryPoint = 'teams/teamsInfo';


const headers = {};
let body = {
    date: '',
    team_one_id: '',
    team_one_goals: '',
    team_two_goals: ''
};


export const request = async (data: {
    date: Date,
    team_one_id: string,
    team_one_goals: number,
    team_two_goals: number
}): Promise<Item | undefined> => {
    try {
        const {date, team_one_id, team_one_goals, team_two_goals} = data;

        // set to body
        let body = {
            date, team_one_id, team_one_goals, team_two_goals
        };

        let response = await fetch(url + entryPoint, {
            headers,
            method: 'POST',
            body: JSON.stringify(body)
        });

        let json = await response.json();

        if (json.errorCode) {
            return Promise.reject(json as Item);
        }

        if (response.ok) {
            return Promise.resolve(json as Item);
        }

    } catch (err) {
        console.log('err :', err);
        return Promise.reject(err)
    }
};

