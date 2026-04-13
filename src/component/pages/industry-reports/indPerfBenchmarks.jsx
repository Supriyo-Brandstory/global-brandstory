import React from 'react';
import styles from '@/style/indPerfBenchmarks.module.css';

export default function IndPerfBenchmarks() {
    const stats = [
        {
            number: '+22%',
            label: 'YoY organic traffic growth to portals',
            // isOrange: true,
            // isHighlighted: true 
        },
        {
            number: '65%',
            label: 'Queries trigger local pack/Maps'
        },
        {
            number: '28-32%',
            label: 'CTR for 1st organic result'
        }
    ];

    const intents = [
        { title: 'Transactional', desc: 'e.g., "Flats for sale in Bangalore"', isGold: true },
        { title: 'Informational', desc: 'e.g., "Property registration Hyderabad"', isGold: true },
        { title: 'Navigational', desc: 'e.g., "99acres Bangalore"', isGold: true }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>03</span>
                    <h2 className={styles.headingText}>SEO Performance Benchmarks</h2>
                </div>

                {/* 3-Column Stats Grid */}
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${styles.statCard} ${stat.isHighlighted ? styles.statCardHighlight : ''}`}
                        >
                            <h4 className={`${styles.statNumber} ${stat.isOrange ? styles.statNumberOrange : ''}`}>
                                {stat.number}
                            </h4>
                            <p className={styles.statLabel}>{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Keyword Intent Split Detailed Card */}
                <div className={`${styles.card} ${styles.intentCard}`}>
                    <h3 className={styles.intentTitle}>Keyword Intent Split</h3>
                    <div className={styles.intentGrid}>
                        {intents.map((intent, index) => (
                            <div key={index} className={styles.intentSubCard}>
                                <h4 className={`${styles.intentSubTitle} ${intent.isGold ? styles.intentSubTitleGold : ''}`}>
                                    {intent.title}
                                </h4>
                                <p className={styles.intentSubDesc}>{intent.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}