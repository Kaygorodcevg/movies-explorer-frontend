export function filterMovies(movies, searchQuery, checkbox) {
  const searchStr = searchQuery.toLowerCase();
  const moviesByQuery = movies.filter((item) => {
    const strRu = String(item.nameRU).toLowerCase();
    const strEn = String(item.nameEN).toLowerCase();
    return strRu.indexOf(searchStr) !== -1 || strEn.indexOf(searchStr) !== -1;
  });

  if (!checkbox) {
    localStorage.setItem("movies", JSON.stringify(moviesByQuery));
    localStorage.setItem("moviesSearchQuery", searchStr);
  } else {
    localStorage.setItem("savedMoviesSearchQuery", searchStr);
  }
  return moviesByQuery;
}

export function filterShortMovies(movies, checkbox, isSavedMovies) {
  if (!isSavedMovies) {
    localStorage.setItem("isShortFilms", checkbox);
  } else {
    localStorage.setItem("isSavedMoviesShortFilms", checkbox);
  }
  if (!checkbox) {
    return movies.filter((item) => { return item.duration < 40})
  } else {
    return movies;
  }
}
