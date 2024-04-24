import styles from "./HeaderMobile.module.scss";

export default function HeaderMobile({ setShowMenu }) {
  return (
    <>
      <ul className={`p-20 ${styles.container}`}>
        <i
          onClick={() => setShowMenu(false)}
          className=" d-flex flex-column align-items-end fa-solid fa-xmark"
        ></i>
        <p className={`${styles.docs}`}>
          <a
            href="https://chevaliers-du-zodiaque-uhc.gitbook.io/chevaliers-du-zodiaque-uhc"
            target="_blank"
            className="link"
          >
            Docs
          </a>
        </p>
        <p>Vidéos</p>
        <p>Boutique</p>
        <p>Contact</p>
        <p className={`${styles.connexion}`}>Connexion</p>
      </ul>
    </>
  );
}
