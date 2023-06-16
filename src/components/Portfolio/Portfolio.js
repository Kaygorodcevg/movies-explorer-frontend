import { NavLink } from 'react-router-dom';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__projects'>
        <li className='portfolio__project'>
          <p className='portfolio__project_title'>Статичный сайт</p>
          <NavLink
            className='portfolio__project_link'
            to='https://github.com/Kaygorodcevg/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='portfolio__project_picture hover-link'
              src={arrow}
              alt='Ссылка на проект со статичным сайтом'
            />
          </NavLink>
        </li>
        <li className='portfolio__project'>
          <p className='portfolio__project_title'>Адаптивный сайт</p>
          <NavLink
            className='portfolio__project_link'
            to='https://github.com/Kaygorodcevg/russian-travel'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='portfolio__project_picture hover-link'
              src={arrow}
              alt='Ссылка на проект с адаптивным сайтом'
            />
          </NavLink>
        </li>
        <li className='portfolio__project'>
          <p className='portfolio__project_title'>Одностраничное приложение</p>
          <NavLink
            className='portfolio__project_link '
            to='https://github.com/Kaygorodcevg/react-mesto-api-full-gha'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='portfolio__project_picture hover-link'
              src={arrow}
              alt='Ссылка на проект с одностраничным приложением'
            />
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
