import { useState } from 'react';
import dataPackages from './data';
import styles from './index.module.scss';

const PackagesSection = () => {
  const [isId, setIsId] = useState(1);

  return (
    <div className={styles.sectionWrapper}>
      <h1 className={styles.title}>Packages</h1>
      <div className={styles.wrapperCards}>
        {dataPackages.map(({ title, info, description, id }) => (
          <div
            onMouseEnter={() => setIsId(id)}
            onMouseLeave={() => setIsId(1)}
            className={isId === id ? styles.active : styles.cardWrapper}
          >
            <div className={styles.itemWrapper}>
              <h1 className={styles.textPackage}>{title}</h1>
              <div className={styles.block}>
                <p className={styles.blockText}>{info}</p>
              </div>
              {Object.values(description).map(item => (
                <p className={styles.text}>{item}</p>
              ))}
              {isId === id && (
                <button className={styles.button}>Get a consultation</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesSection;
