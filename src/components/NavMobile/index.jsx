import { useClickAway } from 'react-use';
import { useRef } from 'react';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import routes from '../../pages/TopBar/routes';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className={styles.componentWrapper}>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div className={styles.titleWrapper}>
          {routes.map(route => {
            return (
              <Link
                onClick={() => setOpen(prev => !prev)}
                to={route.href}
                key={route.title}
                className={styles.wrapperItem}
              >
                <span className={styles.title}>{route.title}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavMobile;
