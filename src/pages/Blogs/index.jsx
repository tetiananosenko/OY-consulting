import dataBlogs from '../../components/BlogsSection/data';
import CardsComponent from '../../components/CardsComponent';
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
      {dataBlogs.map(card => (
        <CardsComponent
          id={card.id}
          key={card.id}
          image={card.image}
          data={card.data}
          title={card.title}
          description={card.description}
        />
      ))}
    </Layout>
  );
};

export default Blogs;
