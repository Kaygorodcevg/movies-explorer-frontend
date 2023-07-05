import { useCallback, useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { filterMovies, filterShortMovies } from '../../utils/filterMovies';
import * as moviesApi from '../../utils/MoviesApi';

function Movies({savedMoviesList, onLikeClick, onDeleteClick}) {

  //   localStorage.getItem('shortFilms') === 'on' ? 'on' : 'off';

  const [searchQuery, setSearchQuery] = useState('');
  const [shortFilms, setShortFilms] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  const [isCardsNotFound, setCardsNotFound] = useState(false);
  const [isError, setIsError] = useState(false);


  function handleSetFilteredMovies(movies, query, checkbox) {
    const moviesList = filterMovies(movies, query);
    setFilteredMovies(
      checkbox === false ? filterShortMovies(moviesList) : moviesList
    );
    localStorage.setItem('movies', JSON.stringify(moviesList));
  }

  function handleSearchSubmit(item) {
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
        });
    } else {
      handleSetFilteredMovies(movies, item, shortFilms);
    }
  }

  const handleCheckbox = event => {
    setShortFilms(event.target.checked);
    localStorage.setItem('shortFilms', event.target.checked);
  };

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem('movies'));
    if (arr && !searchQuery) {
      // setShortFilms(true);
      setShortFilms(localStorage.getItem('shortFilms') === true ? false : true);
      setFilteredMovies(shortFilms === false ? filterShortMovies(arr) : arr);
    }
  }, [shortFilms, searchQuery]);

  useEffect(() => {
    if (searchQuery) {
      const arr = filterMovies(movies, searchQuery, shortFilms);
      setFilteredMovies(arr);
    }
  }, [searchQuery, shortFilms, movies]);

  return (
    <main className='movies'>
      <SearchForm
        onSearchClick={handleSearchSubmit}
        onCheckbox={handleCheckbox}
        shortFilms={shortFilms}
      />
      <MoviesCardList 
      list={filteredMovies} 
      isCardsNotFound ={isCardsNotFound}
      isError={isError}
      onLike={onLikeClick}
      onDelete={onDeleteClick}
      savedFilms={savedMoviesList}
      />
    </main>
  );
}

export default Movies;
