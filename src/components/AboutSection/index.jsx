import { Link } from 'react-router-dom';
import photoOlga from '../../assets/images/about-small-image.png';
import styles from './index.module.scss';

const AboutSection = () => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.textWrapper}>
            <p className={styles.name}>Olga Yelchenko </p>
            <p className={styles.title}>
             Founder and President of Olga Yelchenko Consulting  
            </p>
            <p className={styles.text}>
              “My mission is to showcase Ukraine's potential and achievements as a place to do business,
invest, and visit, as well as to support the Ukrainian people and institutions in their pursuit of democracy, security, and prosperity. I also leverage my own digital platform and
network to communicate and disseminate information and analysis on Ukraine's history, current developments, and future prospects.”
            </p>
          </div>
          <div className={styles.buttonwrapper}>
            <Link to="/about">
              <button className={styles.button}>About me</button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={photoOlga}
            alt="Image Olha Yelchenko"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  </>
);

export default AboutSection;
