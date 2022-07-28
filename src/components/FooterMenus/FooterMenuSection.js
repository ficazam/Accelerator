import React from "react";
import { data, flw } from "../../store/data";

import * as styles from "./CSS/FooterMenuSection.module.css";

export const FooterMenuSection = () => (
  <>
    <section className={styles.section_rules}>
      {data.map((menu) => (
        <div className={styles.menu_section} key={menu.title}>
          <h3>
            {menu.title}
          </h3>
          <div className={styles.separator} />
          <div className={styles.menu}>
            {menu.values.map((val) => (
                <p key={val} className={styles.menu_items}>{val}</p>
            ))}
          </div>
        </div>
      ))}
      {flw.map((menu) => (
        <div className={styles.menu_section}  key={menu.title}>
          <h3 className={styles.section_title}>
            {menu.title}
          </h3>
          <div className={`${styles.separator} ${styles.img_separator}`} />
          <div className={styles.menu_pics}>
            {menu.values.map((val) => (
                <img key={Math.random() * 10} src={val} alt='follow' className={styles.images} />
            ))}
          </div>
        </div>
      ))}
    </section>
  </>
);
