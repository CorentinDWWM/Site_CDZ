import styles from "./Header.module.scss";
import { useState } from "react";
import HeaderMobile from "./components/HeaderMobile";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`d-flex align-items-center ${styles.header}`}>
      <div className={`${styles.logo}`}></div>
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
        <p>Vidéos</p>
        <div className={`${styles.trait}`}></div>
        <p>Boutique</p>
        <div className={`${styles.trait}`}></div>
        <p>Contact</p>
        <div className={`${styles.trait}`}></div>
        <p className={`${styles.connexion}`}>Connexion</p>
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
