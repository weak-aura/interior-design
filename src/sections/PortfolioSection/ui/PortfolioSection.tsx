import styles from "./PortfolioSection.module.scss";
import {Carousel} from "../../../components/Carousel";
import {elite, house, presidentPark} from "../../../assets/portfolio.ts";
import {scaleX} from "../../../anim";
import {motion} from "framer-motion";

export const PortfolioSection = () => {
  return (
    <section className={`container ${styles.section}`}>
      <h1 className={styles.title}>Более 500 проектов,<br/> где каждая деталь имеет <br/> значение</h1>
      <div className={styles.row}>
        <motion.span className={styles.borderTop}
                     variants={scaleX}
                     initial={"initial"}
                     whileInView={"enter"}
                     exit={"exit"}
                     viewport={{once: true, amount: 0.8}}
        />
        <Carousel data={elite}/>
      </div>
      <div className={styles.row}>
        <motion.span className={styles.borderTop}
                     variants={scaleX}
                     initial={"initial"}
                     whileInView={"enter"}
                     exit={"exit"}
                     viewport={{once: true, amount: 0.8}}
        />
        <Carousel data={house}/>
      </div>
      <div className={styles.row}>
        <motion.span className={styles.borderTop}
                     variants={scaleX}
                     initial={"initial"}
                     whileInView={"enter"}
                     exit={"exit"}
                     viewport={{once: true, amount: 0.8}}
        />
        <Carousel data={presidentPark}/>
        <motion.span className={styles.borderBottom}
                     variants={scaleX}
                     initial={"initial"}
                     whileInView={"enter"}
                     exit={"exit"}
                     viewport={{once: true, amount: 0.8}}
        />
      </div>
    </section>
  );
};