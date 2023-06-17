import { NavLink } from 'react-router-dom';
import photo from '../../images/fVwssP9qdEk.jpg';

function AboutMe() {
  return (
    <section id = 'student' className='student'>
      <h2 className='student__title'>Студент</h2>

      <div className='about-section'>
        <div className='about-section__text'>
          <h3 className='about-section__title'>Глеб</h3>
          <p className='about-section__subtitle'>
            Фронтенд-разработчик, 29 лет
          </p>
          <p className='about-section__description'>
            Я родился и живу в Перми, закончил химико-технологический факультет.
            Сейчас работаю менеджером ИТ проектов. В ходе работы возник интерес
            самому научится писать код и делать приложения. Больше всего
            привлекла web-разработка из-за ее широкого спектра применения.
          </p>
          <NavLink
            className='about-section__link hover-link'
            to='https://github.com/Kaygorodcevg'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </NavLink>
        </div>

        <div className='about-section__photo-section'>
          <img
            className='about-section__photo'
            src={photo}
            alt='Фото'
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
