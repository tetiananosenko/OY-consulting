import dataContact from './data';
import styles from './index.module.scss';

const ContactSection = ({children, className}) => {
  return (
    <div className={styles.wrapperSection}>
      {<h1 className={className ? className : styles.title}>Contact</h1>}
      {children}
      <div className={styles.wrapperContact}>
        {dataContact.map(({ icon, info }) => (
          <div className={styles.itemWrapper}>
            <span>{icon}</span>
            <p className={styles.text}>{info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
