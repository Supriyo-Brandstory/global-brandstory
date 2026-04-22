import React from 'react';
import styles from '@/style/indBanner.module.css';

export default function IndBanner({ data }) {
    const { title, preparedBy, cta } = data;
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
                    <span className={styles.subtitle}>{preparedBy}</span>
                </div>

                <h1 className={styles.title}>
                    {title}
                </h1>

                <a href={cta?.buttonUrl} className={styles.ctaButton}>
                    {cta?.buttonLabel}
                </a>
            </div>
        </section>
    );
}