import axios from 'axios';

const api = axios.create({
    baseURL: 'https://youhack.herokuapp.com'
});

export default api;