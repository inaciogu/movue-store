import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const apiKey = '1e4a7236b76287d2a3475f93961c8a0f';
