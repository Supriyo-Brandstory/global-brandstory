import React from 'react';
import styles from '@/style/indSecExSum.module.css';

export default function IndSecExSum({data}) {
    const sectionTitle = data?.sectionTitle || 'Executive Summary';
    const purpose = data?.purpose || "This report analyzes the SEO landscape of India's real estate sector to identify where developers, brokers, and agencies can unlock growth. It focuses on keyword demand, competitor performance, content strategies, and emerging search technologies shaping the market.";
    const statCards = Array.isArray(data?.card) && data.card.length
        ? data.card
        : [
            { id: 1, number: '97%', description: 'Indian homebuyers start their search online' },
            { id: 2, number: '2M+', description: 'Monthly searches in Bangalore alone' },
            { id: 3, number: '15-20%', description: 'Organic traffic share captured by top portals' },
        ];
    const keyFindings = Array.isArray(data?.keyfindings) && data.keyfindings.length
        ? data.keyfindings
        : [
            {
                id: 1,
                title: 'null',
                tag: 'null',
                description: 'null',
            },
        ];
    const opportunities = Array.isArray(data?.snapshotOfOpportunities) && data.snapshotOfOpportunities.length
        ? data.snapshotOfOpportunities
        : [
            {
                id: 1,
                tag: 'null',
                description: "null",
            },
        ];

    const keyFindingIcons = [
        "/images/industryReports/digitalFirstJourney.svg",
        "/images/industryReports/potentialdominane.svg",
        "/images/industryReports/metroDrivenDemand.svg",
        "/images/industryReports/contentGaps.svg",
    ];
    const opportunityIcons = [
        "/images/industryReports/developers.svg",
        "/images/industryReports/brokers-or-chanel-partners.svg",
        "/images/industryReports/agencies.svg",
    ];

    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE;
    
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>01</span>
                    <h2 className={styles.headingText}>{sectionTitle}</h2>
                </div>

                {/* Purpose Statement */}
                <div className={`${styles.card} ${styles.purposeCard}`}>
                    <h3 className={styles.cardTitleGold}>Purpose</h3>
                    <p className={styles.cardDesc}>
                        {purpose}
                    </p>
                </div>

                {/* Main Stats Grid */}
                <div className={styles.statsGrid}>
                    {statCards.map((item, index) => (
                        <div key={item.id || index} className={`${styles.card} ${styles.statCard} ${styles.statCardHighlight}`}>
                            <h4 className={styles.statNumber}>{item.number}</h4>
                            <p className={styles.statLabel}>{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Key Findings Section */}
                <h3 className={styles.subSectionHeading}>Key Findings</h3>
                <div className={styles.findingsGrid}>
                    {keyFindings.map((item, index) => (
                        <div key={item.id || index} className={`${styles.card} ${styles.findingCard}`}>
                            <div className={styles.iconWrapper}>
                                <img src={strapiUrl + item.icon.url || keyFindingIcons[index % keyFindingIcons.length]} alt={item.title || `key-finding-${index + 1}`} />
                            </div>
                            <h4 className={styles.cardTitleGold}>{item.title}</h4>
                            {item.tag ? <span className={styles.badge}>{item.tag}</span> : null}
                            <p className={styles.cardDesc}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Snapshot of Opportunities Section */}
                <h3 className={styles.subSectionHeading}>Snapshot of Opportunities</h3>
                <div className={styles.opportunitiesGrid}>
                    {opportunities.map((item, index) => (
                        <div key={item.id || index} className={`${styles.card} ${styles.oppoCard}`}>
                            <div className={styles.oppoIcon}>
                                <img src={strapiUrl + item.icon.url || opportunityIcons[index % opportunityIcons.length]} alt={item.tag || `opportunity-${index + 1}`} />
                            </div>
                            <span className={styles.oppoTitleBadge}>{item.tag}</span>
                            <p className={styles.oppoDesc}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}