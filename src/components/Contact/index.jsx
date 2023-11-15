import styles from './index.module.scss';
import ContactSection from '../ContactSection';

const Contact = () => (
  <div className={styles.wrapper}>
    <ContactSection className={styles.title}>
      <div className={styles.lineWrapper}>
        <hr className={styles.line} />
      </div>
      <div className={styles.infowrapper}>
        <div className={styles.textWrapper}>
          <p className={styles.text}>
            You can follow Olga on&nbsp;
            <a
              className={styles.link}
              href="https://www.linkedin.com/company/olgayelchenkoconsulting/about/"
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
              href="https://www.linkedin.com/company/olgayelchenkoconsulting/about/"
              target="_blank"
            >
              Instagram
            </a>
            . Or, send her a note at the address below.
          </p>
        </div>
      </div>
    </ContactSection>
  </div>
);

export default Contact;
