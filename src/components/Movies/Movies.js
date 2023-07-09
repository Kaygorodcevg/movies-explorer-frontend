import { useCallback, useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { filterMovies, filterShortMovies } from '../../utils/filterMovies';
import * as moviesApi from '../../utils/MoviesApi';

function Movies({ savedMoviesList, onLikeClick, onDeleteClick }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [shortFilms, setShortFilms] = useState(true);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isCardsNotFound, setCardsNotFound] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoaging] = useState(false);

  function handleSetFilteredMovies(movies, search) {
    const moviesList = filterMovies(movies, search);
    localStorage.setItem('movies', JSON.stringify(moviesList));
  }

  function handleSearchSubmit(item) {
    setIsLoaging(true);
    setSearchQuery(item);
    localStorage.setItem('searchQuery', item);
    localStorage.setItem('shortFilms', shortFilms);
    if (!movies.length) {
      moviesApi
        .getMovies()
        .then((data) => {
          setMovies(data);
          handleSetFilteredMovies(data, item, shortFilms);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoaging(false);
        });
    } else {
      handleSetFilteredMovies(movies, item, shortFilms);
      setIsLoaging(false);
    }
  }

  function handleChekMovies(arr) {
    arr.length === 0 ? setCardsNotFound(true) : setCardsNotFound(false);
  }

  const handleCheckbox = useCallback(() => {
    setShortFilms(!shortFilms);
  }, [shortFilms]);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem('movies'));
    if (arr && !searchQuery) {
      setFilteredMovies(shortFilms === false ? filterShortMovies(arr) : arr);
      handleChekMovies(arr);
    } else if (searchQuery) {
      const filterArr = filterMovies(movies, searchQuery, shortFilms);
      setFilteredMovies(filterArr);
      handleChekMovies(filterArr);
    }
  }, [shortFilms, searchQuery, movies]);

  return (
    <main className='movies'>
      <SearchForm
        onSearchClick={handleSearchSubmit}
        onCheckbox={shortFilms}
        shortFilms={handleCheckbox}
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
