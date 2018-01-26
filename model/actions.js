/*
* @Author: hfren
* @Date:   2018-01-26 17:22:56
* @Last Modified by:   hfren
* @Last Modified time: 2018-01-26 18:38:57
*/
import fetch from 'isomorphic-fetch';

const POST = 'POST';
const GET = 'GET';

function isNeedFetch() {

}

export const FETCH_REQUEST = 'FET_REQUEST';
export const FETCH_RECEIVE = 'FET_RECEIVE';

// request action
export const fetchRequest = (param, config) => {
    return {
        type : FETCH_REQUEST,
        param,
        config
    }
}
// receive action
export const fetchReceive = (param, response) => {
    return {
        type : FETCH_RECEIVE,
        response
    }
}
// fetch action
export const setFetch = (url, param, type = POST) => {
    let config = {type};
    if (!isNeedFetch(url)) {
        return 
    }
    return dispatch => {
        dispatch(fetchRequest(param, config));
        return fetch(url)
                .then(response => response.data)
                .then(data => dispatch(fetchReceive(param, data)))
    }
}