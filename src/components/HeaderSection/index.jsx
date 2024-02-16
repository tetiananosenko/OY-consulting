import styles from './index.module.scss';

const HeaderSection = () => (
  <div className={styles.mainWrapper}>
    <div className={styles.titleWrapper}>
      <p className={styles.title}>OY Consulting</p>
      <p className={styles.text}>
       YOUR KEY TO THE Ukrainian-American Dream
      </p>
    </div>
    <div className={styles.wrapperItem}>
      <div className={styles.item}>
        <span className={styles.numbers}>10,000+</span>
        <p className={styles.description}>
          contacts (VIP mailing list) across Europe and the United States of America
        </p>
      </div>
      <hr width="1" size="81" color="#D0D0D0" />
      <div className={styles.item}>
        <span className={styles.numbers}>25+</span>
        <p className={styles.description}>
          years of professional experience in the public & private sectors internationally
        </p>
      </div>
      <hr width="1" size="81" color="#D0D0D0" />
      <div className={styles.item}>
        <span className={styles.numbers}>30+</span>
        <p className={styles.description}>
         exclusively catered representation packages for clients
        </p>
      </div>
    </div>
  </div>
);

export default HeaderSection;
