import styles from './ContactSection.module.scss';

export const ContactSection = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.wrapper}`}>

        <div className={styles.leftSide}>
          <h2>2 часа — и вы уже знаете стоимость вашего ремонта, возможности и следующий шаг</h2>

          <form className={styles.form}>
            <p>Сяжитесь с вашим менеджером и назначьте встречу с руководителем проекта на вашем объекте!</p>

            <div className={styles.formRow}>
              <input type="text" placeholder='Ваше имя'/>
              <input type="text" placeholder='+7(000)000-00-00'/>
            </div>

            <p>Отправляя форму вы соглашаетесь <a href="#"> политикой конфиденциальности</a></p>
            <button type="button">Связаться с нами</button>
          </form>
        </div>

        <div className={styles.rightSide}>
          <img src="images/portfolio/president_park/1_View15_Post.webp" alt="img"/>
        </div>

      </div>
    </section>
  );
};