import React from 'react'

import * as styles from './CSS/SectionOneRectangles.module.css';

export const SectionOneRectangles = () => {
  return (
    <div>
        <div className={`${styles.rectangle} ${styles.rectangle_one}`} />
        <div className={`${styles.rectangle} ${styles.rectangle_two}`} />
        <div className={`${styles.rectangle} ${styles.rectangle_three}`} />
        <div className={`${styles.rectangle} ${styles.rectangle_four}`} />
        <div className={`${styles.rectangle} ${styles.rectangle_five}`} />
    </div>
  )
}
