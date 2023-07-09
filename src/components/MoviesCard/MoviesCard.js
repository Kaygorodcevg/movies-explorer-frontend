import { useLocation } from 'react-router-dom';

import { MOVIE_URL } from '../../utils/const';

function MoviesCard({ card, onLike, onDelete, liked, savedPage }) {
  const location = useLocation();

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  }

  function handleCardLike() {
    onLike(card);
  }

  function handleCardDelete() {
    onDelete(card);
  }

  return (
    <section className='movie'>
      <a
        className='movie__trailer-link'
        href={card.trailerLink}
        target='blank'
        rel='noreferrer'
      >
        <img
          className='movie__pic'
          src={
            location.pathname === '/movies'
              ? `${MOVIE_URL}${card.image.url}`
              : `${card.image}`
          }
          alt='Фильм'
        />
      </a>
      <div className='movie__header'>
        <h2 className='movie__title'>{card.nameRU}</h2>
        <button
          className={`hover-button
          ${savedPage ? 'movie__like-delete' : 'movie__like'} 
          ${liked && !savedPage ? 'movie__like_active' : ''}`}
          type='button'
          aria-label='Сохранить в избранное'
          onClick={savedPage || liked ? handleCardDelete : handleCardLike}
        />
      </div>
      <p className='movie__duration'>{getTimeFromMins(card.duration)}</p>
    </section>
  );
}

export default MoviesCard;
