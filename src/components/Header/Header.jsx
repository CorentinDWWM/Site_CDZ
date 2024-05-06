import styles from "./Header.module.scss";
import { useState } from "react";
import HeaderMobile from "./components/HeaderMobile";
import { NavLink } from "react-router-dom";

export default function Header({ handleFormPage, handleHomePage }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`d-flex align-items-center ${styles.header}`}>
      <NavLink to="/" className={`${styles.logo}`}></NavLink>
      <nav className={`d-flex jc-around align-items-center ${styles.navBar}`}>
        <p className={`${styles.docs}`}>
          <a
            href="https://chevaliers-du-zodiaque-uhc.gitbook.io/chevaliers-du-zodiaque-uhc"
            target="_blank"
            className="link"
          >
            Docs
          </a>
        </p>
        <div className={`${styles.trait}`}></div>
        <NavLink to="/videos" className={`${styles.btnNav}`}>
          Vidéos
        </NavLink>
        <div className={`${styles.trait}`}></div>
        <NavLink to="/boutique" className={`${styles.btnNav}`}>
          Boutique
        </NavLink>
        <div className={`${styles.trait}`}></div>
        <NavLink to="/contact" className={`${styles.btnNav}`}>
          Contact
        </NavLink>
        <div className={`${styles.trait}`}></div>
        <NavLink to="/login" className={`${styles.btnNav}`}>
          Connexion
        </NavLink>
      </nav>
      <i
        onClick={() => setShowMenu(true)}
        className={`fas fa-bars mr-10 ${styles.mobileHeader}`}
      ></i>
      {showMenu && (
        <>
          <HeaderMobile setShowMenu={setShowMenu} />
        </>
      )}
    </header>
  );
}
