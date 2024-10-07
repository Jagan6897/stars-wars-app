//src/api/starWarsAPI.js
import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export const getPlanets = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/planets/?page=${page}`);
  return response.data;
};

export const getResidents = async (planetName) => {
  const url_ = `${BASE_URL}/planets/?search=${planetName}`;
  const response = await axios.get(url_);
  return response.data;
};

export const getResidentDetails = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
