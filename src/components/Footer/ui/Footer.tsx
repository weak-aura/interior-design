import styles from "./Footer.module.scss";
import {links} from "../../../assets/others.ts"
import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.col}>
          <span>logo <img src="/vite.svg" alt="svg"/></span>

          <ul className={styles.nav}>
            {links.map((item, i) => (
              <li key={i}>
                <Link to={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>

          <div className={styles.adress}>
            <p>Алматы, мкр Шугыла</p>
            <p>Почта для связи: bekzatweb@gmail.com</p>
            <p>Резюме: <a href="https://hh.kz/resume/fef411acff0fbcc47d0039ed1f535239413161">HeadHunter</a></p>
          </div>
        </div>
        <p>2026 © Студия дизайна интерьера Vite</p>
      </div>
    </footer>
  );
};