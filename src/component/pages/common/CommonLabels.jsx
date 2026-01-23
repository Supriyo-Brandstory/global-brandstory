import React from 'react';
import styles from '@/style/common/commonLabels.module.css';

export const CommonLabels = ({ title, data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}/>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.grid}>
          {data.map((item, index) => (
            <div key={index} className={styles.label}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
