import Breadcrumbs from "../../components/BreadCrumbs";
import Footer from "../Footer";
import Topbar from "../TopBar/topbar";

const Layout = ({children, childComponent, showBreadcrumbs = true }) => 
   (
   <>
   <Topbar />
   {childComponent}
   {showBreadcrumbs ? <Breadcrumbs /> : null}
   {children}
   <Footer />
   </>
  );

export default Layout;
