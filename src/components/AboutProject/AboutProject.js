function AboutProject() {
  return (
    <section className='about'>
      <h2 className='about__title'>О проекте</h2>

      <div
        id='about'
        className='about__project'
      >
        <div className='about__project_description'>
          <h3 className='about__project_title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about__project_text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        <div className='about__project_description'>
          <h3 className='about__project_title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about__project_text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className='about__timeline'>
        <p className='about__line-segment about__line-segment_type_short'>
          1 неделя
        </p>
        <p className='about__line-segment about__line-segment_type_long'>
          4 недели
        </p>
        <p className='about__line-segment__dev'>Back-end</p>
        <p className='about__line-segment__dev'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
