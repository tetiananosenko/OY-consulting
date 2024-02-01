import React, { useState } from 'react';
import Accordion from '../../components/AccordionFooter';
import { menuName, listContent } from './ListItems';
import styles from './index.module.scss';

const FooterList = ({ className })=> {
  const [listVisible, setListVisible] = useState([false, false, false]);

  const openList = (count) => {
    setListVisible(prev =>
      prev.map((value, index) => (index === count ? !value : value)),
    );
  };

  return (
    <>
      {menuName.map(({ id, listNumber, contentName, label }) => (
        <div key={id} className={className}>
          <Accordion
            title={label}
            listVisible={listVisible}
            openList={openList}
            listNumber={listNumber}
          />
          <nav
            className={
              listVisible && listVisible[listNumber]
                ? styles.listOpen
                : styles.list
            }
          >
            {listContent[contentName].map(({ id, href, label }) => (
              <a href={href} className={styles.link} key={id} target='_blank'>
                {label}
              </a>
            ))}
          </nav>
        </div>
      ))}
    </>
  );
};

export default FooterList;
