import axios from 'axios';

const API_BASE_URL = 'https://vote-politico.herokuapp.com/api/v1';

export const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signup = user => (client.post('/auth/signup', user));
export const login = user => (client.post('/auth/login', user));
