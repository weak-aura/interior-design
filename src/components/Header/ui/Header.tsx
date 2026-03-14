import styles from "./Header.module.scss";
import {AnimatePresence, motion} from "framer-motion";
import {opacity, rotateBottomLine, rotateTopLine} from "../../../anim";
import {Link, useLocation} from "react-router-dom";
import {Nav} from "../../../features/Nav";
import {setIsOpen, setIsMounted} from "../../../redux/features/slices/mainSlice.ts";
import type {RootState} from "../../../redux/store.ts";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks.ts";

export const Header = () => {
  const isOpen = useAppSelector((state: RootState) => state.mainReducer.isOpen);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleMenu = (payload: boolean) => {
    dispatch(setIsOpen(payload))
  }

  const handleLogoNavigation = () => {
    dispatch(setIsMounted(true))
    dispatch(setIsOpen(false))
    
    // Делаю unmount если нахожусь на той же странице 
    if (location.pathname === "/") {
      dispatch(setIsMounted(false))
    }
  }
  
  return (
    <div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className={styles.overlay}
            variants={opacity}
            initial="initial"
            animate="enter"
            exit="exit"
            onClick={() => handleMenu(false)}
          />
        )}
      </AnimatePresence>
      <div className={styles.wrapper}>
        <div className={`${styles.header} container`}>
          <div className={styles.bar}>
            <Link to={"/"} onClick={handleLogoNavigation}>logo</Link>
            <div onClick={() => handleMenu(!isOpen)} className={styles.el}>
              <div className={styles.menu}>
                <div className={styles.burger}>
                  <motion.span className={styles.topLine}
                               variants={rotateTopLine}
                               animate={isOpen ? "enter" : "exit"}
                  />
                  <motion.span className={styles.bottomLine}
                               variants={rotateBottomLine}
                               animate={isOpen ? "enter" : "exit"}
                  />
                </div>
                <div className={styles.label}>
                  <motion.p variants={opacity} animate={!isOpen ? "enter" : "exit"}>меню</motion.p>
                  <motion.p variants={opacity} animate={isOpen ? "enter" : "exit"}>закрыть</motion.p>
                </div>
              </div>
            </div>
            <a className={styles.phoneNumber} href="https://wa.me/77472999242">+7 747 299-9242</a>
          </div>
          <AnimatePresence mode="wait">
            {isOpen && <Nav/>}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
