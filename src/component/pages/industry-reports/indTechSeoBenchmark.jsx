import React from 'react';
import styles from '@/style/indTechSeoBenchmark.module.css';

export default function IndTechSeoBenchmark({data}) {
    const sectionTitle = data?.sectionTitle || 'Technical SEO & UX Benchmarks';

    const fallbackStats = [
        {
            number: '90+',
            label: 'Portal mobile performance scores',
            variant: 'Orange'
        },
       
    ];
    const stats = Array.isArray(data?.cards) && data.cards.length
        ? data.cards.map((card, index) => ({
            id: card?.id,
            number: card?.number || '',
            label: card?.description || '',
            variant: index === 1 ? 'Gray' : 'Orange',
        }))
        : fallbackStats;

    const fallbackInsights = [
        {
            title: 'Core Web Vitals Performance',
            points: [
                'Housing.com scores 90+ on mobile consistently',
            ]
        },

    ];
    const insights = Array.isArray(data?.listicles) && data.listicles.length
        ? data.listicles.map((item) => ({
            id: item?.id,
            title: item?.cardTitle || '',
            points: Array.isArray(item?.list)
                ? item.list.map((point) => ({ id: point?.id, point: point?.point || '' }))
                : [],
        }))
        : fallbackInsights.map((item, index) => ({
            id: index + 1,
            title: item.title,
            points: item.points.map((point, pointIndex) => ({ id: `${index + 1}-${pointIndex + 1}`, point })),
        }));

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>08</span>
                    <h2 className={styles.headingText}>{sectionTitle}</h2>
                </div>

                {/* Performance Stats Grid */}
                <div className={styles.statsGrid}>
                    {stats.map((stat, idx) => (
                        <div key={stat.id || idx} className={`${styles.card} ${styles.statCard} ${styles[`statCard${stat.variant}`]}`}>
                            <h4 className={styles.statNumber}>{stat.number}</h4>
                            <p className={styles.statLabel}>{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Technical Insights Grid */}
                <div className={styles.insightsGrid}>
                    {insights.map((column, idx) => (
                        <div key={column.id || idx} className={`${styles.card} ${styles.insightCard}`}>
                            <h3 className={styles.insightTitle}>{column.title}</h3>
                            <ul className={styles.bulletList}>
                                {column.points.map((point, i) => (
                                    <li key={point.id || i} className={styles.bulletItem}>
                                        <span className={styles.dot}></span>
                                        <span>{point.point}</span>
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