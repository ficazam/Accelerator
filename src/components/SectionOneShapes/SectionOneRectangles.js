import React from 'react'

import * as styles from './CSS/SectionOneRectangles.module.css';


// i'm operating under the assumption that this will be either a picture, or a video, in which case it will show as the video 
//    thumbnail. I made these rectangles as placeholders in case that isn't so; however, in the case that it *is* a video or a 
//    picture, I'd simply add the file as either an <img /> tag or a <video /> tag. 
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
