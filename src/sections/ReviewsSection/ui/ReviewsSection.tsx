import styles from './ReviewsSection.module.scss';
import {reviews} from "../../../assets/others.ts";
import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {expand, rotate, scaleX} from "../../../anim";


export const ReviewsSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className={`container ${styles.section}`}>
      <h1>Мы ценим честность и доверие, поэтому <br/> всегда открыты в общении и цифрах</h1>
      <div className={styles.wrapper}>
        {
          reviews.map((item, index) => (
            <div key={index} className={styles.frame}>
              <motion.div className={styles.borderTop}
                          variants={scaleX}
                          initial={"initial"}
                          whileInView={"enter"}
                          exit={"exit"}
                          viewport={{once: true, amount: 0.8}}
              />
              <div className={styles.trigger}
                   onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h4>{item.name}</h4>
                <div className={styles.triggerEnd}>
                  <h4>{item.description}
                    <span>
                         {
                           [...Array(item.rating).fill(null)].map((_, i) => (
                             <img key={i} src="images/svg/star.svg" alt="svg"/>
                           ))
                         }
                      </span>
                  </h4>
                  <motion.span variants={rotate}
                               animate={openIndex === index ? "enter" : "initial"}
                  >➕
                  </motion.span>
                </div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div className={styles.content}
                              variants={expand}
                              initial={"initial"}
                              animate={"enter"}
                              exit={"exit"}
                  >
                    <div className={styles.leftSide}>
                      <img src={item.src} alt="img"/>
                      <p>some text</p>
                    </div>
                    <p>{item.comment}</p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))
        }
      </div>
    </section>
  );
};