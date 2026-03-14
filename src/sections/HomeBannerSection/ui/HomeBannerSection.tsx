import styles from "./HomeBannerSection.module.scss";

export const HomeBannerSection = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.background}>
          <div className={`container ${styles.banner}`}>
            <h1>Современный ремонт для комфортной жизни</h1>
            <p>Создаём эстетичное и функциональное пространство в точности по дизайн-проекту, учитывая ваши
              пожелания.</p>
            <div className={styles.buttonGroup}>
              <button>Получить консультацию</button>
              <button>Проекты</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};