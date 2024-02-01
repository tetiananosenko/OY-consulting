import React from 'react';
import { Link } from 'react-router-dom';
import FooterList from './FooterList';
import Copyright from '../../components/Copyright';
import Logo from '../../assets/svg/Logo';
import Circle from '../../assets/svg/Circle';
import Arrow from '../../assets/svg/Arrow';
import styles from './index.module.scss';

  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapperSectionContent}>
      <div className={styles.box}>
        <div className={styles.logoWrapper}> 
          <Link to="/">
          <Logo />
          <p className={styles.textLogo}>Olga Yelchenko Consulting</p>
          </Link>
        </div>
        <FooterList className={styles.columnDesktop} />
        <div className={styles.info}>
          <FooterList className={styles.columnMobile} />
        </div>
      </div>
      <button onClick={scrollToTop} className={styles.iconWrapper}>
      <Circle/>
      <span className={styles.arrow}><Arrow/></span>
      </button>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
