import React from "react";

import { FooterMenuSection } from "./FooterMenus/FooterMenuSection";

import language from "../img/Web Icon-01.png";
import arrow from "../img/arrow.png";
import * as styles from "./CSS/Footer.module.css";

export const Footer = () => {
  console.log(language);
  return (
    <div className={styles.section_rules}>
      <div className={styles.header}>
        <h1 className={styles.title}>Join our growing community</h1>
        <p className={styles.desc}>
          Sign up for news and updates about AcceleratorApp
        </p>
        <input type="email" placeholder="Your email" className={styles.input} />
        <img src={arrow} alt="arrow" className={styles.button} />
      </div>

      <FooterMenuSection />

      <div className={styles.separator} />

      <section className={styles.under_menu}>
        <ul className={styles.menu_two}>
          <li className={styles.menu_item}>Privacy</li>
          <li className={styles.menu_item}>Cookies</li>
          <li className={styles.menu_item}>Terms of Use</li>
          <li className={styles.menu_item}>DPA</li>
          <li className={styles.menu_item}>Subprocessors</li>
        </ul>

        <div className={styles.menu_three}>
          <div className={styles.copyright}>
            <p>Copyright © 2022 AcceleratorApp All Rights Reserved</p>
          </div>

          <div className={styles.separator_vert} />

          <div className={styles.language}>
            <img src={language} alt="language" className={styles.img} />
            <p className={styles.lang_desc}>English</p>
          </div>
        </div>
      </section>
    </div>
  );
};
