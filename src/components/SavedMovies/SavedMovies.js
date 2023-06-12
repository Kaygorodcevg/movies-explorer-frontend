import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({list}) {

const filmsFilter = list.filter(item => !item.owner)

  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList list = {filmsFilter} savedFilms = {true}/>
    </section>
  );
}

export default SavedMovies;