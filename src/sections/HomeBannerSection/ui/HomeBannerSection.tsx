import styles from "./HomeBannerSection.module.scss";

export const HomeBannerSection = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <img src={`/images/promo.webp`} alt="img"/>
        <div className={styles.banner}>
          <h1>Современный ремонт для комфортной жизни</h1>
          <p>Создаём эстетичное и функциональное пространство в точности по дизайн-проекту, учитывая ваши
            пожелания.</p>
          <div className={styles.buttonGroup}>
            <button>Получить консультацию</button>
            <button>Проекты</button>
          </div>
        </div>
      </div>
    </section>
  );
};