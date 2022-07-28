import React from 'react'

import * as styles from './CSS/SectionTwoCards.module.css';

import Pie from '../../img/Pie.png';
import Startup from '../../img/Startup.png';
import Pieces from '../../img/Pieces.png';
import Pages from '../../img/Pages.png';
import Stocks from '../../img/Stocks.png';

export const SectionTwoCards = () => {
  return (
    <div>
      <div className={`${styles.card} ${styles.card_one}`} >
        <img src={Pie} alt="Pie" className={styles.card_image} />
      </div>

      <div className={`${styles.card} ${styles.card_two}`} >
        <img src={Startup} alt="Startup" className={styles.card_image} />
      </div>

      <div className={`${styles.card} ${styles.card_three}`} >
        <img src={Pieces} alt="Pieces" className={styles.card_image} />
      </div>

      <div className={`${styles.card} ${styles.card_four}`} >
        <img src={Pages} alt="Pages" className={styles.card_image}  />
      </div>

      <div className={`${styles.card} ${styles.card_five}`} >
        <img src={Stocks} alt="Stocks" className={styles.card_image}  />
      </div>
    </div>
  )
}
