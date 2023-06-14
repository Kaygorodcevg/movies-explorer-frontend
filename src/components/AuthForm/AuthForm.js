import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function AuthForm({ link, buttonText, linkName, title, subtitle, isValid, linkTo, ...props }) {
  return (
    <section className='auth'>
      <Logo />
      <h1 className='auth__title'>{title}</h1>
      <form
        className='auth__form'
      >
         <>{props.children}</>
        <label className='auth__label'>E-mail
          <input
            id='email'
            name='email'
            type='email'
            className='auth__input'
            placeholder='Email'
            minLength='8'
            maxLength='40'
            required
            // value={email}
            // onChange={handleChange}
          />
          <span className='auth__input-error'></span>
        </label>
        <label className='auth__label'>Пароль
          <input
            id='password'
            name='password'
            type='password'
            className='auth__input'
            placeholder='Password'
            minLength='4'
            maxLength='40'
            required
            // value={password}
            // onChange={handleChange}
          />
          <span className='auth__input-error'>Что-то пошло не так...</span>
        </label>
      </form>

   {/* временное решение для тестирования  */}
    <button className='auth__submit-button'
          type="submit">
               <Link
          className='auth__button-link'
          to={linkTo}
        >{buttonText}
        </Link>
          </button>

      <p className='auth__text'>
      {subtitle}
        <Link
          className='auth__link'
          to={link}
        >
        {linkName}
        </Link>
      </p>
    </section>
  );
}

export default AuthForm;
