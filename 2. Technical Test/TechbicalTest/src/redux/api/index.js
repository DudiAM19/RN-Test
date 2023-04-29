import axios from 'axios';
const api = 'https://62e8dc1a249bb1284eb53770.mockapi.io/';

export const getDataApi = () => {
  return axios.get(`${api}/data`);
};
