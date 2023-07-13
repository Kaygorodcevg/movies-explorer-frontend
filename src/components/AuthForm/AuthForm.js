import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { REGEX } from '../../utils/const';

function AuthForm({
  name,
  buttonText,
  linkName,
  title,
  subtitle,
  linkTo,
  onSubmit,
  message,
}) {
  const { values, errors, isValid, handleChange } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    name === 'signup'
      ? onSubmit(values.name, values.email, values.password)
      : onSubmit(values.email, values.password);
  }

  return (
    <section className='auth'>
      <Logo />
      <h1 className='auth__title'>{title}</h1>
      <form
        className='auth__form'
        onSubmit={handleSubmit}
      >
        {name === 'signup' && (
          <label className='auth__label'>
            Имя
            <input
              id='name'
              name='name'
              type='text'
              className='auth__input'
              placeholder='Введите имя'
              minLength='2'
              maxLength='50'
              required
              pattern={REGEX}
              value={values.name || ''}
              onChange={handleChange}
            />
            <span className='auth__input-error'>
              {' '}
              {errors.name
                ? `Поле должно быть заполнено и может содержать только латиницу,
                кириллицу, пробел или дефис`
                : ''}
            </span>
          </label>
        )}
        <label className='auth__label'>
          E-mail
          <input
            id='email'
            name='email'
            type='email'
            className='auth__input'
            placeholder='Email'
            minLength='8'
            maxLength='50'
            required
            value={values.email || ''}
            onChange={handleChange}
          />
          <span className='auth__input-error'>{errors.email || ''} </span>
        </label>
        <label className='auth__label'>
          Пароль
          <input
            id='password'
            name='password'
            type='password'
            className='auth__input'
            placeholder='Password'
            minLength='4'
            maxLength='40'
            required
            value={values.password || ''}
            onChange={handleChange}
          />
          <span className='auth__input-error'>{errors.password || ''}</span>
        </label>

        <ErrorMessage {...message} />

        <button
          className={`auth__submit-button ${
            isValid ? 'hover-button' : 'auth__submit-button_disabled'
          }`}
          type='submit'
          disabled={!isValid}
        >
          {buttonText}
        </button>

        <p className='auth__text'>
          {subtitle}
          <Link
            className='auth__link hover-link'
            to={linkTo}
          >
            {linkName}
          </Link>
        </p>
      </form>
    </section>
  );
}

export default AuthForm;
