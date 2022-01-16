import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "70ac31807cmsh7d281eff69081c3p1b8660jsn8ea6c13e0e36",
    },
  });

  return data;
};
