import React from 'react';
import styles from '@/style/indTechSeoBenchmark.module.css';

export default function IndTechSeoBenchmark() {
    const stats = [
        {
            number: '90+',
            label: 'Portal mobile performance scores',
            variant: 'Orange'
        },
        {
            number: '<50',
            label: 'Average developer site scores',
            variant: 'Gray'
        },
        {
            number: '3-4%',
            label: 'Portal lead conversion rates',
            variant: 'Orange'
        }
    ];

    const insights = [
        {
            title: 'Core Web Vitals Performance',
            points: [
                'Housing.com scores 90+ on mobile consistently',
                'Developer sites average <50 (heavy images, poor optimization)',
                'Fast page loads directly correlate with higher lead conversion'
            ]
        },
        {
            title: 'Common Technical Issues',
            points: [
                'Portals struggle with millions of listings → duplicate content',
                'Developers under-index with just 10-20 project pages live',
                'Poor UX and generic CTAs reduce conversion to <1%'
            ]
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>08</span>
                    <h2 className={styles.headingText}>Technical SEO & UX Benchmarks</h2>
                </div>

                {/* Performance Stats Grid */}
                <div className={styles.statsGrid}>
                    {stats.map((stat, idx) => (
                        <div key={idx} className={`${styles.card} ${styles.statCard} ${styles[`statCard${stat.variant}`]}`}>
                            <h4 className={styles.statNumber}>{stat.number}</h4>
                            <p className={styles.statLabel}>{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Technical Insights Grid */}
                <div className={styles.insightsGrid}>
                    {insights.map((column, idx) => (
                        <div key={idx} className={`${styles.card} ${styles.insightCard}`}>
                            <h3 className={styles.insightTitle}>{column.title}</h3>
                            <ul className={styles.bulletList}>
                                {column.points.map((point, i) => (
                                    <li key={i} className={styles.bulletItem}>
                                        <span className={styles.dot}></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}