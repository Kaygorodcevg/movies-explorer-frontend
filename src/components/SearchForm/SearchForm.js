import React, { useState } from 'react';

function SearchForm() {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
      };

    return (
      <section className="search-form">

        <form className='search-form__form'>
        <input  type='text' placeholder='Фильм' className="search-form__input" />
        <buttom className="search-form__buttom"></buttom>
        </form>

        <label className='search-form__filter' > 
        <input type="checkbox" className='search-form__checkbox' checked={checked}
          onChange={handleChange} />
          <span className="search-form__checkbox-visible" hidden></span>
        <p className='search-form__filter-name'>Короткометражки</p>
        </label>

      </section>
    );
  }
  
  export default SearchForm;