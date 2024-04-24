import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`d-flex align-items-center ${styles.footer}`}>
      <div className={`d-flex jc-evenly align-items-center ${styles.btnNav}`}>
        <i className={`fa-brands fa-discord ${styles.icon}`}></i>
        <p>Discord</p>
      </div>
      <div className={`d-flex jc-evenly align-items-center ${styles.btnNav}`}>
        <i className={`fa-brands fa-x-twitter ${styles.icon}`}></i>
        <p> X </p>
      </div>
      <div className={`d-flex jc-evenly align-items-center ${styles.btnNav}`}>
        <i className={`fa-brands fa-instagram ${styles.icon}`}></i>
        <p>Instagram</p>
      </div>
    </footer>
  );
}
