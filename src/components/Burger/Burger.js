import React, { useState } from 'react';
import profileLogo from '../../images/profile_icon.png';

function Burger() {

    const [menuActive, setMenuActive] = useState(false)

    function handleClickMenu() {
        setMenuActive(!menuActive)
      }

  return (
    <nav className={`menu ${menuActive ? 'menu__active' : ''}`} >
      <button className={menuActive ? 'burger__btn_close' : 'burger__btn'} onClick={handleClickMenu}></button>

      <div className={`menu__content ${menuActive ? 'menu__content_open' : ''}`}>
          <a href='/' className='menu__link'
          onClick={handleClickMenu}>
            Главная
          </a>

          <div className="menu__link_type_films">
          <a href='/movies'className='films__link'
          onClick={handleClickMenu}>
            Фильмы
          </a>
          <a href='/saved-movies'className='saved-films__link'
          onClick={handleClickMenu}>
            Сохраненные фильмы
          </a>
          </div>

          <div className="menu__link_type_profile">
          <a href='/profile' className='profile__link'
          onClick={handleClickMenu}>
            Аккаунт
          </a>
          <img className="profile__icon"  src={profileLogo} alt='Логотип'></img>
          </div>
      </div>

    </nav>
  );
}

export default Burger;
