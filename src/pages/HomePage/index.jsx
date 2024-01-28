
import CustomSwiper from '../../components/CustomSwiper';
import AboutSection from '../../components/AboutSection';
import BlogsSection from '../../components/BlogsSection';
import ContactSection from '../../components/ContactSection';
import HeaderSection from '../../components/HeaderSection';
import PackagesSection from '../../components/PackagesSection';
import ProjectsSection from '../../components/ProjectsSection';
import Layout from '../Layout';

const HomePage = () => (
  <Layout childComponent={<HeaderSection/>} showBreadcrumbs={false}>
    <AboutSection />
    <ProjectsSection />
    <PackagesSection />
    <BlogsSection />
    <ContactSection />
    <CustomSwiper />
 </Layout>
);

export default HomePage;
