import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';

function Header() {
  return (
    <Routes>
      <Route
        exact
        path='/'
        element={
          <section className='header'>
            <Logo />
            <Navigation />
          </section>
        }
      ></Route>

      <Route
        exact
        path='/movies/*'
        element={
          <section className='header'>
            <Logo />
            <Burger />
          </section>
        }
      ></Route>

      <Route
        exact
        path='/saved-movies/*'
        element={
          <section className='header'>
            <Logo />
            <Burger />
          </section>
        }
      ></Route>

      <Route
        exact
        path='/profile'
        element={
          <section className='header'>
            <Logo />
            <Burger />
          </section>
        }
      ></Route>
    </Routes>
  );
}

export default Header;
