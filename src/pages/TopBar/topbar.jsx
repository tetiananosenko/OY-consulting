import NavDesktop from '../../components/NavDesktop';
import NavMobile from '../../components/NavMobile';
import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/Logo';
import styles from './index.module.scss';

const Topbar = () => (
  <>
    <div className={styles.topBarWrapper}>
      <nav className={styles.navigation}>
        <Link to="/" className={styles.logo}>
          <Logo />
          <p className={styles.logoText}>Olga Yelchenko Consulting</p>
        </Link>
      </nav>
      <NavMobile />
      <NavDesktop />
    </div>
  </>
);

export default Topbar;
