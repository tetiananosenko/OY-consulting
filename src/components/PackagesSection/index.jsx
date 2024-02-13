import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import {ReactComponent as ArrowSwiper} from '../../assets/svg/ArrowSwiper.svg';
import CustomSwiper from '../CustomSwiper';
import dataPackages from './data';
import styles from './index.module.scss';

const PackagesSection = () => {
  const [isId, setIsId] = useState(1);

  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className={styles.sectionWrapper}>
      <h1 className={styles.title}>Packages</h1>
      <div className={styles.wrapperCards}>
        <CustomSwiper navigation={{prevEl, nextEl}}>
        {dataPackages.map(({ title, info, description, id }) => (
           <SwiperSlide>
          <div
            onMouseEnter={() => setIsId(id)}
            onMouseLeave={() => setIsId(1)}
            className={isId === id ? styles.active : styles.cardWrapper}
          >
            <div className={styles.itemWrapper}>
              <h1 className={styles.textPackage}>{title}</h1>
              <div className={styles.block}>
                <p className={styles.blockText}>{info}</p>
              </div>
              {Object.values(description).map(item => (
                <p className={styles.text}>{item}</p>
              ))}
              {isId === id && (
                <button className={styles.button}>Get a consultation</button>
              )}
            </div>
          </div>
          </SwiperSlide>
        ))}
        <div className={styles.wrapperArrows}>
          <button ref={node => setPrevEl(node)} className={styles.itemArrow}>
            <ArrowSwiper />
          </button>
          <button ref={node => setNextEl(node)}>
            <ArrowSwiper />
          </button>
        </div>
        </CustomSwiper>
      </div>
    </div>
  );
};

export default PackagesSection;
