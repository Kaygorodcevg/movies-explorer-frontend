import React, { useState, useCallback, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
// import Preloader from '../Preloader/Preloader';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import * as mainApi from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [savedCards, setSavedCards] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);
  // const [isLoading, setLoading] = useState(false);
  // const [preloader, setPreloader] = useState(false);
  const [message, setMessage] = useState({ text: '' });
  const navigate = useNavigate();

  useEffect(() => {
    mainApi.getUserInfo()
      .then(data => {
        setLoggedIn(true);
        setCurrentUser(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [loggedIn]);


  const handleAutorization = useCallback(
    async (password, email) => {
      try {
        const data = await mainApi.authorize(password, email);
        if (data) {
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      } catch (err) {
        setMessage({
          text: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
        console.log(err);
      }
    },
    [navigate]
  );

  const handleRegistration = useCallback(
    async (email, password, name) => {
      try {
        const data = await mainApi.register(email, password, name);
        if (data) {
          handleAutorization(password, data.email );
          navigate('/movies', { replace: true });
        }
      } catch (err) {
        setMessage({
          text: 'Что-то пошло не так! Попробуйте ещё раз.',
        });
        console.log(err);
      }
    },
    [handleAutorization, navigate]
  );

  const handleLogout = useCallback(async () => {
    try {
      const data = await mainApi.signOut();
      if (data) {
        setLoggedIn(false);
        setCurrentUser({});
        navigate('/', { replace: true });
      }
    } catch (err) {
      console.error(err);
    }
  }, [navigate]);

  const handleUpdateUser = async (email, name) => {
    try {
      const data = await mainApi.updateUserInfo(email, name);
      if (data) {
        setCurrentUser(data);
      }
    } catch (err) {
      setMessage({
        text: 'Что-то пошло не так! Попробуйте ещё раз.',
      });
    }
  };

  // useEffect(() => {
  //   if (loggedIn) {
  //     mainApi
  //       .getOwnerMovies()
  //       .then((data) => {
  //         setSavedCards(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [loggedIn]);

    // preloader ? (
  //   <Preloader />
  // ) : 

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} />

        <Routes>
          <Route
            path='/'
            exact
            element={<Main />}
          />

          <Route
            path='/movies'
            // element={<Movies movies={movies} onSearch={handleGetAllMovies}/>}
            element={<Movies />}
            // element={
            //   <ProtectedRoute
            //     element={Movies}
            //     onSearch={handleGetAllMovies}
            //     loggedIn={loggedIn}
            //   />
            // }
          />
          <Route
            path='/saved-movies'     element={<SavedMovies />}
            // element={
            //   <ProtectedRoute
            //     element={SavedMovies}
            //     cards={savedCards}
            //     loggedIn={loggedIn}
            //   />
            // }
          />
          <Route
            path='/profile'
            element={<Profile />}
            // element={
            //   <ProtectedRoute
            //     element={Profile}
            //     onUpdateUser={handleUpdateUser}
            //     loggedIn={loggedIn}
            //     onLogout={handleLogout}
            //     message={message}
            //     // setMessage={setMessage}
            //   />
            // }
          />
          <Route
            path='/signin'
            element={
              <Login
                message={message}
                // setMessage={setMessage}
                onLogin={handleAutorization}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path='/signup'
            element={
              <Register
                message={message}
                // setMessage={setMessage}
                onRegister={handleRegistration}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>

        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
