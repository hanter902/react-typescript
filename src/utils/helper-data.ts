import Axios, { AxiosRequestConfig, Method } from 'axios';
import {URL_API} from './config-app';

const query = (query ='', variables = {}, method:Method = 'POST') => {

    const configAxios: AxiosRequestConfig = {
        url: URL_API,
        method: method,
        data: {
            query: query,
            variables: variables
        }
    };

    return Axios(configAxios)
    .then(response => response)
    .catch(error => error);
}

export default query;

