import styles from './index.module.scss';

const HeaderSection = () => (
  <div className={styles.mainWrapper}>
    <div className={styles.titleWrapper}>
      <p className={styles.title}>OY Consulting</p>
      <p className={styles.text}>
        Olga Yelchenko Consulting, which specializes in B2B networking between
        the U.S. and Ukraine
      </p>
    </div>
    <div className={styles.wrapperItem}>
      <div className={styles.item}>
        <span className={styles.numbers}>230+</span>
        <p className={styles.description}>
          collaborations with colleagues and partners at USUBC
        </p>
      </div>
      <hr width="1" size="81" color="#D0D0D0" />
      <div className={styles.item}>
        <span className={styles.numbers}>20+</span>
        <p className={styles.description}>
          years of experience working with private companies
        </p>
      </div>
      <hr width="1" size="81" color="#D0D0D0" />
      <div className={styles.item}>
        <span className={styles.numbers}>3</span>
        <p className={styles.description}>
          exclusive representation packages for clients
        </p>
      </div>
    </div>
  </div>
);

export default HeaderSection;
