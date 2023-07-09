import { useState, useContext, useEffect } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function Profile({ onSignOut, onUpdateUser, message }) {
  const currentUser = useContext(CurrentUserContext);
  const [isInputActive, setIsInputActive] = useState(false);
  const { values, errors, isValid, handleChange, setValues, setIsValid } =
    useFormAndValidation();

  useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [currentUser, setValues]);

  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsValid(false);
    }
  }, [currentUser, setIsValid, values]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }

  function handleChangeUserInfo() {
    setIsInputActive(true);
  }

  return (
    <main className='profile'>
      <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>

      <form
        className='profile__form'
        onSubmit={handleSubmit}
        message={message}
      >
        <label className='profile__label'>
          Имя
          <input
            id='name'
            name='name'
            pattern='^[A-Za-zА-Яа-яЁё\\-\\s]+$'
            type='text'
            className='profile__input'
            minLength='2'
            maxLength='40'
            required
            value={values.name || ''}
            onChange={handleChange}
            disabled={!isInputActive}
          />
          <span className='profile__input-error'>
            {errors.name
              ? 'Поле должно содержать только латиницу, кириллицу, пробел или дефис'
              : ''}
          </span>
        </label>
        <label className='profile__label'>
          E-mail
          <input
            id='email'
            name='email'
            type='email'
            className='profile__input'
            minLength='4'
            maxLength='40'
            required
            value={values.email || ''}
            onChange={handleChange}
            disabled={!isInputActive}
          />
          <span className='profile__input-error'>{errors.email || ''}</span>
        </label>

        <ErrorMessage {...message} />

        {isInputActive ? (
          <button
            type='submit'
            className={`profile__button profile__button_type_save ${
              isValid ? 'hover-button' : 'auth__submit-button_disabled'
            }`}
            disabled={!isValid}
          >
            Сохранить
          </button>
        ) : (
          <>
            <div className='profile__button-wrapper'>
              <button
                className='profile__button profile__button_type_change hover-button'
                type='button'
                onClick={handleChangeUserInfo}
              >
                Редактировать
              </button>
              <button
                className='profile__button profile__button_type_logout hover-button'
                type='button'
                onClick={onSignOut}
              >
                Выйти из аккаунта
              </button>
            </div>
          </>
        )}
      </form>
    </main>
  );
}

export default Profile;
