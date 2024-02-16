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
        {dataDescription.map(({ description }) => (
          <p className={styles.lastPragraph}>{description}</p>
        ))}
        <div className={styles.quoteWrapper}>
          <div className={styles.quotesWrapper}>
            <Quotes />
          </div>
          <p className={styles.quote}>
          I've had the privilege of collaborating with over 240 members and partners of the U.S.-Ukraine Business Council who share a common vision. Together, we aim to strengthen economic and cultural bonds between the U.S.A. and Ukraine.
          </p>
          <p className={styles.author}>- Olga Yelchenko -</p>
        </div>
        <div>
          <p className={styles.textDescription}>
            Olga’s professional trajectory is equally impressive. Parallel to her studies in New York City, Olga began her career in fashion as a model, evolving to become a fashion editor, journalist, stylist and photographer. Olga’s love for fashion continues presently, as she excels in strategizing the promotion of Ukrainian brands in the United States of America, as well as globally. 

          </p>
          <p className={styles.textDescription}>
            As a PR Manager/Journalist at the Ukrainian Chamber of Commerce and Industry, Olga worked in expanding media coverage and communications strategies. Afterward, she held roles as PR Director and Art Curator at the BM Babak-Matveev Fine Art Project and as PR Consultant at Schivo Medical, 
Having established her own company, Olga Yelchenko Consulting, in the beginning of 2022, with its headquarters located in the heart of Fifth Avenue in Manhattan, New York City, the boutique company offers a suite of VIP diplomatic and business services spanning coordination between Ukrainian producers and U.S. buyers, market analysis, and high-level connections with government entities and various organizations. 
Olga’s core mission revolves around showcasing Ukraine’s potential as a vibrant business hub and supporting its democratic journey. Her passion fuels events, projects, and campaigns aimed at highlighting Ukrainian opportunities while fostering dialogue and collaboration across sectors, leveraging digital platforms to disseminate information on Ukraine’s rich history and future.

          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
