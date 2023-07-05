import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { MOVIE_URL } from "../../utils/const";

function MoviesCard({card, onLike, onDelete, liked, savedPage}) {
  const location = useLocation();

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  }

  // const [isLiked, setLike] = useState(false);

  function handleCardLike() {
    onLike(card);
  }

  function handleCardDelete() {
    onDelete(card);
  }
  // const cardLikeButtonClassName = `movie__like hover-button ${
  //   isLiked ? 'movie__like_active' : ''
  // }`;

  return (
    <section className='movie'>
      <img
        className='movie__pic'
        src={
          location.pathname === "/movies"
            ? `${MOVIE_URL}${card.image.url}`
            : `${card.image}`
        }
        alt='Фильм'
      />
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
        {/* {location.pathname === '/movies' ? (
          <button
            className={`movie__like hover-button ${
              liked ? 'movie__like_active' : ''
              }`}
            type='button'
            onClick={handleCardLike}
          ></button>
        ) : (
          <button
            className='movie__like-delete hover-button'
            type='button'
            onClick={handleCardDelete}
          ></button>
        )} */}
      </div>
      <p className='movie__duration'>{getTimeFromMins(card.duration)}</p>
    </section>
  );
}

export default MoviesCard;
