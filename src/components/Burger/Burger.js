import React, { useState } from 'react';
import profileLogo from '../../images/profile_icon.png';
import { NavLink } from 'react-router-dom';

function Burger() {
  const [menuActive, setMenuActive] = useState(false);

  function handleClickMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <nav className={`menu ${menuActive ? 'menu__active' : ''}`}>
      <button
        className={
          menuActive
            ? 'burger__btn_close hover-button'
            : 'burger__btn hover-button'
        }
        onClick={handleClickMenu}
      ></button>

      <div
        className={`menu__content ${menuActive ? 'menu__content_open' : ''}`}
      >
        <NavLink
          to='/'
          className='menu__link hover-link'
          onClick={handleClickMenu}
        >
          Главная
        </NavLink>

        <div className='menu__link_type_films'>
          <NavLink
            to='/movies'
            className='films__link hover-link'
            onClick={handleClickMenu}
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className='saved-films__link hover-link'
            onClick={handleClickMenu}
          >
            Сохраненные фильмы
          </NavLink>
        </div>

        <NavLink
          to='/profile'
          className='account__link hover-link'
          onClick={handleClickMenu}
        >
          Аккаунт
          <div className='account__icon_wrapper'>
            <img
              className='account__icon'
              src={profileLogo}
              alt='Логотип'
            ></img>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Burger;
