// import React from 'react';
import axios from 'axios';
const authToken = (sessionStorage.getItem('accessToken') || localStorage.getItem('accessToken')) ? (sessionStorage.getItem('accessToken') || localStorage.getItem('accessToken')) : "";
const apiUrl = 'https://tseclapi.deosoft.in/api';

const makeApiRequestWithJSON = (method, endpoint, data = null, params = null) => {

    const config = {
        method,
        url: `${apiUrl}/${endpoint}`,
        data,
        params,
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    };
    return axios(config);
};
const makeApiRequestWithForm = (method, endpoint, data = null, params = null) => {

    const config = {
        method,
        url: `${apiUrl}/${endpoint}`,
        data,
        params,
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    };

    return axios(config);

};


export const apiFormJSONPost = (endpoint, data, params) => makeApiRequestWithForm('post', endpoint, data, params);
export const apiJSONPost = (endpoint, data, params) => makeApiRequestWithJSON('post', endpoint, data, params);
export const apiFormJSONGet = (endpoint, data, params) => makeApiRequestWithForm('get', endpoint, data, params);
