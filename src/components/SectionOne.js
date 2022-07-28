import React from "react";

import * as styles from "./CSS/SectionOne.module.css";
import { SectionOneOvals } from "./SectionOneShapes/SectionOneOvals";
import { SectionOneRectangles } from "./SectionOneShapes/SectionOneRectangles";
import { SectionOneTriangle } from "./SectionOneShapes/SectionOneTriangle";

export const SectionOne = () => (
  <section className={styles.section_rules}>
    <div className={styles.description}>
      <h3 className={styles.cta}>Join in and connect </h3>
      <h1 className={styles.title}>To faster your innovation potential</h1>
      <p className={styles.para}>
        AcceleratorApp Innovation Community — Tools and community to facilitate
        innovation between all members of our community
      </p>
      <button className={styles.button}>Schedule a Demo</button>
    </div>

    <button className={`${styles.button} ${styles.button_alt}`}>Watch Video</button>

    <SectionOneOvals />
    <SectionOneRectangles />
    <SectionOneTriangle />
  </section>
);
