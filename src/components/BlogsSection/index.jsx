import { Link } from 'react-router-dom';
import dataBlogs from './data';
import styles from './index.module.scss';

const BlogsSection = () => {
  return (
    <div className={styles.wrapperSection}>
      <h1 className={styles.Headertitle}>Featured blogs</h1>
      <div className={styles.wrapperBlogs}>
        {dataBlogs
          .slice(0, 3)
          .map(({ id, title, description, image, data }) => (
            <div className={styles.itemWrapper}>
                <div className={styles.imageWrapper}>
                  <img src={image} alt={title} className={styles.image} />
                  <p className={styles.data}>{data}</p>
                </div>
              <div className={styles.textWrapper}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.text}>{description}</p>
              </div>
              <Link to={`/blog/${id}`} className={styles.linkWrapper}>
                <button className={styles.button}>Read more</button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogsSection;
