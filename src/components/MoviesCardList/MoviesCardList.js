import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ list, savedFilmss }) {
  return (
    <section className='movies-list'>
      <div className='movies-list__table'>
        {list.map((item) => (
          <MoviesCard
            key={item.id}
            card={item}
            savedFilms={savedFilmss}
          />
        ))}
      </div>

      <button
        className='movies-list__more-btn hover-button'
        type='button'
        aria-label='Показать еще'
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
