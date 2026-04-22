"use client";

import React from 'react';
import styles from '@/style/indOverview.module.css';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function IndOverview({data}) {
    // console.log("consoling the Ind Overview data : ", data);
    const fallbackStats = [
        { number: '0', label: 'Null' },
    ];
    const fallbackListCards = [
        {
            title: 'Null',
            items: [
                'Null',
                'Null',
                'Null',
            ],
        },
    ];

    const stats = Array.isArray(data?.cards) && data.cards.length
        ? data.cards.map((card) => ({
            id: card?.id,
            number: card?.number || '',
            label: card?.description || '',
        }))
        : fallbackStats;

    const listCards = Array.isArray(data?.ListCards) && data.ListCards.length
        ? data.ListCards.map((card) => ({
            id: card?.id,
            title: card?.title || '',
            content: Array.isArray(card?.description) ? card.description : [],
        }))
        : fallbackListCards;

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
                        <div key={stat.id || index} className={`${styles.card} ${styles.statCard}`}>
                            <h4 className={styles.statNumber}>{stat.number}</h4>
                            <p className={styles.statLabel}>{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* 2-Column Detail Row */}
                <div className={styles.detailGrid}>
                    {listCards.map((card, cardIndex) => (
                        <div key={card.id || cardIndex} className={`${styles.card} ${styles.detailCard}`}>
                            <h3 className={styles.detailTitle}>{card.title}</h3>
                            <div className={styles.bulletList}>
                                <BlocksRenderer
                                    content={card.content}
                                    blocks={{
                                        list: ({ children }) => <ul className={styles.bulletList}>{children}</ul>,
                                        'list-item': ({ children }) => (
                                            <li className={styles.bulletItem}>
                                                <span className={styles.dot}></span>
                                                <span>{children}</span>
                                            </li>
                                        ),
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}