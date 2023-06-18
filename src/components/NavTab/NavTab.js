function NavTab() {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <a
            className='nav__link hover-link'
            href='#about'
          >
            О проекте
          </a>
        </li>
        <li className='nav__item'>
          <a
            className='nav__link hover-link'
            href='#techs'
          >
            Технологии
          </a>
        </li>
        <li className='nav__item'>
          <a
            className='nav__link hover-link'
            href='#student'
          >
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
