import { Link} from 'react-router-dom';
import Burger from '../Burger/Burger';

function Navigation({ loggedIn }) {
  return loggedIn ? ( <Burger loggedIn={loggedIn} />) :
  (
    <nav className='navigation'>
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
    </nav>
  );
}

export default Navigation;
