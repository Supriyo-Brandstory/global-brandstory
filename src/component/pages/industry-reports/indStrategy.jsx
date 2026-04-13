import React from 'react';
import styles from '@/style/indStrategy.module.css';

export default function IndStrategy() {
    const aeoExamples = [
        '"What is stamp duty in Bangalore?"',
        '"How to register property in Hyderabad?"'
    ];

    const aeoActions = [
        'Add FAQ schema to legal content',
        'Build Q&A blogs for EMI, RERA, tax benefits'
    ];

    const geoOpportunities = [
        'Publish evergreen, data-backed content (price indexes)',
        'Use structured data to signal authority',
        'Secure backlinks from high-trust domains'
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>10</span>
                    <h2 className={styles.headingText}>AEO & GEO Strategy</h2>
                </div>

                {/* Two-Column Grid */}
                <div className={styles.strategyGrid}>
                    {/* AEO Card */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Answer Engine Optimization (AEO)</h3>
                        <p className={styles.cardSubtitle}>Optimize for featured snippets and direct answers</p>

                        <div className={styles.examplesGroup}>
                            {aeoExamples.map((example, idx) => (
                                <div key={idx} className={styles.exampleBox}>
                                    <p className={styles.exampleText}>{example}</p>
                                </div>
                            ))}
                        </div>

                        <ul className={styles.bulletList}>
                            {aeoActions.map((action, idx) => (
                                <li key={idx} className={styles.bulletItem}>
                                    <span className={styles.dot}></span>
                                    <span>{action}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* GEO Card */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Generative Engine Optimization (GEO)</h3>
                        <p className={styles.cardSubtitle}>Prepare for AI tools like ChatGPT, Perplexity, and Google SGE</p>

                        <p className={styles.oppLabel}>Opportunities:</p>
                        <ul className={styles.arrowList}>
                            {geoOpportunities.map((item, idx) => (
                                <li key={idx} className={styles.arrowItem}>
                                    <span className={styles.arrow}>→</span>
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