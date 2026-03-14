import styles from "./Nav.module.scss";
import {NavLinks} from "../../NavLinks";
import {motion} from "framer-motion";
import {height, opacity} from "../../../anim";
import {links} from "../../../assets/content.ts";
import {useAppSelector} from "../../../redux/hooks.ts";


export const Nav = () => {
  const {isMounted} = useAppSelector(state => state.mainReducer);
  const selectedLink = useAppSelector(state => state.mainReducer.selectedLink);

  return (
    <motion.div className={styles.nav}
                variants={height}
                initial="initial"
                animate="enter"
                exit={isMounted? "none": "exit"}
    >
      {/*<div className={styles.overlay}/>*/}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <NavLinks links={links}/>
          <ul className={styles.footer}>
            <li>Made by: <span>bekzatweb@gmail.com</span></li>
            <li>Typography: <span>Google Fonts</span></li>
            <li>Images: <span>Freepik, Envato</span></li>
          </ul>
        </div>
        <motion.div className={styles.selectedImage} variants={opacity} initial="initial" animate={selectedLink.active ? "enter" : "exit"}>
          <img src={links[selectedLink.index].src} alt="img" className={styles.imageContainer}/>
        </motion.div>
      </div>
    </motion.div>
  );
};