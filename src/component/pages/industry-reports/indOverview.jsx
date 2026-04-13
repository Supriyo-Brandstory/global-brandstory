import React from 'react';
import styles from '@/style/indOverview.module.css';

export default function IndOverview() {
    const stats = [
        { number: '$1T', label: 'Projected market size by 2030' },
        { number: '75-80%', label: 'Urban buyers start online' },
        { number: '70%', label: 'Property traffic from mobile' },
        { number: '150%', label: "Growth in 'virtual tours' searches" }
    ];

    const searchShifts = [
        "'Virtual tours' searches grew +150% (2020–2024)",
        "'Near me' queries surged +120% YoY",
        "'Co-living' and 'serviced apartments' rising among Gen Z renters"
    ];

    const digitalBehavior = [
        "Over 60% shortlist properties without visiting brokers",
        "Apps like NoBroker & MagicBricks top Play Store downloads",
        "Mobile-first experience is now the standard"
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>02</span>
                    <h2 className={styles.headingText}>Industry Overview</h2>
                </div>

                {/* 4-Column Stats Row */}
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={`${styles.card} ${styles.statCard}`}>
                            <h4 className={styles.statNumber}>{stat.number}</h4>
                            <p className={styles.statLabel}>{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* 2-Column Detail Row */}
                <div className={styles.detailGrid}>
                    <div className={`${styles.card} ${styles.detailCard}`}>
                        <h3 className={styles.detailTitle}>Search Shifts Post-COVID</h3>
                        <ul className={styles.bulletList}>
                            {searchShifts.map((item, index) => (
                                <li key={index} className={styles.bulletItem}>
                                    <span className={styles.dot}></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`${styles.card} ${styles.detailCard}`}>
                        <h3 className={styles.detailTitle}>Digital Behavior</h3>
                        <ul className={styles.bulletList}>
                            {digitalBehavior.map((item, index) => (
                                <li key={index} className={styles.bulletItem}>
                                    <span className={styles.dot}></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}