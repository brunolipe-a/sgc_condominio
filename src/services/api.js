import axios from 'axios';

const api = axios.create({
    baseURL: "https://sgc-jwt.herokuapp.com/api/"
});

export default api;