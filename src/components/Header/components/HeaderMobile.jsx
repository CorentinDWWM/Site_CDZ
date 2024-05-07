import { NavLink } from "react-router-dom";
import styles from "./HeaderMobile.module.scss";

export default function HeaderMobile({ setShowMenu }) {
  return (
    <>
      <ul className={`d-flex flex-column p-20 ${styles.container}`}>
        <i
          onClick={() => setShowMenu(false)}
          className=" d-flex flex-column align-items-end fa-solid fa-xmark"
        ></i>
        <a
          onClick={() => setShowMenu(false)}
          href="https://chevaliers-du-zodiaque-uhc.gitbook.io/chevaliers-du-zodiaque-uhc"
          target="_blank"
          className={`${styles.btnNav}`}
        >
          Docs
        </a>
        <NavLink
          onClick={() => setShowMenu(false)}
          to="/videos"
          className={`${styles.btnNav}`}
        >
          Vidéos
        </NavLink>
        <NavLink
          onClick={() => setShowMenu(false)}
          to="/boutique"
          className={`${styles.btnNav}`}
        >
          Boutique
        </NavLink>
        <NavLink
          onClick={() => setShowMenu(false)}
          to="/contact"
          className={`${styles.btnNav}`}
        >
          Contact
        </NavLink>
        <NavLink
          onClick={() => setShowMenu(false)}
          to="/login"
          className={`${styles.btnNav}`}
        >
          Connexion
        </NavLink>
      </ul>
    </>
  );
}
