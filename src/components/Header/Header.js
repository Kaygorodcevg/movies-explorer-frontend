import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';

function Header({ loggedIn }) {
  return (
    <Routes>
      <Route
        path='*'
        element={<></>}
      />
      <Route
        exact
        path='/'
        element={
          <header className='header'>
            <Logo />
            <Navigation loggedIn={loggedIn} />
          </header>
        }
      ></Route>

      <Route
        exact
        path='/movies'
        element={
          <header className='header'>
            <Logo />
            <Burger />
          </header>
        }
      ></Route>

      <Route
        exact
        path='/saved-movies'
        element={
          <header className='header'>
            <Logo />
            <Burger />
          </header>
        }
      ></Route>

      <Route
        exact
        path='/profile'
        element={
          <header className='header'>
            <Logo />
            <Burger />
          </header>
        }
      ></Route>
    </Routes>
  );
}

// function Header({loggedIn}) {
//   return loggedIn ? (
//     <Routes>
//       <Route
//         path='*'
//         element={<></>}
//       />
//       <Route
//         exact
//         path='/'
//         element={
//           <header className='header'>
//             <Logo />
//             <Navigation loggedIn={loggedIn}/>
//           </header>
//         }
//       ></Route>
//     </Routes>
//   ) : (
//     <Routes>
//       <Route
//         exact
//         path='/movies'
//         element={
//           <header className='header'>
//             <Logo />
//             <Burger />
//           </header>
//         }
//       ></Route>

//       <Route
//         exact
//         path='/saved-movies'
//         element={
//           <header className='header'>
//             <Logo />
//             <Burger />
//           </header>
//         }
//       ></Route>

//       <Route
//         exact
//         path='/profile'
//         element={
//           <header className='header'>
//             <Logo />
//             <Burger />
//           </header>
//         }
//       ></Route>
//     </Routes>
//   );
// }

export default Header;
