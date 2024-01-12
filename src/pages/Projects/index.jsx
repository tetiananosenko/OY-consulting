import ProjectCard from '../../components/ProjectCard';
import Layout from '../Layout';
import styles from './index.module.scss';

const Projects = () => {
  return (
  <Layout childComponent={
      <>
      <p className={styles.titleProjects}>Projects</p>
      <div className={styles.lineWrapper}>
        <hr className={styles.line} />
      </div>
      </>
  }>
      <ProjectCard />
    </Layout>
  );
};

export default Projects;