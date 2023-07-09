export function filterMovies(movies, searchQuery, checkbox) {
  const moviesByQuery = movies.filter((item) => {
    const strRu = String(item.nameRU).toLowerCase();
    const strEn = String(item.nameEN).toLowerCase();
    const searchStr = searchQuery.toLowerCase();
    return strRu.indexOf(searchStr) !== -1 || strEn.indexOf(searchStr) !== -1;
  });

  if (checkbox === false) {
    return filterShortMovies(moviesByQuery);
  }
  return moviesByQuery;
}

export function filterShortMovies(movies) {
  return movies.filter((item) => {
    return item.duration < 40;
  });
}
