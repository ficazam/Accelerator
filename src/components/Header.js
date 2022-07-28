import React, { useState } from "react";
import logo from "../img/download.svg";

import * as styles from "./CSS/Header.module.css";

export const Header = () => {
  const [isActive, setIsActive] = useState(`${styles.nav_list}`)

  const activeSetter = () => {
    if (isActive === `${styles.nav_list}`) {
      setIsActive(`${styles.nav_list} ${styles.active}`)
    }

    if ( isActive === `${styles.nav_list} ${styles.active}`) {
      setIsActive(`${styles.nav_list}`)
    }
  }

  return (
    <nav className={styles.nav_bar}>
      <div className={styles.title}>
        <img src={logo} alt="logo" className={styles.logo} />
        <h3 className={styles.title_text}>AcceleratorApp</h3>
      </div>

      <div className={styles.menu} onClick={activeSetter}>
        <div className={styles.bar} />
        <div className={styles.bar} />
      </div>

      <div className={isActive}>
        <ul>
          <li className={styles.nav_item}>Community</li>
          <li className={styles.nav_item}>Modules</li>
          <li className={styles.nav_item}>Company</li>
          <li className={styles.nav_item}>Pricing</li>
          <li className={`${styles.nav_item} ${styles.button}`}>Sign In</li>
          <li
            className={`${styles.nav_item} ${styles.button} ${styles.button_alt}`}
          >
            Request a Demo
          </li>
        </ul>
      </div>
    </nav>
  );
};
