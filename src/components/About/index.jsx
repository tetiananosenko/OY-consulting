import dataDescription from './data';
import styles from './index.module.scss';
import Quotes from '../../assets/svg/Quotes';

const About = () => (
  <div>
    <div className={styles.test}>
      <div className={styles.mainWrapper}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>Olga Yelchenko</p>
          <p className={styles.text}>
            Founder and Executive Director of OY Consulting and Culture for
            Ukraine Nonprofit Organization
          </p>
        </div>
      </div>
    </div>
    <div className={styles.descriptionWrapper}>
      <div className={styles.textWrapper}>
        {dataDescription.map(({ description }) => (
          <p className={styles.textDescription}>{description}</p>
        ))}
        <div className={styles.quoteWrapper}>
          <div className={styles.quotesWrapper}>
            <Quotes />
          </div>
          <p className={styles.quote}>
            My mission is showcase Ukraine’s potential and achievements as a
            place to do business, invest, and visit, as well as to support the
            Ukrainian people and institutions in their pursuit of democracy,
            security, and prosperity.
          </p>
          <p className={styles.author}>- Olga Yelchenko -</p>
        </div>
        <div className={styles.missionWrapper}>
          <p className={styles.textDescription}>
            As for now, Olga Yelchenko is in process of registration of her own
            company – Olga Yelchenko LLC. Based in New York, this firm provides
            a bunch of services, including coordination between Ukrainian
            producers and US buyers, analysis of the Ukrainian and US markets,
            connections at the level of Ukrainian government, the Embassy of
            Ukraine in the USA, Consulates of Ukraine in New York, Washington
            D.C., Chicago, San Francisco and Houston as well as the U.S. Chamber
            of Commerce and other NGOs. Additionally, Olga Yelchenko LLC
            specialises in art curating, translation of literature, organization
            of music performances to promote Ukrainian talent across the globe
            and translations, including English, Ukrainian and Russian
            languages.
          </p>
          <p className={styles.textDescription}>
            Olga’s main mission is to showcase Ukraine's potential and
            achievements as a place to do business, invest, and visit, as well
            as to support the Ukrainian people and institutions in their pursuit
            of democracy, security, and prosperity. Passionate about what she
            does, Olga organizes events, projects, and campaigns that highlight
            the opportunities and challenges in Ukraine, as well as by
            facilitating dialogue and collaboration among stakeholders from the
            public and private sectors, the media, the academia, and the civil
            society. She also leverages her own digital platform and network to
            communicate and disseminate information and analysis on Ukraine's
            history, current developments, and future prospects.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
