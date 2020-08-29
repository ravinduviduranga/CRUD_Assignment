import axios from 'axios';


import ApiConstants from './ApiConstants';


const instance = axios.create({
  baseURL: ApiConstants.BASE_URL,
  timeout: 5000,
  headers: {
    //'Access-Control-Allow-Origin': 'http://localhost:5000',
    //'Access-Control-Allow-Headers': '*',
    //'Content-Type': 'application/json',
    Accept: 'application/json',
    cache: 'no-cache',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer',
    accessThrough: 'SOME_DEVICE',
  },
});

export default instance;