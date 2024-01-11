import { Link } from 'react-router-dom';
import routes from '../../pages/TopBar/routes';
import styles from './index.module.scss';

const NavDesktop = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navbar}>
        {routes.map(route => {
          const { href, title } = route;
          return (
            <Link to={href} className={styles.listItem}>
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavDesktop;
