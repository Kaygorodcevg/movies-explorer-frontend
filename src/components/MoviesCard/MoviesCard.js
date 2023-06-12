import { useState } from 'react';

function MoviesCard(props) {

    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return `${hours}ч ${minutes}м`;
    };

    const [isLiked, setLike] = useState(false);

    function handleCardLike() {
      setLike(!isLiked);
    }

    const cardLikeButtonClassName = `movie__like ${
        isLiked ? "movie__like_active" : ""
      }`;

    return (
        <section className='movie'>   
          <img className='movie__pic' src={props.card.image} alt='Фильм'/>
            <div className="movie__header">
                <h2 className="movie__title">{props.card.nameRU}</h2>
                <buttom className={cardLikeButtonClassName} onClick={handleCardLike}></buttom>
            </div>
            <p className='movie__duration'>{getTimeFromMins(props.card.duration)}</p>
         </section>
    );
  }
    
  export default MoviesCard;