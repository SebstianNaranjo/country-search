import axios from "axios";

export const getCountriesByName = async (query) => {
  const url = "https://restcountries.com/v3.1/name/" + query;
  const response = await axios.get(url, {
    params: {
      fields: "name,capital,flags,population,region"
    }
  });

  const data = response.data;

  const responseMap = data.map((country) => ({
    name: country.name.common,
    capital: country.capital ? country.capital[0] : "Sin capital",
    flag: country.flags.svg,
    population: country.population,
    region: country.region,
  }));

  return responseMap;
};