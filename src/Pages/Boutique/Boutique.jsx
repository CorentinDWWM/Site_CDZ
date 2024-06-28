import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Boutique.module.scss";

export default function Boutique() {
  return (
    <>
      <h1>Boutique</h1>
      <hr className={`${styles.separation}`} />
      <div className={`${styles.products}`}>
        <div className={`${styles.article}`}>
          <div className={`${styles.logo}`}></div>
          <div className={`${styles.content}`}>
            <p>1 partie</p>
            <NavLink
              className={`btn btn-secondary ta-center ${styles.btnAchat}`}
              to="/boutique/produit"
            >
              Acheter
            </NavLink>
          </div>
        </div>
        <div className={`${styles.article}`}>
          <div className={`${styles.logo}`}></div>
          <div className={`${styles.content}`}>
            <p>5 parties</p>
            <NavLink
              className={`btn btn-secondary ta-center ${styles.btnAchat}`}
              to="/boutique/produit"
            >
              Acheter
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
