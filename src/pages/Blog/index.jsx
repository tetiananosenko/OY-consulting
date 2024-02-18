import { Link, useParams } from 'react-router-dom';
import dataBlogs from '../../components/BlogsSection/data';
import Layout from '../Layout';
import styles from './index.module.scss';

const Blog = () => {

  let { id } = useParams();

  let data = [];
  data.push(dataBlogs.find((data) => data.id === id));

  let image = data.map(({image}) => image);

  return (
    <>
    <Layout childComponent={
       <img src={image} className={styles.mainImage}/>
  }>
     {data.map(({ title, name, content, media, data, sign }) => (
      <>
        <p className={styles.title}>{title}</p>
        <div className={styles.itemsWrapper}>
          <div className={styles.descriptionWrapper}>
        {content.map(({image, text}) => (
          <>
        <p className={styles.description}>{text}</p>
        {image ? <img src={image} className={styles.imageDescription}/> : null}
        </>
        ))}
        {media ? 
        <>
        <p className={styles.stylesFollow}>Follow <span className={styles.name}>{name}</span> on:</p>
         {media.map(({link, icon}) => (<Link to={link}  target="_blank" className={styles.icon}>{icon}</Link>))} 
         </>
        : null}
         {sign ? 
        <>
         {sign.map(({text}) => (<p className={styles.textSign}>{text}</p>))} 
         </>
        : null}
        <p className={styles.data}>{data}</p>
        </div>
        </div>
      </>
          ))}
      </Layout>
    </>
  );
};

export default Blog;
