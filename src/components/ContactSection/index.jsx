import ContactCard from '../ContactCard';
import styles from './index.module.scss';

const ContactSection = () => {
  return (
<>
  <h1 className={styles.title}>Contact</h1>
  <ContactCard />
  </>
  );
};

export default ContactSection;