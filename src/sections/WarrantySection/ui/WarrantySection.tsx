import styles from "./WarrantySection.module.scss";
import {motion} from "framer-motion";
import {scaleX} from "../../../anim";
import {cardItems} from "../../../assets/content.ts";



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