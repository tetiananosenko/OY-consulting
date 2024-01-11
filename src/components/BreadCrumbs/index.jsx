import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";
import dataBlogs from "../BlogsSection/data";
import { useLocation } from "react-router-dom";
import styles from './index.module.scss';

const blogNameById = dataBlogs;

const DynamicUserBreadcrumb = ({ match }) => (
  <span>{blogNameById[match.params.id].title}</span>
);
const routes =  [
  { path: "/blog/:id", breadcrumb: DynamicUserBreadcrumb },
];

const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className={styles.navLink}>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {({ isActive}) => (
          <div className={isActive ? styles.active : styles.default}>
           {match.pathname === '/' ?  undefined :  <span className={styles.greater}>&gt;</span>}
            <span>{breadcrumb}</span>
          </div>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Breadcrumbs;