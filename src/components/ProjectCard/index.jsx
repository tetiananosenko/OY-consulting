import { Link } from 'react-router-dom';
import dataProjects from './data';
import styles from './index.module.scss';

const ProjectCard = () => {
  return (
      <div className={styles.wrapperItem}>
        <div className={styles.cardsWrapper}>
          {dataProjects.slice(0, 2).map(({ description, logo, title }) => (
            <div className={styles.cardWrapper}>
              <div className={styles.cardItem}>
                <span className={styles.logo}>{logo}</span>
                <p className={styles.textlogo}>{title}</p>
              </div>
              <div className={styles.descriptionWrapper}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{description}</p>
                <Link to='/projects/{id}' className={styles.linkWrapper}>
                  <button className={styles.button}>Read more</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default ProjectCard;
