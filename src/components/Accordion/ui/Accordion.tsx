import styles from "./Accordion.module.scss";
import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {width} from "../../../anim";
import {workProcess} from "../../../assets/others.ts"

export const Accordion = () => {
  const [openIndex, setOpenIndex] = React.useState<number>(0);

  return (
    <div className={styles.wrapper}>
      {
        workProcess.map((el, index) => (
          <div key={index} className={styles.container}>

            <div onClick={() => setOpenIndex(index)} className={styles.label}>
             <p>{el.title}</p>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div className={styles.content}
                            variants={width}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                >
                  <p>{el.description}</p>
                  <img src={el.src} alt="img"/>

                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))
      }
    </div>
  );
};