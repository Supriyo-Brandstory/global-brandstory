import React from 'react';
import styles from '@/style/common/commonNoticeBanner.module.css';

export const CommonNoticeBanner = ({
  heading,
  date,
  paragraph,
}) => {

  return (
    <div className={styles.bannerWrapper}>
        <div className={styles.layout}>
            <h2 className={styles.title}>{heading}</h2>
            <br />
            <div className={styles.date}><b>Last Updated: </b>{date}</div>
            <br />
            <div className={styles.paragraph} dangerouslySetInnerHTML={{__html:paragraph}} />
        </div>
    </div>
  );
};