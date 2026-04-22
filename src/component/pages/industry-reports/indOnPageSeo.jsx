import React from 'react';
import styles from '@/style/indOnPageSeo.module.css';
import { Star, Trophy, LayoutGrid } from 'lucide-react';

export default function IndOnPageSeo({ data }) {
    const sectionTitle = data?.sectionTitle || 'Content & On-Page SEO Insights';
    const schemaAdoptionTitle = data?.schemaAdoptionTitle || 'Schema Adoption Impact';
    const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || '';

    const getMediaUrl = (url) => {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        return `${strapiBaseUrl}${url}`;
    };

    const fallbackInsights = [
        {
            title: 'title',
            points: [
                "null",
            ]
        }
    ];
    const insights = Array.isArray(data?.listCards) && data.listCards.length
        ? data.listCards.map((card) => ({
            id: card?.id,
            title: card?.cardTitle || '',
            points: Array.isArray(card?.list)
                ? card.list.map((item) => ({ id: item?.id, point: item?.point || '' }))
                : [],
        }))
        : fallbackInsights.map((card, index) => ({
            id: index + 1,
            title: card.title,
            points: card.points.map((point, pointIndex) => ({ id: `${index + 1}-${pointIndex + 1}`, point })),
        }));

    const fallbackImpacts = [
        { icon: <Star size={40} />, text: 'Featured Snippets', variant: 'Orange' },
        { icon: <Trophy size={40} />, text: 'Star Ratings in SERP', variant: 'Gold' },
        { icon: <LayoutGrid size={40} />, text: 'Answer Box Visibility', variant: 'Yellow' }
    ];
    const impacts = Array.isArray(data?.adoptCard) && data.adoptCard.length
        ? data.adoptCard.map((item, index) => ({
            id: item?.id,
            text: item?.title || '',
            imageUrl: getMediaUrl(item?.image?.url),
            imageAlt: item?.image?.alternativeText || item?.title || `adopt-card-${index + 1}`,
            variant: index === 0 ? 'Orange' : index === 1 ? 'Gold' : 'Yellow',
        }))
        : fallbackImpacts.map((item, index) => ({
            id: index + 1,
            text: item.text,
            icon: item.icon,
            variant: item.variant,
        }));

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>06</span>
                    <h2 className={styles.headingText}>{sectionTitle}</h2>
                </div>

                {/* Insights Grid */}
                <div className={styles.insightsGrid}>
                    {insights.map((column, idx) => (
                        <div key={column.id || idx} className={styles.card}>
                            <h3 className={styles.insightTitle}>{column.title}</h3>
                            <ul className={styles.bulletList}>
                                {column.points.map((point, i) => (
                                    <li key={point.id || i} className={styles.bulletItem}>
                                        <span className={styles.dot}></span>
                                        <span>{point.point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Schema Adoption Impact Row */}
                <div className={`${styles.card} ${styles.schemaImpactSection}`}>
                    <h3 className={styles.schemaTitle}>{schemaAdoptionTitle}</h3>
                    <div className={styles.impactGrid}>
                        {impacts.map((item, index) => (
                            <div key={item.id || index} className={`${styles.impactCard} ${styles[`impactCard${item.variant}`]}`}>
                                <div className={styles.iconWrapper}>
                                    {item.imageUrl ? (
                                        <img src={item.imageUrl} alt={item.imageAlt} />
                                    ) : (
                                        item.icon
                                    )}
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
