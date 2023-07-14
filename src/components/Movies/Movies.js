import { useCallback, useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { filterMovies, filterShortMovies } from '../../utils/filterMovies';

function Movies({ isError, savedMoviesList, onLikeClick, onDeleteClick, onSearch, isLoading }) {
  const [shortFilms, setShortFilms] = useState(true);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isCardsNotFound, setCardsNotFound] = useState(false);
  const [foundCards, setFoundCards] = useState([]);

  const handleSetFilteredMovies = useCallback(
    (movies, search) => {
      const moviesList = filterMovies(movies, search, false);
      setFoundCards(moviesList);
      if (!moviesList.length) {
        setCardsNotFound(true);
        setFilteredMovies(moviesList);
      } else {
        const filtered = filterShortMovies(moviesList, shortFilms, false);
        setFilteredMovies(filtered);
        if (!filtered.length) {
          setCardsNotFound(true);
        }
      }
    },
    [shortFilms]
  );

  const handleSearchSubmit = useCallback(
    async (searchQuery) => {
      setCardsNotFound(false);
      if (!movies.length) {
        const data = await onSearch();
        if (data) {
          setMovies(data);
          handleSetFilteredMovies(data, searchQuery);
        }
      } else {
        handleSetFilteredMovies(movies, searchQuery);
      }
    },
    [handleSetFilteredMovies, movies, onSearch]
  );

  const handleCheckbox = useCallback(
    (isChecked) => {
      setShortFilms(isChecked);
      setCardsNotFound(false);
      const arr = filterShortMovies(foundCards, isChecked, false);
      setFilteredMovies(arr);
      if (!arr.length) {
        setCardsNotFound(true);
      }
    },
    [foundCards]
  );

  useEffect(() => {
    if (
      localStorage.getItem("movies") &&
      localStorage.getItem("isShortFilms")
    ) {
      const arr = JSON.parse(localStorage.getItem("isShortFilms"));
      setShortFilms(arr);
      const foundMovies = JSON.parse(localStorage.getItem("movies"));
      setFoundCards(foundMovies);
      if (!foundMovies.length) {
        setCardsNotFound(true);
        setFilteredMovies(foundMovies);
      } else {
        const filtered = filterShortMovies(foundMovies, arr, false);
        setFilteredMovies(filtered);
        if (!filtered.length) {
          setCardsNotFound(true);
        }
      }
    }
  }, []);

  return (
    <main className='movies'>
      <SearchForm
        onSearchClick={handleSearchSubmit}
        shortFilms={handleCheckbox}
        onCheckbox={shortFilms}
      />
      <MoviesCardList
        list={filteredMovies}
        isCardsNotFound={isCardsNotFound}
        isError={isError}
        onLike={onLikeClick}
        onDelete={onDeleteClick}
        savedFilms={savedMoviesList}
        isEmpty={isCardsNotFound}
        isLoading={isLoading}
      />
    </main>
  );
}

export default Movies;