import styles from './NavLinks.module.scss';
import {Link, useLocation} from "react-router-dom";
import {motion} from "framer-motion";
import {blur, translate} from "../../../anim";
import type {NavLinksProps} from "./NavLinks.types.ts";
import type {SelectedLink} from "../../../redux/features/slices/MainSlice.types.ts";
import {setIsOpen, setIsMounted, setSelectedLink} from "../../../redux/features/slices/mainSlice.ts";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks.ts";
import React from "react";

export const NavLinks = ({links}: NavLinksProps) => {

  const dispatch = useAppDispatch();
  const {selectedLink, isMounted} = useAppSelector(state => state.mainReducer);
  const location = useLocation();

  const handleLinkNavigation = (path: string) => {
    dispatch(setIsMounted(true));
    dispatch(setIsOpen(false));

     // Делаю unmount если нахожусь на той же странице 
    if (location.pathname === path) {
      dispatch(setIsMounted(false));
    }
  }

  const handleSelectedLink = (payload: SelectedLink) => {
    dispatch(setSelectedLink(payload));
  }
  
  React.useEffect(() => {
    dispatch(setIsMounted(false));
  },[location.pathname])

  const getChars = (word: string) => {
    return word.split("").map((char, i) => (
      <motion.span
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit={isMounted ? "none" : "exit"}
        key={char + i}
      >
        {char}
      </motion.span>
    ));
  }

  return (
    <div className={styles.navLinks}>
      {
        links.map((el, index) => (
          <Link to={el.href} key={index} onClick={() => handleLinkNavigation(el.href)}>
            <motion.p
              onMouseOver={() => {
                handleSelectedLink({active: true, index})
              }}
              onMouseLeave={() => {
                handleSelectedLink({active: false, index})
              }}
              variants={blur}
              animate={selectedLink.active && selectedLink.index != index ? "enter" : "exit"}
            >
              {getChars(el.title)}</motion.p>

          </Link>
        ))
      }
    </div>
  );
};