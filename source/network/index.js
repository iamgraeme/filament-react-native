import { api } from 'app/config/api';

export const get = async () => {
  let response = await api.get('/');
  return response;
}