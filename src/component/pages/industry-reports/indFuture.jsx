import React from 'react';
import styles from '@/style/indFuture.module.css';
import { Brain, Sparkles } from 'lucide-react';

export default function IndFuture() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>09</span>
                    <h2 className={styles.headingText}>Future of SEO in Indian Real Estate</h2>
                </div>

                {/* Future Insights Grid */}
                <div className={styles.futureGrid}>
                    {/* AI & SGE Impact Card */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <Brain className={styles.iconBrain} size={32} />
                            <h3 className={styles.cardTitle}>AI & SGE Impact</h3>
                        </div>
                        <p className={styles.cardDesc}>
                            Google and Bing increasingly summarize listings in generative answers. Portals risk traffic cannibalization as AI presents information without clicks.
                        </p>
                        <div className={`${styles.badge} ${styles.badgeBlue}`}>
                            Prepare for zero-click searches
                        </div>
                    </div>

                    {/* Voice Search Growth Card */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <Sparkles className={styles.iconSparkle} size={32} />
                            <h3 className={styles.cardTitle}>Voice Search Growth</h3>
                        </div>
                        <p className={styles.cardDesc}>
                            Growing rapidly in vernacular. Queries like "Bangalore mein 2BHK flat" or "Hyderabad lo villa" becoming mainstream.
                        </p>
                        <div className={`${styles.badge} ${styles.badgeGray}`}>
                            Optimize for conversational queries in regional languages
                        </div>
                    </div>

                    {/* Tier-2 Growth Card */}
                    <div className={`${styles.card} ${styles.statCard}`}>
                        <h4 className={styles.growthNumber}>2x</h4>
                        <p className={styles.growthLabel}>Tier-2 search growth vs metros</p>
                    </div>

                    {/* Multilingual SEO Card */}
                    <div className={`${styles.card} ${styles.multiLingualCard}`}>
                        <h3 className={styles.cardTitle}>Multilingual SEO</h3>
                        <p className={styles.cardDesc}>
                            Most portals operate in English/Hindi. Huge untapped demand exists in Kannada, Tamil, Telugu
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}