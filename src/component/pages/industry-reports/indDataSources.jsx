import React from 'react';
import styles from '@/style/indDataSources.module.css';

export default function IndDataSources() {
    const dataSources = [
        {
            title: 'Research & Analytics',
            sources: [
                'SEMrush (August 2025) - Keyword volumes & KD',
                'Ahrefs - Domain metrics & backlink data',
                'Google Trends (2023-24) - Search behavior'
            ]
        },
        {
            title: 'Market Intelligence',
            sources: [
                'IBEF (2024) - Market size projections',
                'Knight Frank India (2023) - Consumer stats',
                'Statista (2024) - Digital behavior data',
                'Housing.com Research - User insights'
            ]
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>12</span>
                    <h2 className={styles.headingText}>Appendix / Data Sources</h2>
                </div>

                {/* Data Sources Card */}
                <div className={styles.card}>
                    <div className={styles.sourcesGrid}>
                        {dataSources.map((group, idx) => (
                            <div key={idx} className={styles.sourceGroup}>
                                <h3 className={styles.groupTitle}>{group.title}</h3>
                                <ul className={styles.sourceList}>
                                    {group.sources.map((source, i) => (
                                        <li key={i} className={styles.sourceItem}>
                                            <span className={styles.bullet}>•</span>
                                            <span>{source}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}