import arrow from '../../images/arrow.svg';

function Portfolio() {
    return (
      <section className='portfolio'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__projects'>
      <li className='portfolio__project'>
        <p className='portfolio__project_title'>Статичный сайт</p>
        <a className='portfolio__project_link' href='https://github.com/Kaygorodcevg/how-to-learn' target='_blank' rel='noreferrer'>
            <img className='portfolio__project_picture' src={arrow} alt='Ссылка на проект со статичным сайтом'/></a>
      </li>
      <li className='portfolio__project'>
        <p className='portfolio__project_title'>Адаптивный сайт</p>
        <a className='portfolio__project_link' href='https://github.com/Kaygorodcevg/russian-travel' target='_blank' rel='noreferrer'>
            <img className='portfolio__project_picture' src={arrow} alt='Ссылка на проект с адаптивным сайтом'/></a>
      </li>
      <li className='portfolio__project'>
        <p className='portfolio__project_title'>Одностраничное приложение</p>
        <a className='portfolio__project_link ' href='https://github.com/Kaygorodcevg/react-mesto-api-full-gha' target='_blank' rel='noreferrer'>
            <img className='portfolio__project_picture' src={arrow} alt='Ссылка на проект с одностраничным приложением'/>
            </a>
      </li>
    </ul>
      </section>
    );
  }
  
  export default Portfolio;
  