import React from 'react';
import styles from '@/style/indBanner.module.css';

export default function IndBanner() {
    return (
        <section className={styles.banner}>
            <div className={styles.decoration}>
                <div className={`${styles.glow} ${styles.glow1}`}></div>
                <div className={`${styles.glow} ${styles.glow2}`}></div>
                <div className={`${styles.glow} ${styles.glow3}`}></div>
                <div className={`${styles.square} ${styles.sq1}`}></div>
                <div className={`${styles.square} ${styles.sq2}`}></div>
            </div>
            
            <div className={styles.container}>
                <div className={styles.subtitleWrapper}>
                    <span className={styles.line}></span>
                    <span className={styles.subtitle}>Prepared by Brandstory Unit</span>
                </div>
                
                <h1 className={styles.title}>
                    Indian Real Estate SEO <br /> Industry Report 2025
                </h1>
                
                <a href="/contact-us" className={styles.ctaButton}>
                    Market Intelligence & Strategic Insights
                </a>
            </div>
        </section>
    );
}