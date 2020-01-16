import {entryPoint} from '../constants';

const entryPoint = {};
const headers = {};
const body = {};


const request = async () => {
    try {
        let response = await fetch(entryPoint, {
            headers,
            method: 'POST',
            body: JSON.stringify(body)
        });
    } catch (err) {
        console.log('err :', err);

    } finally {

    }

}
