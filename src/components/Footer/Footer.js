function Footer() {
    return (
      <section className="footer">
         <h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
         <div className="footer__wrapper">
         <p className='footer__year'> &copy; 2023</p>
         <ul className='footer__links'>
            <li className='footer__item'><a className='footer__link' href='https://praktikum.yandex.ru' target='_blank' rel='noreferrer'>Яндекс.Практикум</a></li>
            <li className='footer__item'><a className='footer__link' href='https://github.com/Kaygorodcevg' target='_blank' rel='noreferrer'>Github</a></li>
          </ul>
         </div>

      </section>
    );
  }
  
  export default Footer;