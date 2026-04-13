import React from 'react';
import styles from '@/style/indActionableRecommendations.module.css';
import { Search, Target, Landmark, TrendingUp, Globe, UsersRound } from 'lucide-react';

export default function IndActionRecommendations() {
    const recommendations = [
        {
            icon: <Search size={28} />,
            title: 'Keyword Strategy',
            points: [
                'Micro-location + BHK clusters',
                'Capture villa/luxury demand',
                'Target tier-2 cities early'
            ]
        },
        {
            icon: <Target size={28} />,
            title: 'Content Creation',
            points: [
                'City guides with lifestyle info',
                'EMI & stamp duty calculators',
                'YouTube property tours'
            ]
        },
        {
            icon: <Landmark size={28} />,
            title: 'Local SEO',
            points: [
                'Optimize GBP for each project',
                'Run review campaigns',
                'NAP consistency'
            ]
        },
        {
            icon: <TrendingUp size={28} />,
            title: 'Backlink Strategy',
            points: [
                'Generate housing reports',
                'Media syndication',
                'Financial site partnerships'
            ]
        },
        {
            icon: <Globe size={28} />,
            title: 'Technical SEO',
            points: [
                'Improve Core Web Vitals',
                'Implement schema at scale',
                'Fix duplicate content'
            ]
        },
        {
            icon: <UsersRound size={28} />,
            title: 'UX Optimization',
            points: [
                'Add chatbots & callbacks',
                'Pre-filled lead forms',
                'Mobile-first design'
            ]
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>11</span>
                    <h2 className={styles.headingText}>Actionable Recommendations</h2>
                </div>

                {/* Recommendations Grid */}
                <div className={styles.recGrid}>
                    {recommendations.map((rec, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.cardIcon}>{rec.icon}</div>
                            <h3 className={styles.cardTitle}>{rec.title}</h3>
                            <ul className={styles.pointsList}>
                                {rec.points.map((point, i) => (
                                    <li key={i} className={styles.pointItem}>
                                        <span className={styles.bullet}>•</span>
                                        <span>{point}</span>
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