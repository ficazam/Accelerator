import React, { useState } from "react";
//here I would also add the gatsby-plugin-gdpr-cookies plugin, but seeing as this is just a design environment, I opted
//  for keepint the project as small as possible. Instead I just made it so that the entire thing disappears on click of the button.

import * as styles from "./CSS/SectionOneCookies.module.css";

export const SectionOneCookies = () => {
  const [hide, setHide] = useState(false);

  let show = `${styles.cookie_bar}`;

  if (hide) show = `${styles.cookie_bar_hidden}`;

  return (
    <div className={show}>
      <div className={styles.inside}>
        <p className={styles.text}>
          By using this site on the AcceleratorApp network, you agree with our
          use of cookies.
        </p>
        <div className={styles.actions}>
          <button className={styles.button} onClick={() => setHide(!hide)}>
            Accept Cookies
          </button>
          <button className={`${styles.button} ${styles.button_alt}`}>
            Want to know more?
          </button>
        </div>
        <p className={`${styles.text} ${styles.small}`}>
          Read our Cookie Policy
        </p>
      </div>
    </div>
  );
};
