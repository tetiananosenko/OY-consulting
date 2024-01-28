import { Link } from 'react-router-dom';
import dataBlogs from '../../components/BlogsSection/data'; 
import Layout from '../Layout';
import styles from './index.module.scss'

const Blogs = () => {
  return (
    <Layout childComponent={ 
      <>
      <p className={styles.titleBlog}>Blog</p>
      <div className={styles.lineWrapper}>
        <hr className={styles.line} />
      </div>
      </>
    }>
      <div className={styles.cardsWrapper}>
      {dataBlogs.map(({id, title, description, image}) => (
      <>
      <div className={styles.wrapperCard}>
        <div>
      <img src={image} className={styles.image}/>
      </div>
      <div className={styles.itemWrapper}>
       <div className={styles.descriptionWrapper}>
       <h2 className={styles.title}>{title}</h2>
       <p className={styles.text}>{description}</p>
        </div>
        <div>
       <Link to={`/blog/${id}`} className={styles.button}>Read more</Link>
       </div>
        </div> 
        </div>
      </>
      ))}
      </div>
    </Layout>
  );
};

export default Blogs;
