import React from 'react';
import styles from '@/style/common/commonFooterBanner.module.css';

export const CommonFooterBanner = ({ title, description, btn }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <button className={styles.btn}>{btn}</button>
      </div>
    </div>
  );
};
