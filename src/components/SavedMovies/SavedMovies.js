import { useCallback, useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies, filterShortMovies } from '../../utils/filterMovies';

function SavedMovies({ list, onDeleteClick, isError }) {
  const [shortFilms, setShortFilms] = useState(true);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isCardsNotFound, setCardsNotFound] = useState(false);

  const handleSearchSubmit = useCallback(
    (searchQuery) => {
      setCardsNotFound(false);
      if (list.length) {
        const arr = filterMovies(list, searchQuery, true);
        setMovies(arr);
        if (!arr.length) {
          setCardsNotFound(true);
          setFilteredMovies(arr);
        } else {
          const filterMovies = filterShortMovies(arr, shortFilms, true);
          setFilteredMovies(filterMovies);
          if (!filterMovies.length) {
            setCardsNotFound(true);
          }
        }
      } else {
        setCardsNotFound(true);
      }
    },
    [list, shortFilms]
  );

  const handleCheckbox = useCallback(
    (isChecked) => {
      setShortFilms(isChecked);
      setCardsNotFound(false);
      const filterMovies = filterShortMovies(movies, isChecked, true);
      setFilteredMovies(filterMovies);
      if (!filterMovies.length) {
        setCardsNotFound(true);
      }
    },
    [movies]
  );

  useEffect(() => {
    setCardsNotFound(false);
    if (
      localStorage.getItem("savedMoviesSearchQuery") &&
      localStorage.getItem("isSavedMoviesShortFilms")
    ) {
      const checkbox = JSON.parse(localStorage.getItem("isSavedMoviesShortFilms"));
      setShortFilms(checkbox);
      const searchQuery = localStorage.getItem("savedMoviesSearchQuery");
      const arr = filterMovies(list, searchQuery, true);
      setMovies(arr);
      if (!arr.length) {
        setCardsNotFound(true);
        setFilteredMovies(arr);
      } else {
        const filterMoviesShort = filterShortMovies(arr, checkbox, true);
        setFilteredMovies(filterMoviesShort);
        if (!filterMoviesShort.length) {
          setCardsNotFound(true);
        }
      }
    } else if (
      !localStorage.getItem("savedMoviesSearchQuery") &&
      localStorage.getItem("isSavedMoviesShortFilms")
    ) {
      setMovies(list);
      const checkbox = JSON.parse(localStorage.getItem("isSavedMoviesShortFilms"));
      setShortFilms(checkbox);
      const filterMoviesShort = filterShortMovies(list, checkbox, true);
      setFilteredMovies(filterMoviesShort);
      if (!filterMoviesShort.length) {
        setCardsNotFound(true);
      }
    } else {
      setFilteredMovies(list);
      setMovies(list);
    }
  }, [list]);

  return (
    <main className='saved-movies'>
      <SearchForm
        onSearchClick={handleSearchSubmit}
        shortFilms={handleCheckbox}
        onCheckbox={shortFilms}
        savedFilmsPage={true}
      />
      <MoviesCardList
        list={filteredMovies}
        onDelete={onDeleteClick}
        isEmpty={isCardsNotFound}
        isError={isError}
        savedFilmsPage={true}
      />
    </main>
  );
}

export default SavedMovies;
