import { MOVIE_URL } from "./const";

const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.statusText}`);

export const getMovies = () => {
  return fetch(`${MOVIE_URL}/beatfilm-movies`, {
    // credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
};
