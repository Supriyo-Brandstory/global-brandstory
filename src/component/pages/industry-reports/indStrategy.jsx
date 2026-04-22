import React from 'react';
import styles from '@/style/indStrategy.module.css';

export default function IndStrategy({ data }) {
    const sectionTitle = data?.sectionTitle || 'AEO & GEO Strategy';
    const fallbackCards = [
        {
            id: 1,
            title: 'null',
            subtitle: 'null',
            text: [
                { id: 1, text: 'null' },
                { id: 2, text: 'null' },
            ],
            points: [
                { id: 1, point: 'null' },
                { id: 2, point: 'null' },
            ],
        },
        {
            id: 2,
            title: 'null',
            subtitle: 'null',
            text: [],
            points: [
                { id: 3, point: 'null' },
                { id: 4, point: 'null' },
                { id: 5, point: 'null' },
            ],
        },
    ];

    const cards = Array.isArray(data?.cards) && data.cards.length
        ? data.cards.map((card) => ({
            id: card?.id,
            title: card?.title || '',
            subtitle: card?.subtitle || '',
            text: Array.isArray(card?.text)
                ? card.text.map((item) => ({ id: item?.id, text: item?.text || '' }))
                : [],
            points: Array.isArray(card?.points)
                ? card.points.map((item) => ({ id: item?.id, point: item?.point || '' }))
                : [],
        }))
        : fallbackCards;

    const aeoCard = cards[0] || fallbackCards[0];
    const geoCard = cards[1] || fallbackCards[1];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>10</span>
                    <h2 className={styles.headingText}>{sectionTitle}</h2>
                </div>

                {/* Two-Column Grid */}
                <div className={styles.strategyGrid}>
                    {/* AEO Card */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>{aeoCard.title}</h3>
                        <p className={styles.cardSubtitle}>{aeoCard.subtitle}</p>

                        <div className={styles.examplesGroup}>
                            {aeoCard.text.map((example, idx) => (
                                <div key={example.id || idx} className={styles.exampleBox}>
                                    <p className={styles.exampleText}>{example.text}</p>
                                </div>
                            ))}
                        </div>

                        <ul className={styles.bulletList}>
                            {aeoCard.points.map((action, idx) => (
                                <li key={action.id || idx} className={styles.bulletItem}>
                                    <span className={styles.dot}></span>
                                    <span>{action.point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* GEO Card */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>{geoCard.title}</h3>
                        <p className={styles.cardSubtitle}>{geoCard.subtitle}</p>

                        <p className={styles.oppLabel}>Opportunities:</p>
                        <ul className={styles.arrowList}>
                            {geoCard.points.map((item, idx) => (
                                <li key={item.id || idx} className={styles.arrowItem}>
                                    <span className={styles.arrow}>→</span>
                                    <span>{item.point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}