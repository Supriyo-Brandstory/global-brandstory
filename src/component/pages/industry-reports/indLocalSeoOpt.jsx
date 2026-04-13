import React from 'react';
import styles from '@/style/indLocalSeoOpt.module.css';
import { Star } from 'lucide-react';

export default function IndLocalSeoOpt() {
    const recommendations = [
        {
            title: 'NAP Consistency',
            desc: 'Name, Address, Phone aligned across platforms'
        },
        {
            title: 'Photo-Rich Profiles',
            desc: 'Site photos, 3D renders, amenities'
        },
        {
            title: 'Review Campaigns',
            desc: 'Target satisfied homebuyers'
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>07</span>
                    <h2 className={styles.headingText}>Local SEO & Maps Optimization</h2>
                </div>

                {/* Top Grid */}
                <div className={styles.topGrid}>
                    {/* Maps Dominance Card */}
                    <div className={styles.card}>
                        <h3 className={styles.title}>Maps Dominance</h3>
                        <p className={styles.desc}>
                            Local brokers and aggregators (OLX Homes, JustDial, Sulekha) outrank national portals in “near me” map pack results
                        </p>
                        <div className={styles.exampleBox}>
                            <p className={styles.exampleLabel}>Example: “real estate agents near me” Hyderabad</p>
                            <p className={styles.exampleText}>Shows OLX & JustDial in top 3 map results</p>
                        </div>
                    </div>

                    {/* Review Signals Card */}
                    <div className={styles.card}>
                        <h3 className={styles.title}>Review Signals Matter</h3>
                        <div className={styles.statsList}>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>
                                    4 <Star fill="#fff" size={28} />
                                </div>
                                <div className={styles.statLabel}>
                                    Average rating needed <br /> For top map visibility
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>
                                    + 100+
                                </div>
                                <div className={styles.statLabel}>
                                    Reviews required <br /> To dominate local pack
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brandstory Recommendation Card */}
                <div className={`${styles.card} ${styles.recommendationCard}`}>
                    <h3 className={styles.title}>Brandstory Recommendation: GBP Optimization</h3>
                    <div className={styles.recGrid}>
                        {recommendations.map((rec, idx) => (
                            <div key={idx} className={styles.recItem}>
                                <div className={styles.recHeader}>
                                    <span className={styles.dot}></span>
                                    <h4 className={styles.recTitle}>{rec.title}</h4>
                                </div>
                                <p className={styles.recDesc}>{rec.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}