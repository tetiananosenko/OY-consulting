import React from 'react';
import styles from './index.module.scss';

const Copyright = () => {

  const year = new Date().getFullYear();

  return  <div className={styles.wrapperSectionReserved}>
          <p className={styles.textReserved}>© 2024 by Olga Yelchenko. All Rights Reserved.</p>
        </div>
};

export default Copyright;
