import { Link } from 'react-router-dom';
import dataProjects from './data';
import styles from './index.module.scss';

const ProjectsSection = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.titleProjects}>Projects</h1>
      <div className={styles.wrapperItem}>
        <div className={styles.cardsWrapper}>
          {dataProjects.map(({ description, logo, title }) => (
            <div className={styles.cardWrapper}>
              <div className={styles.cardItem}>
                <span className={styles.logo}>{logo}</span>
                <p className={styles.textlogo}>{title}</p>
              </div>
              <div className={styles.descriptionWrapper}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{description}</p>
                <Link to="/projects/{id}" className={styles.linkWrapper}>
                  <button className={styles.button}>Read more</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
