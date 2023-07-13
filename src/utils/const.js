export const MOVIE_URL = 'https://api.nomoreparties.co';
// export const BASE_URL = 'http://localhost:3005';
export const BASE_URL = 'https://api.movie.project.nomoredomains.rocks';

const SUCCESS = 200;
const BAD_REQUEST = 400;
const REGEX = '^[A-Za-zА-Яа-яЁё\\-\\s]+$'

export function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  }

export { SUCCESS, BAD_REQUEST, REGEX };
