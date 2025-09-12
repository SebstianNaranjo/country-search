import axios from "axios";

export const getCountriesByName = async (query) => {
  const url = `https://restcountries.com/v3.1/name/${query}`;
  const response = await axios.get(url);
  return response.data;
};