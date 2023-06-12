import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';

import { films } from '../../utils/TestFilms';

function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/movies'
          element={
            <Movies
              list={films}
            />
          }
        />
        <Route
          path='/saved-movies'
          element={        
            <SavedMovies
            list={films}
          />}
        />
        <Route
          path='/profile'
          element={<h1>Choto budet</h1>}
        />
        <Route
          path='/signin'
          element={<h1>Choto budet</h1>}
        />
        <Route
          path='/signup'
          element={<h1>Choto budet</h1>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
