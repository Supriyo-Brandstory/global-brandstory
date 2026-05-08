import React from 'react';
import styles from '@/style/common/csObjectives.module.css';

const CsObjectives = ({ title, description, points = [], stats = [] }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Left Side: Title, Description, Points */}
        <div className={styles.left}>
          {title && <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />}
          {description && <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />}
          {points.length > 0 && (
            <ul className={styles.points}>
              {points.map((point, index) => (
                <li key={index} className={styles.pointItem} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ul>
          )}
        </div>

        {/* Right Side: Stats Grid */}
        <div className={styles.right}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`${styles.statCard} ${stat.isHighlighted ? styles.highlighted : ''}`}
            >
              <h4 className={styles.statTitle}>{stat.title}</h4>
              <div className={styles.statMetric}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statDesc}>{stat.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CsObjectives;
