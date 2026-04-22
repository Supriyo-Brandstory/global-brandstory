import React from 'react';
import styles from '@/style/indPerfBenchmarks.module.css';

export default function IndPerfBenchmarks({data}) {
    const sectionTitle = data?.sectionTitle;
    const splitTitle = data?.splitTitle;
    const fallbackStats = [
        {
            number: '0',
            label: 'Null',
        },
    ];
    const fallbackIntents = [
        { title: 'null', desc: 'null"', isGold: true },
    ];

    const stats = Array.isArray(data?.cards) && data.cards.length
        ? data.cards.map((card) => ({
            id: card?.id,
            number: card?.number || '',
            label: card?.description || '',
        }))
        : fallbackStats;

    const intents = Array.isArray(data?.splitCards) && data.splitCards.length
        ? data.splitCards.map((intent) => ({
            id: intent?.id,
            title: intent?.keyword || '',
            desc: intent?.example ? `e.g., ${intent.example}` : '',
            isGold: true,
        }))
        : fallbackIntents;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>03</span>
                    <h2 className={styles.headingText}>{sectionTitle}</h2>
                </div>

                {/* 3-Column Stats Grid */}
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id || index}
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
                    <h3 className={styles.intentTitle}>{splitTitle}</h3>
                    <div className={styles.intentGrid}>
                        {intents.map((intent, index) => (
                            <div key={intent.id || index} className={styles.intentSubCard}>
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