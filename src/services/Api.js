import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';
const URL = {
    LOGIN:    `${API_BASE}/auth/login`,
    REGISTER: `${API_BASE}/auth/register`
};

export class Api {
    static login(credentials) {
        return axios.post(URL.LOGIN, credentials);
    }

    static register(user) {
        return axios.post(URL.REGISTER, user);
    }

    static accessPrivate() {
        return axios.get('http://localhost:5000/api/auth/private');
    }
}