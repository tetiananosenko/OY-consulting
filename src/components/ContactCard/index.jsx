import dataContact from './data';
import styles from './index.module.scss';

const ContactCard = () => {
  return (
    <div className={styles.wrapperSection}>
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

export default ContactCard;
