import React from 'react';
import styles from '@/style/common/commonFooterBanner.module.css';

// We add 'url' to the props and set a default string (e.g., '/')
export const CommonFooterBanner = ({ 
  title, 
  description, 
  btn, 
  url = '/contact-us' 
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        
        {/* Wrapping the button in an anchor tag for redirection */}
        <a href={url} className={styles.linkWrapper}>
          <button className={styles.btn}>{btn}</button>
        </a>
      </div>
    </div>
  );
};