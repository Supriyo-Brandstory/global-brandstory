import React from 'react';
import styles from '@/style/indOnPageSeo.module.css';
import { Star, Trophy, LayoutGrid } from 'lucide-react';

export default function IndOnPageSeo() {
    const insights = [
        {
            title: 'What Works Today',
            points: [
                "Neighborhood-focused pages: '2BHK flats in Whitefield, Bangalore'",
                "Utility-driven tools: EMI calculators, stamp duty estimators",
                "Investment-oriented blogs: 'Best areas to invest in Hyderabad 2025'",
                "Schema markup for RealEstateListing and FAQ"
            ]
        },
        {
            title: 'Content Gaps & Opportunities',
            points: [
                "Tier-2 city content hubs growing 2x faster than metros",
                "Lifestyle content (schools, commute) affects 60% of buyers",
                "Legal guides (RERA, registration) have high demand",
                "Few developers use structured data effectively"
            ]
        }
    ];

    const impacts = [
        { icon: <Star size={40} />, text: 'Featured Snippets', variant: 'Orange' },
        { icon: <Trophy size={40} />, text: 'Star Ratings in SERP', variant: 'Gold' },
        { icon: <LayoutGrid size={40} />, text: 'Answer Box Visibility', variant: 'Yellow' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>06</span>
                    <h2 className={styles.headingText}>Content & On-Page SEO Insights</h2>
                </div>

                {/* Insights Grid */}
                <div className={styles.insightsGrid}>
                    {insights.map((column, idx) => (
                        <div key={idx} className={styles.card}>
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

                {/* Schema Adoption Impact Row */}
                <div className={`${styles.card} ${styles.schemaImpactSection}`}>
                    <h3 className={styles.schemaTitle}>Schema Adoption Impact</h3>
                    <div className={styles.impactGrid}>
                        {impacts.map((item, index) => (
                            <div key={index} className={`${styles.impactCard} ${styles[`impactCard${item.variant}`]}`}>
                                <div className={styles.iconWrapper}>
                                    {item.icon}
                                </div>
                                <span className={styles.impactText}>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
