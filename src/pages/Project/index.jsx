import { useParams } from 'react-router-dom';
import dataProjects from '../../components/ProjectCard/data';
import Layout from '../Layout';
import styles from './index.module.scss';

const Project = () => {

  let { id } = useParams();

  let data = [];
  data.push(dataProjects.find((data) => data.id === id));

  let image = data.map(({image}) => image);

  return (
    <>
     <>
    <Layout childComponent={
       <img src={image} className={styles.mainImage}/>
  }>
     {data.map(({ title, content}) => (
      <>
        <p className={styles.title}>{title}</p>
        <div className={styles.itemsWrapper}>
          <div className={styles.descriptionWrapper}>
        {content.map(({text, title}) => (
        <>
        {title ? <p className={styles.titleDescription}>{title}</p>: null}
        <p className={styles.description}>{text}</p>
        </>
        ))}
        </div>
        </div>
      </>
          ))}
      </Layout>
    </>
    </>
  );
};

export default Project;