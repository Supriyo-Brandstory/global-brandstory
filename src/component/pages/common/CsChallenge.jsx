import React from 'react';
import styles from '@/style/common/csChallenge.module.css';

const CsChallenge = ({ title, paragraphs = [] }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {title && <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />}
        <div className={styles.content}>
          {paragraphs.map((p, index) => (
            <p key={index} className={styles.paragraph} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CsChallenge;
