import React from 'react';
import styles from "./Carousel.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import type {CarouselProps} from "./Carousel.types.ts";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {scaleY} from "../../../anim";

export const Carousel = ({data}: CarouselProps) => {
  const {name, propertyName, isLink, images} = data;
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, dragFree: false});
  const [itemIndex, setItemIndex] = React.useState(1);

  const updateIndex = React.useCallback(() => {
    if (!emblaApi) return;
    setItemIndex(emblaApi.selectedScrollSnap() + 1);
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', updateIndex);
    emblaApi.on('init', updateIndex);

    updateIndex();

    return () => {
      emblaApi.off('select', updateIndex);
      emblaApi.off('init', updateIndex);
    };
  }, [emblaApi, updateIndex]);

  const handlePrev = React.useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi]);

  const handleNext = React.useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }, [emblaApi]);

  return (
    <div className={styles.wrapper}>

      <div className={styles.controllers}>
        <motion.div className={styles.borderRight}
                    variants={scaleY}
                    initial={"initial"}
                    whileInView={"enter"}
                    exit={"exit"}
                    viewport={{once: true, amount: 0.8}}
        />
        <div className={styles.apartment}>
          {isLink ? <Link to="/portfolio">{name} <span>🔗</span></Link> : <p><span>⚫</span>{name}</p>}
          <p>{propertyName}</p>
        </div>

        <div>
          <span>Фото: {`${itemIndex}/${images.length}`}</span>
          <div className={styles.arrows}>
            <button onClick={handlePrev}>⬅</button>
            <button onClick={handleNext}>➡</button>
          </div>
        </div>
      </div>

      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {images.map((el, index) => (
            <div className={styles.emblaSlide} key={index}>
              <div className={styles.emblaSlideNumber}>
                <img src={el.preview} alt="img"/>
                {el.title && (<p>{el.title}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

