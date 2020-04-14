import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.11:3333',
  timeout: 600000, // 10 Minutes
});

export default api;
