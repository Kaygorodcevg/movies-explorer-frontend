import React, { useState, useEffect } from 'react';

function SearchForm({onSearchClick, shortFilms, onCheckbox }) {
  const [value, setValue] = useState('');

  function handleChangeValue(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearchClick(value);
  } 

  useEffect(() => {
    const input = localStorage.getItem('searchQuery');
    if(input){
      setValue(input);
    }
  }, [])


  return (
    <section className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Фильм'
          className='search-form__input'
          required
          value={value}
          onChange={handleChangeValue}
        />
        <button className='search-form__button hover-button'></button>
      </form>

      <label className='search-form__filter'>
        <input
          type='checkbox'
          name='shortFilms'
          className='search-form__checkbox'
          checked={ shortFilms } 
          onChange={onCheckbox}
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
