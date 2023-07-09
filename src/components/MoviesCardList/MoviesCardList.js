import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import useWindowWidth from '../../hooks/useWindowWidth';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  list,
  isCardsNotFound,
  isError,
  onLike,
  onDelete,
  savedFilmsPage,
  savedFilms,
  isLoading,
  isEmpty,
}) {
  const width = useWindowWidth();
  const [cardsForRender, setCardsForRender] = useState([]);
  const [cardsRenderWithParams, setCardsRenderWithParams] = useState({
    total: 0,
    more: 0,
  });

  useEffect(() => {
    if (width > 1050) {
      setCardsRenderWithParams({ total: 12, more: 3 });
    } else if (width <= 1050 && width > 680) {
      setCardsRenderWithParams({ total: 8, more: 2 });
    } else if (width <= 680) {
      setCardsRenderWithParams({ total: 5, more: 2 });
    }
  }, [width]);

  useEffect(() => {
    if (list.length && !savedFilmsPage) {
      const result = list.filter(
        (card, index) => index < cardsRenderWithParams.total
      );
      setCardsForRender(result);
    }
  }, [cardsRenderWithParams.total, list, savedFilmsPage]);

  function handleMoreButtonClick() {
    const start = cardsForRender.length;
    const end = start + cardsRenderWithParams.more;
    const rest = list.length - start;

    if (rest > 0) {
      const newCardsForRender = list.slice(start, end);
      setCardsForRender([...cardsForRender, ...newCardsForRender]);
    }
  }

  function getSavedMovieCard(arr, id) {
    return arr.find((item) => {
      return item.movieId === id;
    });
  }

  function getMovieList() {
    return cardsForRender.map((card) => {
      const likedCard = getSavedMovieCard(savedFilms, card.id);
      const likedId = likedCard ? likedCard._id : null;
      return (
        <MoviesCard
          key={card.id}
          card={{ ...card, _id: likedId }}
          onLike={onLike}
          onDelete={onDelete}
          liked={likedCard ? true : false}
        />
      );
    });
  }

  function getSavedMovieList() {
    return list.map((card) => (
      <MoviesCard
        key={card._id}
        card={card}
        onDelete={onDelete}
        savedPage={savedFilmsPage}
      />
    ));
  }

  return (
    <section className='movies-list'>
      {isLoading ? (
        <Preloader />
      ) : isEmpty || isError ? (
        <p
          className={`movies-list__message ${
            isError && 'movies-list__message_type_err'
          }`}
        >
          {isError
            ? `Во время запроса произошла ошибка. 
              Возможно, проблема с соединением или сервер недоступен.
              Подождите немного и попробуйте ещё раз.`
            : 'По такому запросу ничего не найдено :( '}
        </p>
      ) : (
        <>
          <div className='movies-list__table'>
            {savedFilmsPage ? getSavedMovieList() : getMovieList()}
          </div>
          <button
            className={`movies-list__more-btn hover-button
        ${
          (savedFilmsPage ||
            isCardsNotFound ||
            cardsForRender.length === list.length) &&
          'movies-list__more-btn_hidden'
        }`}
            type='button'
            aria-label='Показать еще'
            onClick={handleMoreButtonClick}
          >
            Ещё
          </button>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
