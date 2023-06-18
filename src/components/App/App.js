import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

import { films } from '../../utils/TestFilms';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function App() {

  const [currentUser, setCurrentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='App'>
      <Header />

      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/movies'
          element={<Movies list={films} />}
        />
        <Route
          path='/saved-movies'
          element={<SavedMovies list={films} />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='/signin'
          element={<Login />}
        />
        <Route
          path='/signup'
          element={<Register />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
