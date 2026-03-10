import styles from "./WarrantySection.module.scss";
import {motion} from "framer-motion";
import {scaleX} from "../../../anim";

const cardItems = [
  {
    text: "5 лет спокойствия",
    description: "Бережно относимся к каждой детали и даем гарантию 5 лет с авторским надзором",
    src: "images/svg/badge-reward-svgrepo-com.svg"
  },
  {
    text: "Оплата только за результат",
    description: "По факту акта о сдачи-приемки",
    src: "images/svg/credit-card-svgrepo-com.svg"
  },
  {
    text: "Ваш бюджет",
    description: "Возьмем на себя подбор лучших материалов в вашем бюджете",
    src: "images/svg/wallet-svgrepo-com.svg"
  },
  {
    text: "Сложно для нас не существует",
    description: "Мы поможем реализовать ваши самые смелые мечты в ремонте",
    src: "images/svg/atom-svgrepo-com.svg"
  },
  {
    text: "24/7 под контролем",
    description: "Без лишних обещаний и всегда на связи через онлайн систему наблюдения.",
    src: "images/svg/cctv-svgrepo-com.svg"
  },
]

export const WarrantySection = () => {
  return (
    <section className={`container ${styles.wrapper}`}>
      <h1>Ведём проекты целиком командой,<br/> чтобы сохранить качество <br/> на каждом шаге</h1>
      <div className={styles.frame}>
        <p><span>⚫</span>Почему выбирают нас</p>

        <div className={styles.cards}>
          {
            cardItems.map((item, index) => (
              <div key={index} className={styles.card}>

                <div className={styles.inner}>
                  <img src={item.src} alt="icon"/>
                  <div className={styles.caption}>
                    <h4>{item.text}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
                <motion.div className={styles.border}
                            variants={scaleX}
                            initial={"initial"}
                            whileInView={"enter"}
                            viewport={{ once: true, amount: 0.8 }}
                            exit={"exit"}
                />
              </div>
            ))
          }
        </div>

      </div>
    </section>
  );
};