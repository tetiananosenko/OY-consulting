import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";
import dataBlogs from "../BlogsSection/data";
import { useLocation } from "react-router-dom";

const blogNameById = dataBlogs;

const DynamicUserBreadcrumb = ({ match }) => (
  <span>{blogNameById[match.params.id].title}</span>
);
const routes =  [
  { path: "/blogs/:id", breadcrumb: DynamicUserBreadcrumb },
];

const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(routes);
  
if(location.pathname === '/') {
  return
}

  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          <span>{match.pathname == '/' ? '' : '>'}</span>
          {breadcrumb}
        </NavLink>
      ))}
    </>
  );
};

export default Breadcrumbs;