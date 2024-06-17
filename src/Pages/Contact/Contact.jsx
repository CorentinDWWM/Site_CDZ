import React from "react";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <>
      <h1 className="mt-70">Contact</h1>
      <hr className={`${styles.separation}`} />
      <div className={`d-flex flex-column align-items-center ${styles.box}`}>
        <p className={`${styles.contact_text}`}>
          Pour tout renseignement ou problème, veuillez me contacter sur l’un de
          ces trois réseaux :
        </p>
        <div
          style={{ width: "100%", height: "400px" }}
          className="d-flex flex-column align-items-center"
        >
          <div
            style={{ width: "90%", marginTop: "20px" }}
            className="d-flex jc-between"
          >
            <div
              className={`d-flex jc-evenly align-items-center ${styles.btnNav}`}
            >
              <i className={`fa-brands fa-discord ${styles.icon}`}></i>
              <p className={`${styles.rs_name}`}>Discord</p>
            </div>
            <div
              className={`d-flex jc-evenly align-items-center ${styles.btnNav}`}
            >
              <i className={`fa-brands fa-x-twitter ${styles.icon}`}></i>
              <p className={`${styles.rs_name}`}>X</p>
            </div>
          </div>
          <div
            style={{ width: "90%", marginTop: "20px" }}
            className="d-flex justify-content-center"
          >
            <div
              style={{ marginTop: "30px" }}
              className={`d-flex jc-evenly align-items-center ${styles.btnNav}`}
            >
              <i className={`fa-brands fa-instagram ${styles.icon}`}></i>
              <p className={`${styles.rs_name}`}>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
