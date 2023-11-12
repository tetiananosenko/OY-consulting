import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/Logo';
import styles from './index.module.scss';

const NavBar = () => (
  <nav className={styles.navigation}>
    <Link to="/" className={styles.logo}>
      <Logo />
      <p className={styles.logoText}>Olga Yelchenko</p>
    </Link>
    <div className={styles.navbar}>
      <Link to="/about" className={styles.listItem}>
        {'About'}
      </Link>
      <Link to="/projects" className={styles.listItem}>
        {'Projects'}
      </Link>
      <Link to="/blog" className={styles.listItem}>
        {'Blog'}
      </Link>
      <Link to="/blog" className={styles.listItem}>
        {'Contact'}
      </Link>
    </div>
  </nav>
);

export default NavBar;
