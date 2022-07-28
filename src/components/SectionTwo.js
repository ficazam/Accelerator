import React from "react";
import { SectionTwoCards } from "./SectionTwoCards/SectionTwoCards";

import * as styles from "./CSS/SectionTwo.module.css";

export const SectionTwo = () => (
  <section className={styles.section_rules}>
    <SectionTwoCards />

    <div className={styles.text}>
      <h6 className={styles.title}>Community</h6>
      <h3  className={styles.large}>Lorem ipsum dolor sit amet</h3>
      <p  className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </section>
);
