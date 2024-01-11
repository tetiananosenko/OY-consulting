import ContactSection from '../../components/ContactCard';
import Layout from '../Layout';
import styles from './index.module.scss';


const Contact = () => (
    <Layout childComponent = {
    <>
      <p className={styles.title}>Contact</p>
      <div className={styles.lineWrapper}>
        <hr className={styles.line} />
      </div>
    </>
    }>
      <div className={styles.wrapper}>
      <div className={styles.infowrapper}>
        <div className={styles.textWrapper}>
          <p className={styles.text}>
            You can follow Olga on&nbsp;
            <a
              className={styles.link}
              href="https://www.facebook.com/people/OY-Consulting/61550272890787/"
              target="_blank"
            >
              Facebook
            </a>
            ,&nbsp;
            <a
              className={styles.link}
              href="https://www.linkedin.com/company/olgayelchenkoconsulting/about/"
              target="_blank"
            >
              LinkedIn
            </a>
            &nbsp;and&nbsp;
            <a
              className={styles.link}
              href="https://www.instagram.com/oyconsulting/"
              target="_blank"
            >
              Instagram
            </a>
            . Or, send her a note at the address below.
          </p>
        </div>
      </div>
      <ContactSection />
      </div>
  </Layout>
);

export default Contact;