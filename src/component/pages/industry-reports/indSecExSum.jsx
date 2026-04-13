import React from 'react';
import styles from '@/style/indSecExSum.module.css';
import { Globe, TrendingUp, Map, Search, Monitor, Handshake, BarChart3 } from 'lucide-react';

export default function IndSecExSum() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>01</span>
                    <h2 className={styles.headingText}>Executive Summary</h2>
                </div>

                {/* Purpose Statement */}
                <div className={`${styles.card} ${styles.purposeCard}`}>
                    <h3 className={styles.cardTitleGold}>Purpose</h3>
                    <p className={styles.cardDesc}>
                        This report analyzes the SEO landscape of India's real estate sector to identify where developers, brokers, and agencies can unlock growth. It focuses on keyword demand, competitor performance, content strategies, and emerging search technologies shaping the market.
                    </p>
                </div>

                {/* Main Stats Grid */}
                <div className={styles.statsGrid}>
                    <div className={`${styles.card} ${styles.statCard} ${styles.statCardHighlight}`}>
                        <h4 className={styles.statNumber}>97%</h4>
                        <p className={styles.statLabel}>Indian homebuyers start their search online</p>
                    </div>
                    <div className={`${styles.card} ${styles.statCard} ${styles.statCardHighlight}`}>
                        <h4 className={styles.statNumber}>2M+</h4>
                        <p className={styles.statLabel}>Monthly searches in Bangalore alone</p>
                    </div>
                    <div className={`${styles.card} ${styles.statCard} ${styles.statCardHighlight}`}>
                        <h4 className={styles.statNumber}>15-20%</h4>
                        <p className={styles.statLabel}>Organic traffic share captured by top portals</p>
                    </div>
                </div>

                {/* Key Findings Section */}
                <h3 className={styles.subSectionHeading}>Key Findings</h3>
                <div className={styles.findingsGrid}>
                    <div className={`${styles.card} ${styles.findingCard}`}>
                        <div className={styles.iconWrapper}><img src="/images/industryReports/digitalFirstJourney.svg" alt="digitalFirstJourney" /></div>
                        <h4 className={styles.cardTitleGold}>Digital-First Journey</h4>
                        <span className={styles.badge}>97% online start</span>
                        <p className={styles.cardDesc}>
                            Indian homebuyers now start their search online, with 75-80% of urban buyers beginning the journey digitally.
                        </p>
                    </div>

                    <div className={`${styles.card} ${styles.findingCard}`}>
                        <div className={styles.iconWrapper}><img src="/images/industryReports/potentialdominane.svg" alt="portalDominance" /></div>
                        <h4 className={styles.cardTitleGold}>Portal Dominance</h4>
                        <span className={styles.badge}>15-20% traffic share</span>
                        <p className={styles.cardDesc}>
                            99acres, MagicBricks, and Housing.com capture over 15-20% of organic traffic across transactional queries.
                        </p>
                    </div>

                    <div className={`${styles.card} ${styles.findingCard}`}>
                        <div className={styles.iconWrapper}><img src="/images/industryReports/metroDrivenDemand.svg" alt="metroDrivenDemand" /></div>
                        <h4 className={styles.cardTitleGold}>Metro-Driven Demand</h4>
                        <span className={styles.badge}>2M+ monthly searches</span>
                        <p className={styles.cardDesc}>
                            Bangalore alone shows &gt;2M monthly searches across plots, flats, luxury, and BHK-specific queries.
                        </p>
                    </div>

                    <div className={`${styles.card} ${styles.findingCard}`}>
                        <div className={styles.iconWrapper}><img src="/images/industryReports/contentGaps.svg" alt="contentGaps" /></div>
                        <h4 className={styles.cardTitleGold}>Content Gaps</h4>
                        <p className={styles.cardDesc}>
                            Few portals provide legal, EMI, and tax-related guides despite strong informational query demand.
                        </p>
                    </div>
                </div>

                {/* Snapshot of Opportunities Section */}
                <h3 className={styles.subSectionHeading}>Snapshot of Opportunities</h3>
                <div className={styles.opportunitiesGrid}>
                    <div className={`${styles.card} ${styles.oppoCard}`}>
                        <div className={styles.oppoIcon}><img src="/images/industryReports/developers.svg" alt="developer" /></div>
                        <span className={styles.oppoTitleBadge}>Developers</span>
                        <p className={styles.oppoDesc}>
                            Own 'micro-location + BHK + lifestyle' clusters (e.g., 2BHK Whitefield Bangalore)
                        </p>
                    </div>

                    <div className={`${styles.card} ${styles.oppoCard}`}>
                        <div className={styles.oppoIcon}><img src="/images/industryReports/brokers-or-chanel-partners.svg" alt="developer" /></div>
                        <span className={styles.oppoTitleBadge}>Brokers/Channel Partners</span>
                        <p className={styles.oppoDesc}>
                            Rank for 'real estate agents near me' and investment properties keywords
                        </p>
                    </div>

                    <div className={`${styles.card} ${styles.oppoCard}`}>
                        <div className={styles.oppoIcon}><img src="/images/industryReports/agencies.svg" alt="developer" /></div>
                        <span className={styles.oppoTitleBadge}>Agencies</span>
                        <p className={styles.oppoDesc}>
                            Build authority-driven backlinks and localized thought leadership that portals cannot easily replicate
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}