import axios from 'axios';
// import { getEnvVariables } from '../helpers';

// const {VITE_API_URL} = getEnvVariables();


const API = axios.create({
    baseURL:'https://sandbox.banwire.com/mutuus/api/rest'
});

export default API;