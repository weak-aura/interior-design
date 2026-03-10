import {motion} from "framer-motion";
import {scaleX} from "../../../anim";
import {Carousel} from "../../../components/Carousel";
import styles from "./OurServicesSection.module.scss";
import {services} from "../../../assets/others.ts";


export const OurServicesSection = () => {
  return (
    <section className={`container ${styles.section}`}>
      <h1 className={styles.title}>Дизайн, который подстраивается <br/> под вашу жизнь — не наоборот</h1>
      <div className={styles.row}>
        <motion.div className={styles.borderTop}
                    variants={scaleX}
                    initial={"initial"}
                    whileInView={"enter"}
                    exit={"exit"}
                    viewport={{once: true, amount: 0.8}}
        />
        <Carousel data={services}/>
        <motion.div className={styles.borderBottom}
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