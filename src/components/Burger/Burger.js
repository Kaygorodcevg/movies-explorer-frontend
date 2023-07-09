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
            ? 'menu__burger-btn_close hover-button'
            : 'menu__burger-btn hover-button'
        }
        onClick={handleClickMenu}
      ></button>

      <div
        className={`menu__content ${menuActive ? 'menu__content_open' : ''}`}
      >
        <NavLink
          to='/'
          className={'menu__main hover-link'}
          onClick={handleClickMenu}
        >
          Главная
        </NavLink>

        <div className='menu__films'>
          <NavLink
            to='/movies'
            className={({ isActive }) =>
              isActive
                ? 'menu__link_active menu__films-all hover-link'
                : 'menu__films-all hover-link'
            }
            onClick={handleClickMenu}
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className={({ isActive }) =>
              isActive
                ? 'menu__link_active menu__films-saved hover-link'
                : 'menu__films-saved hover-link'
            }
            onClick={handleClickMenu}
          >
            Сохраненные фильмы
          </NavLink>
        </div>

        <NavLink
          to='/profile'
          className={'menu__account hover-link'}
          onClick={handleClickMenu}
        >
          Аккаунт
          <div className='menu__account-wrapper'>
            <img
              className='menu__account-icon'
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
