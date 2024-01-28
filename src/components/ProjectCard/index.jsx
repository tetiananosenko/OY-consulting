import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import dataProjects from './data';
import styles from './index.module.scss';


const ProjectCard = () => {

  return (
      <div className={styles.wrapperItem}>
        <div className={styles.cardsWrapper}>
          {dataProjects.slice(0, 2).map(({ id, description, image, title }) => (
            <div className={styles.cardWrapper}>
              <div className={styles.cardItem}>
               <img src={image} className={styles.image}/>
              </div>
              <div className={styles.descriptionWrapper}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{description}</p>
              </div>
                <Link to={`/projects/${id}`} className={styles.button}>Read more</Link>
            </div>
          ))}
        </div>
      </div>
  );
};

export default ProjectCard;
