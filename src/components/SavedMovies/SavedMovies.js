import { useCallback, useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies } from '../../utils/filterMovies';

function SavedMovies({ list, onDeleteClick, isError }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [shortFilms, setShortFilms] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(list);
  const [isCardsNotFound, setCardsNotFound] = useState(false);

  function handleSearchSubmit(item) {
    setSearchQuery(item);
    const filtredList = filterMovies(list, searchQuery, shortFilms);
    setFilteredMovies(filtredList);
  }

  const handleCheckbox = (event) => {
    setShortFilms(event.target.checked);
    // localStorage.setItem('shortFilms', event.target.checked);
  };

  useEffect(() => {
    const filtredList = filterMovies(list, searchQuery, shortFilms);
    setFilteredMovies(filtredList);
    if (searchQuery) {
      filtredList.length === 0
        ? setCardsNotFound(true)
        : setCardsNotFound(false);
    }
  }, [shortFilms, list, searchQuery]);

  return (
    <main className='saved-movies'>
      <SearchForm
        onSearchClick={handleSearchSubmit}
        onCheckbox={handleCheckbox}
        shortFilms={shortFilms}
        savedFilmsPage={true}
      />
      <MoviesCardList
        list={filteredMovies}
        onDelete={onDeleteClick}
        isCardsNotFound={isCardsNotFound}
        isError={isError}
        savedFilmsPage={true}
      />
    </main>
  );
}

export default SavedMovies;
