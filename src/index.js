import { fetchFilms } from './fetchFilms.js';
const BASE_URL_TRENDS = 'https://api.themoviedb.org/3/trending/all/day';
const BASE_URL_QUERY = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';

const inputEl = document.querySelector('.input');

inputEl.addEventListener('input', inputQuery);

function inputQuery(e) {
  const input = e.target.value.trim();

  const searchParamsToQuery = new URLSearchParams({
    api_key: '1962278b5026dd7c7bb0a91cd47f798b',
    query: input,
  });
  const url = `${BASE_URL_QUERY}?${searchParamsToQuery}`;
  fetchFilms(url)
    .then(forMarcup => {
      console.log(forMarcup);
      // forMarcup це масив об’єктів фільмів за запитом
    })
    .catch(er => {
      console.log(er);
    });
}
