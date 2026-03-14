import React from "react";
import {reviews} from "../../../assets/content.ts";
import {AnimatePresence, motion} from "framer-motion";
import {expand, rotate, scaleX} from "../../../anim";

import desktopStyles from "./DesktopView.module.scss";
import mobileStyles from "./Mobile.module.scss";
import type {IReviews} from "./Reviews.types.ts";


export const ReviewsSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className={`container ${desktopStyles.section}`}>
      <h1>Мы ценим честность и доверие, поэтому <br/> всегда открыты в общении и цифрах</h1>
      <div className={desktopStyles.wrapper}>
        {
          reviews.map((item, index) => (
            <div key={index}>
              <DesktopView data={item} setOpenIndex={setOpenIndex} openIndex={openIndex} index={index}/>
              <MobileView data={item} setOpenIndex={setOpenIndex} openIndex={openIndex} index={index}/>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export const DesktopView = ({data, index, openIndex, setOpenIndex}: IReviews) => {

  return (
    <div className={desktopStyles.desktopView}>
      <div className={desktopStyles.frame}>
        <motion.div className={desktopStyles.borderTop}
                    variants={scaleX}
                    initial={"initial"}
                    whileInView={"enter"}
                    exit={"exit"}
                    viewport={{once: true, amount: 0.8}}
        />

        <div className={desktopStyles.trigger}
             onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <h4>{data.name}</h4>
          <div className={desktopStyles.triggerEnd}>
            <h4>{data.description}
              <span>
                {
                  [...Array(data.rating).fill(null)].map((_, i) => (
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
            <motion.div className={desktopStyles.content}
                        variants={expand}
                        initial={"initial"}
                        animate={"enter"}
                        exit={"exit"}
            >
              <div className={desktopStyles.leftSide}>
                <img src={data.src} alt="img"/>
                <div className={desktopStyles.leftSideContent}>
                  <p>Площадь:<span>{data.area}</span></p>
                  <p>Срок ремонта:<span>7 месяцев</span></p>
                  <p>Тип здания:<span>Новостройки</span></p>
                </div>
              </div>
              <p>{data.comment}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export const MobileView = ({data, index, openIndex, setOpenIndex}: IReviews) => {

  return (
    <div className={mobileStyles.mobileView}>
      <div className={mobileStyles.frame}>

        <div className={mobileStyles.trigger}
             onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <h4>{data.name}</h4>
          <motion.span variants={rotate}
                       initial={"initial"}
                       animate={openIndex === index ? "enter" : "exit"}
          >➕</motion.span>
        </div>
        <AnimatePresence>
          {openIndex === index && (
            <motion.div className={mobileStyles.content}
                        variants={expand}
                        initial={"initial"}
                        animate={"enter"}
                        exit={"exit"}
            >
              <div>
                <p>Площадь: {data.area}</p>
                <p>Срок ремонта: 7 месяцев</p>
                <p>Тип здания: Новостройка</p>
              </div>
              <img src={data.src} alt="img"/>
              <div className={mobileStyles.rating}>
                {data.description}
                <span>
              {
                [...Array(data.rating).fill(null)].map((_, i) => (
                  <img key={i} src="images/svg/star.svg" alt="svg"/>
                ))
              }
            </span>
              </div>
              <p>{data.comment}</p>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}