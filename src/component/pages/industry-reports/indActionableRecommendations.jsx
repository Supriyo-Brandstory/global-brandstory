import React from 'react';
import styles from '@/style/indActionableRecommendations.module.css';
import { Search, Target, Landmark, TrendingUp, Globe, UsersRound } from 'lucide-react';

export default function IndActionRecommendations({data}) {
    const sectionTitle = data?.sectionTitle || 'Actionable Recommendations';
    const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || '';
    const fallbackIcons = [
        <Search size={28} key="search" />,
        <Target size={28} key="target" />,
        <Landmark size={28} key="landmark" />,
        <TrendingUp size={28} key="trending" />,
        <Globe size={28} key="globe" />,
        <UsersRound size={28} key="users" />,
    ];

    const getMediaUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `${strapiBaseUrl}${url}`;
    };

    const parseListPoints = (description = []) => {
        if (!Array.isArray(description)) return [];
        return description.flatMap((block) => {
            if (block?.type !== 'list' || !Array.isArray(block?.children)) return [];
            return block.children
                .filter((child) => child?.type === 'list-item' && Array.isArray(child?.children))
                .map((item) => item.children.map((node) => node?.text || '').join('').trim())
                .filter(Boolean);
        });
    };

    const fallbackRecommendations = [
        {
            title: 'Keyword Strategy',
            points: [
                'Micro-location + BHK clusters',
                'Capture villa/luxury demand',
                'Target tier-2 cities early'
            ]
        },
        {
            title: 'Content Creation',
            points: [
                'City guides with lifestyle info',
                'EMI & stamp duty calculators',
                'YouTube property tours'
            ]
        },
        {
            title: 'Local SEO',
            points: [
                'Optimize GBP for each project',
                'Run review campaigns',
                'NAP consistency'
            ]
        },
        {
            title: 'Backlink Strategy',
            points: [
                'Generate housing reports',
                'Media syndication',
                'Financial site partnerships'
            ]
        },
        {
            title: 'Technical SEO',
            points: [
                'Improve Core Web Vitals',
                'Implement schema at scale',
                'Fix duplicate content'
            ]
        },
        {
            title: 'UX Optimization',
            points: [
                'Add chatbots & callbacks',
                'Pre-filled lead forms',
                'Mobile-first design'
            ]
        }
    ];
    const recommendations = Array.isArray(data?.cards) && data.cards.length
        ? data.cards.map((card, index) => ({
            id: card?.id,
            title: card?.title || '',
            points: parseListPoints(card?.description),
            iconUrl: getMediaUrl(card?.icon?.url),
            iconAlt: card?.icon?.alternativeText || card?.title || `recommendation-${index + 1}`,
            fallbackIcon: fallbackIcons[index % fallbackIcons.length],
        }))
        : fallbackRecommendations.map((card, index) => ({
            id: index + 1,
            title: card.title,
            points: card.points,
            iconUrl: '',
            iconAlt: card.title,
            fallbackIcon: fallbackIcons[index % fallbackIcons.length],
        }));

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>11</span>
                    <h2 className={styles.headingText}>{sectionTitle}</h2>
                </div>

                {/* Recommendations Grid */}
                <div className={styles.recGrid}>
                    {recommendations.map((rec, idx) => (
                        <div key={rec.id || idx} className={styles.card}>
                            <div className={styles.cardIcon}>
                                {rec.iconUrl ? (
                                    <img src={rec.iconUrl} alt={rec.iconAlt} />
                                ) : (
                                    rec.fallbackIcon
                                )}
                            </div>
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