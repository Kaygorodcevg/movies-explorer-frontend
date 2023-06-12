import photo from '../../images/fVwssP9qdEk.jpg';

function AboutMe() {
    return (
      <section className='student'>
        <h2 className='student-section__title'>Студент</h2>

        <div className='student__about-section'>

        <div className='student__about-section_text'>
        <h3 className='student__about-section__title'>Глеб</h3>
        <p className='student__about-section__subtitle'>Фронтенд-разработчик, 29 лет</p>
        <p className='student__about-section__description'>Я родился и живу в Перми, закончил химико-технологический факультет. Сейчас работаю менеджером проектов в Лукойле. Основная деятельность связана с реализацией инвестиционных ИТ проектов. В ходе работы возник интерес самому научится писать код и делать приложения. Больше всего привлекла web-разработка из-за ее широкого спектра применения.</p>
        <a className='student__about-section__link' href='https://github.com/Kaygorodcevg' target='_blank' rel='noreferrer'>Github</a>
        </div>

        <div className='student__photo-section'>
          <img className='student__photo-section_photo' src={photo} alt='Фото' />
        </div>
        
        </div>
      </section>
    );
  }
  
  export default AboutMe;
  