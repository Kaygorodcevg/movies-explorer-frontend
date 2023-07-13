import React, { useEffect } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function SearchForm({ onSearchClick, shortFilms, onCheckbox, savedFilmsPage }) {
  const { values, errors, isValid, handleChange, setValues, setIsValid } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSearchClick(values.search);
  }

  useEffect(() => {
    if (!savedFilmsPage) {
      const input = localStorage.getItem('moviesSearchQuery');
      if (input) {
        setValues({ search: input });
        setIsValid(true);
      } else if (savedFilmsPage) {
        setValues({ search: input});
        setIsValid(true);
      }
    }
  }, [savedFilmsPage, setIsValid, setValues]);

  return (
    <section className='search-form'>
      <form
        className='search-form__form'
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type='text'
          placeholder='Фильм'
          name='search'
          className='search-form__input'
          required
          value={values.search || ''}
          onChange={handleChange}
        />
        <span className='search-form__error'>
          { errors.search ? 'Нужно ввести ключевое слово' : ''}
        </span>
        <button
          disabled={!isValid}
          className={`search-form__button ${
            isValid ? 'hover-button' : 'auth__submit-button_disabled'
          }`}
        ></button>
      </form>

      <label className='search-form__filter'>
        <input
          type='checkbox'
          name='shortFilms'
          id='checkbox'
          className='search-form__checkbox'
          checked={onCheckbox}
          onChange={(evt) => shortFilms(evt.target.checked)}
        />
        <span
          className='search-form__checkbox-visible'
          hidden
        ></span>
        <p className='search-form__filter-name'>Короткометражки</p>
      </label>
    </section>
  );
}

export default SearchForm;
