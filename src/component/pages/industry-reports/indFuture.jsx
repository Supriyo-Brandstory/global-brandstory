import React from 'react';
import styles from '@/style/indFuture.module.css';
import { Brain, Sparkles } from 'lucide-react';

export default function IndFuture({ data }) {
    const sectionTitle = data?.sectionTitle ;
    const impactCard = data?.impactCard || {
        title: 'null',
        description: 'null',
        tag: 'null',
    };
    const growthCard = data?.growthCard || {
        title: 'null',
        description: 'null',
        tag: 'null',
    };
    const numComp = data?.numComp || {
        number: '0',
        description: 'null',
    };
    const techCard = data?.techCard || {
        number: 'null',
        description: 'null',
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>09</span>
                    <h2 className={styles.headingText}>{sectionTitle}</h2>
                </div>

                {/* Future Insights Grid */}
                <div className={styles.futureGrid}>
                    {/* AI & SGE Impact Card */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <Brain className={styles.iconBrain} size={32} />
                            <h3 className={styles.cardTitle}>{impactCard.title}</h3>
                        </div>
                        <p className={styles.cardDesc}>
                            {impactCard.description}
                        </p>
                        <div className={`${styles.badge} ${styles.badgeBlue}`}>
                            {impactCard.tag}
                        </div>
                    </div>

                    {/* Voice Search Growth Card */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <Sparkles className={styles.iconSparkle} size={32} />
                            <h3 className={styles.cardTitle}>{growthCard.title}</h3>
                        </div>
                        <p className={styles.cardDesc}>
                            {growthCard.description}
                        </p>
                        <div className={`${styles.badge} ${styles.badgeGray}`}>
                            {growthCard.tag}
                        </div>
                    </div>

                    {/* Tier-2 Growth Card */}
                    <div className={`${styles.card} ${styles.statCard}`}>
                        <h4 className={styles.growthNumber}>{numComp.number}</h4>
                        <p className={styles.growthLabel}>{numComp.description}</p>
                    </div>

                    {/* Multilingual SEO Card */}
                    <div className={`${styles.card} ${styles.multiLingualCard}`}>
                        <h3 className={styles.cardTitle}>{techCard.number}</h3>
                        <p className={styles.cardDesc}>
                            {techCard.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}