import React from 'react';
import styles from '@/style/indDataSources.module.css';

export default function IndDataSources({data}) {
    const sectionTitle = data?.sectionTitle || 'Appendix / Data Sources';
    const fallbackDataSources = [
        {
            title: 'null',
            sources: [
                'null',
            ]
        },
    ];
    const dataSources = Array.isArray(data?.sources) && data.sources.length
        ? data.sources.map((group) => ({
            id: group?.id,
            title: group?.title || '',
            sources: Array.isArray(group?.listicles)
                ? group.listicles.map((item) => ({ id: item?.id, point: item?.point || '' }))
                : [],
        }))
        : fallbackDataSources.map((group, index) => ({
            id: index + 1,
            title: group.title,
            sources: group.sources.map((item, itemIndex) => ({ id: `${index + 1}-${itemIndex + 1}`, point: item })),
        }));

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>12</span>
                    <h2 className={styles.headingText}>{sectionTitle}</h2>
                </div>

                {/* Data Sources Card */}
                <div className={styles.card}>
                    <div className={styles.sourcesGrid}>
                        {dataSources.map((group, idx) => (
                            <div key={group.id || idx} className={styles.sourceGroup}>
                                <h3 className={styles.groupTitle}>{group.title}</h3>
                                <ul className={styles.sourceList}>
                                    {group.sources.map((source, i) => (
                                        <li key={source.id || i} className={styles.sourceItem}>
                                            <span className={styles.bullet}>•</span>
                                            <span>{source.point}</span>
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