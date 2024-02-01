import React from 'react';
import PlusImg from '../../assets/svg/Plus';
import MinusImg from '../../assets/svg/Minus';
import styles from './index.module.scss';


const Accordion = ({
  title,
  listVisible,
  openList,
  listNumber,
}) => (
  <button
    className={styles.box}
    onClick={() => (openList ? openList(listNumber) : '')}
  >
    <h3 className={styles.title}>{title}</h3>
    {listVisible?.length && !listVisible[listNumber] ? (
      <PlusImg className={styles.img} />
    ) : (
      <MinusImg className={styles.img} />
    )}
  </button>
);

export default Accordion;
