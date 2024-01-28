import { Link } from 'react-router-dom';
import routes from '../TopBar/routes'
import Logo from '../../assets/svg/Logo';
import styles from  './index.module.scss';
import Circle from '../../assets/svg/Circle';
import Arrow from '../../assets/svg/Arrow';


  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapperSectionContent}>
    <div className={styles.wrapperContent}>
      <div className={styles.logoWrapper}> 
          <Link to="/">
          <Logo />
          <p className={styles.text}>Olga Yelchenko Consulting</p>
        </Link>
      </div>
      <div className={styles.mediaWrapper}>
        <h1 className={styles.title}>Pages</h1>
         {routes.map(route => {
          return (
              <Link to={route.href}>
                <p className={styles.text}>{route.title}</p>
              </Link>
            )
          })}
      </div>
      <div className={styles.mediaWrapper}>
        <h1 className={styles.title}>Social Media</h1>
        <Link to='/facebook' className={styles.text}>Facebook</Link>
        <Link to='/instagram' className={styles.text}>Instagram</Link>
        <Link to='/linkedin' className={styles.text}>Linkedin</Link>
      </div>
      <div className={styles.mediaWrapper}>
        <h1 className={styles.title}>Terms</h1>
         <Link to='' className={styles.text}>Privacy policy</Link>
      </div>
    </div>
      <button onClick={scrollToTop} className={styles.iconWrapper}>
        <Circle/>
        <span className={styles.arrow}><Arrow/></span>
        </button>
        </div>
        <div className={styles.wrapperSectionReserved}>
          <p className={styles.textReserved}>© 2024 by Olga Yelchenko. All Rights Reserved.</p>
        </div>
  </footer>
);

export default Footer;