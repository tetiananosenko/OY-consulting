import styles from  './index.module.scss';
import Facebook from '../../assets/svg/Facebook';
import Instagram from '../../assets/svg/Instagram';
import Linkedin from '../../assets/svg/Linkedin';

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.text}>© 2023 by Olga Yelchenko. All Rights Reserved.</p>
    <div className={styles.iconsWrapper}>
      <Facebook />
      <Linkedin />
      <Instagram />
    </div>
  </footer>
);

export default Footer;