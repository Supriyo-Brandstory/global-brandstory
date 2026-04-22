"use client"
import React from 'react';
import styles from '@/style/indLocalSeoOpt.module.css';
import { Star } from 'lucide-react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function IndLocalSeoOpt({ data }) {
    const sectionTitle = data?.sectionTitle || 'Local SEO & Maps Optimization';
    const dominanceLabel = data?.dominanceLabel || 'Maps Dominance';
    const description = Array.isArray(data?.description) && data.description.length
        ? data.description
        : [
            {
                type: 'paragraph',
                children: [
                    {
                        type: 'text',
                        text: 'Local brokers and aggregators (OLX Homes, JustDial, Sulekha) outrank national portals in "near me" map pack results',
                    },
                ],
            },
        ];
    const example = data?.example || 'Example: "real estate agents near me" Hyderabad';
    const exampleAnswer = data?.exampleAnswer || 'Shows OLX & JustDial in top 3 map results';
    const reviewSignalLabel = data?.reviewSignalLabel || 'Review Signals Matter';
    const ratingNumber = data?.ratingNumber || '4';
    const ratingLabel = data?.ratingLabel || 'Average rating needed For top map visibility';
    const reviewNum = data?.reviewNum || '100+';
    const revLabel = data?.revLabel || 'Reviews required To dominate local pack';
    const recommendationLabel = data?.recommendationLabel || 'Brandstory Recommendation: GBP Optimization';

    const recommendations = Array.isArray(data?.recommendation) && data.recommendation.length
        ? data.recommendation.map((item) => ({
            id: item?.id,
            title: item?.title || '',
            desc: item?.description || '',
        }))
        : [
            {
                title: 'null',
                desc: 'null'
            },
        ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>07</span>
                    <h2 className={styles.headingText}>{sectionTitle}</h2>
                </div>

                {/* Top Grid */}
                <div className={styles.topGrid}>
                    {/* Maps Dominance Card */}
                    <div className={styles.card}>
                        <h3 className={styles.title}>{dominanceLabel}</h3>
                        <div className={styles.desc}>
                            <BlocksRenderer
                                content={description}
                                blocks={{
                                    paragraph: ({ children }) => (
                                      <p className="!text-[15px] mb-3 leading-relaxed">
                                        {children}
                                      </p>
                                    ),
                                  }}
                            />
                        </div>
                        <div className={styles.exampleBox}>
                            <p className={styles.exampleLabel}>{example}</p>
                            <p className={styles.exampleText}>{exampleAnswer}</p>
                        </div>
                    </div>

                    {/* Review Signals Card */}
                    <div className={styles.card}>
                        <h3 className={styles.title}>{reviewSignalLabel}</h3>
                        <div className={styles.statsList}>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>
                                    {ratingNumber} <Star fill="#fff" size={28} />
                                </div>
                                <div className={styles.statLabel}>
                                    {ratingLabel}
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>
                                    {reviewNum}
                                </div>
                                <div className={styles.statLabel}>
                                    {revLabel}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brandstory Recommendation Card */}
                <div className={`${styles.card} ${styles.recommendationCard}`}>
                    <h3 className={styles.title}>{recommendationLabel}</h3>
                    <div className={styles.recGrid}>
                        {recommendations.map((rec, idx) => (
                            <div key={rec.id || idx} className={styles.recItem}>
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