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
import { SUCCESS } from '../../utils/const';
import { MOVIE_URL } from '../../utils/const';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';

function App() {
  const [isLoading, setIsLoaging] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    showMessage: false,
    text: '',
    serverCode: SUCCESS,
  });
  const navigate = useNavigate();

  useEffect(() => {
    mainApi
      .getUserInfo()
      .then((data) => {
        setLoggedIn(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);

  const handleUpdateUser = async (email, name) => {
    try {
      const data = await mainApi.updateUserInfo(email, name);
      if (data) {
        setCurrentUser(data);
        setErrorMessage({
          ...errorMessage,
          showMessage: true,
          text: 'Данные успешно обновлены',
        });
      }
    } catch (err) {
      setErrorMessage({
        showMessage: true,
        text: 'При обновлении профиля произошла ошибка',
      });
      console.log(err);
    }
  };

  const handleAutorization = useCallback(
    async (password, email) => {
      try {
        const data = await mainApi.authorize(password, email);
        if (data) {
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      } catch (err) {
        setErrorMessage({
          showMessage: true,
          text: 'Вы ввели неправильный логин или пароль.',
        });
        console.log(err);
      }
    },
    [navigate]
  );

  const handleRegistration = useCallback(
    async (name, email, password) => {
      try {
        const data = await mainApi.register(name, email, password);
        if (data) {
          handleAutorization(data.email, password);
          navigate('/movies', { replace: true });
        }
      } catch (err) {
        setErrorMessage({
          showMessage: true,
          text: 'При регистрации пользователя произошла ошибка.',
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
        localStorage.clear();
        navigate('/', { replace: true });
      }
    } catch (err) {
      console.error(err);
    }
  }, [navigate]);

  function handleSaveMovie(movie) {
    mainApi
      .createMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIE_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `${MOVIE_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      })
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter(
          (card) => card._id !== movie._id
        );
        setSavedMovies(newMoviesList);
      })
      .catch((err) => console.log(err));
  }

  const handleGetAllMovies = useCallback(async () => {
    setIsLoaging(true);
    try {
      const data = await moviesApi.getMovies();
      if (data) {
        return data;
      }
    } catch (err) {
      setIsError(true);
      console.error(err);
    } finally {
      setIsLoaging(false);
    }
  }, []);

  const handleGetOwnerMovies = useCallback(async () => {
    try {
      const data = await mainApi.getOwnerMovies();
      if (data) {
        setSavedMovies(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      handleGetOwnerMovies();
    }
  }, [loggedIn, handleGetOwnerMovies]);

  function resetServerMessages() {
    if (errorMessage.showMessage) {
      setErrorMessage({
        showMessage: true,
        text: '',
        serverCode: SUCCESS,
      });
    }
  }

  return (
    <div
      className='App'
      onClick={errorMessage.showMessage ? resetServerMessages : null}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} />

        <Routes>
          <Route
            path='/'
            element={<Main />}
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                savedMoviesList={savedMovies}
                onLikeClick={handleSaveMovie}
                onDeleteClick={handleDeleteMovie}
                onSearch={handleGetAllMovies}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                list={savedMovies}
                onDeleteClick={handleDeleteMovie}
                isError={isError}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onUpdateUser={handleUpdateUser}
                onSignOut={handleLogout}
                message={errorMessage}
              />
            }
          />
          <Route
            path='/signin'
            element={
              <Login
                message={errorMessage}
                onLogin={handleAutorization}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path='/signup'
            element={
              <Register
                message={errorMessage}
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
