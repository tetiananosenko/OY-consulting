import dataDescription from './data';
import styles from './index.module.scss';
import Quotes from '../../assets/svg/Quotes';
import Layout from '../Layout';

const About = () => (
  <Layout childComponent={ <div className={styles.wrapperHeader}>
      <div className={styles.mainWrapper}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>Olga Yelchenko</p>
          <p className={styles.text}>
            Founder and Executive Director of OY Consulting and Culture for
            Ukraine Nonprofit Organization
          </p>
        </div>
      </div>
    </div>}>
    <div className={styles.descriptionWrapper}>
      <div className={styles.textWrapper}>
        <div>
          <p className={styles.textDescription}>
           A true example of a unique Cross-Atlantic citizen, born in Ukraine and educated in the United States of America, Olga spent the 1990s, her essential identity formation years, as a teenager following the work of Pope John Paul II, Mother Teresa and Princess Diana, immensely attracted to their stories and mission to bring peace and prosperity to the world and wellbeing to its citizens. These years set the tone for Olga’s personal philosophy and outlook on life.
          </p>
          <p className={styles.textDescription}>          
          Olga Yelchenko’s career spans over 25 years across diverse roles, as Founder and President of Olga Yelchenko Consulting, Executive Director at the New York Office of the U.S.-Ukraine Business Council, and International Authorized Partner of the Ukrainian Chamber of Commerce and Industry.
          </p>
        </div>
        <div>
          <div className={styles.quotesWrapper}>
            <Quotes />
          </div>
          <p className={styles.quote}>
          I've had the privilege of collaborating with over 240 members and partners of the U.S.-Ukraine Business Council who share a common vision. Together, we aim to strengthen economic and cultural bonds between the U.S.A. and Ukraine.
          </p>
          <p className={styles.author}>- Olga Yelchenko -</p>
        </div>
          {dataDescription.map(({ description }) => (
          <p className={styles.paragraph}>{description}</p>
        ))}
      </div>
    </div>
  </Layout>
);

export default About;
