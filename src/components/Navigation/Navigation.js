import { Link, Route, Routes } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='navigation'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <div className='navigation__link'>
              <Link
                to='signup'
                className='navigation__button navigation__button_signup hover-button'
              >
                Регистрация
              </Link>
              <Link
                to='signin'
                className='navigation__button navigation__button_signin hover-button'
              >
                Войти
              </Link>
            </div>
          }
        ></Route>
      </Routes>
    </nav>
  );
}

export default Navigation;
