import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  // const filmsFilter = list.filter((item) => !item.owner);

  return (
    <main className='saved-movies'>
      <SearchForm />
      <MoviesCardList
        // list={filmsFilter}
        // savedFilms={true}
      />
    </main>
  );
}

export default SavedMovies;
