import ProjectCard from '../ProjectCard';
import styles from './index.module.scss';

const ProjectsSection = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.titleProjects}>Projects</h1>
      <ProjectCard />
    </div>
  );
};

export default ProjectsSection;
