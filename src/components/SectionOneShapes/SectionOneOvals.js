import React from 'react'

import * as styles from "./CSS/SectionOneOvals.module.css";


// These are the ovals in the background of Section One. I'm assuming this background would be an image file added to the CSS
//      as a simply background image for section one; however, as the figma file was given with each oval detailed, 
//      I've also detailed them here. In the case that it *is* a simple image file, I'd simply use the background tag in 
//      CSS with an url to the image in the img folder.


export const SectionOneOvals = () => {
  return (
    <div>
      <div className={`${styles.oval} ${styles.oval_one}`} />
      <div className={`${styles.oval} ${styles.oval_two}`} />
      <div className={`${styles.oval} ${styles.oval_three}`} />
      <div className={`${styles.oval} ${styles.oval_four}`} />
      <div className={`${styles.oval} ${styles.oval_five}`} />
      <div className={`${styles.oval} ${styles.oval_six}`} />
      <div className={`${styles.oval} ${styles.oval_seven}`} />
      <div className={`${styles.oval} ${styles.oval_eight}`} />
      <div className={`${styles.oval} ${styles.oval_nine}`} />
      <div className={`${styles.oval} ${styles.oval_ten}`} />
      <div className={`${styles.oval} ${styles.oval_eleven}`} />
      <div className={`${styles.oval} ${styles.oval_twelve}`} />
      <div className={`${styles.oval} ${styles.oval_thirteen}`} />
      <div className={`${styles.oval} ${styles.oval_fourteen}`} />
      <div className={`${styles.oval} ${styles.oval_fifteen}`} />
      <div className={`${styles.oval} ${styles.oval_sixteen}`} />
      <div className={`${styles.oval} ${styles.oval_seventeen}`} />
      <div className={`${styles.oval} ${styles.oval_eighteen}`} />
      <div className={`${styles.oval} ${styles.oval_nineteen}`} />
    </div>
  )
}
