import React from "react";

import * as styles from "./CSS/SectionOneTriangle.module.css";


// This the triangle that cuts into the background of Section One. I'm assuming this background would be an image file added
//       to the CSS as a simple background image for section one; however, I've detailed it here just in case. 
//      In the case that it *is* a simple image file, I'd simply use the background tag in CSS with an url to the image 
//      in the img folder.


export const SectionOneTriangle = () => {
  return (
      <div className={styles.triangle} />
  );
};
