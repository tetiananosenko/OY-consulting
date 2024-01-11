import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const CardsComponent = ({id, description, title, image, data}) => {
  return (
    <div className={styles.wrapperSection} key={id}>
            <div className={styles.cardWrapper}>
              <div className={styles.wrapperImage}>
                <img src={image} alt={''} className={styles.image} />
                <div className={styles.dataWrapper}>
                  <p>{data}</p>
                </div>
              </div>
              <div className={styles.wrapperBlock}>
                <div className={styles.textWrapper}>
                  <h2 className={styles.title}>{title}</h2>
                  <p className={styles.text}>{description}</p>
                </div>
              <Link to={`/blog/${id}`} className={styles.buttonWrapper}>
                <button className={styles.button}>Read more</button>
              </Link>
              </div>
            </div>
    </div>
  );
};

export default CardsComponent;
