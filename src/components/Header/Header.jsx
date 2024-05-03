import styles from "./Header.module.scss";
import { useState } from "react";
import HeaderMobile from "./components/HeaderMobile";

export default function Header({ handleFormPage, handleHomePage }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`d-flex align-items-center ${styles.header}`}>
      <div onClick={handleHomePage} className={`${styles.logo}`}></div>
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
        <p className={`${styles.btnNav}`}>Vidéos</p>
        <div className={`${styles.trait}`}></div>
        <p className={`${styles.btnNav}`}>Boutique</p>
        <div className={`${styles.trait}`}></div>
        <p className={`${styles.btnNav}`}>Contact</p>
        <div className={`${styles.trait}`}></div>
        <p onClick={handleFormPage} className={`${styles.btnNav}`}>
          Connexion
        </p>
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
