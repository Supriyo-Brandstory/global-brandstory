import React from 'react';
import styles from '@/style/common/csResults.module.css';

const CsResults = ({ title, results = [] }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.grid}>
          {results.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardBg}></div>
              <div className={styles.cardContent}>
                <div className={styles.value}>{item.value}</div>
                <div className={styles.label}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CsResults;
