import { Link, Route, Routes } from 'react-router-dom';
import Burger from '../Burger/Burger';

function Navigation() {
  return (
    <section className='navigation'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <div className='navigation__link'>
              <Link
                to='/sign-up'
                className='navigation__button navigation__button_signup'
              >
                Регистрация
              </Link>
              <Link
                to='/sign-in'
                className='navigation__button navigation__button_signin'
              >
                Войти
              </Link>
            </div>
          }
        ></Route>

        <Route
          exact
          path='/movies'
          element={<Burger />}
        ></Route>

        <Route
          exact
          path='/saved-movies'
          element={<Burger />}
        ></Route>
      </Routes>
    </section>
  );
}

export default Navigation;
