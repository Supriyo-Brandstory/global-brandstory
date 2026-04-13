import React from 'react';
import styles from '@/style/indCompAndMarkLeaders.module.css';

export default function IndCompAndMarkLeaders() {
    const tableData = [
        { portal: '99acres', traffic: '~37M', keyword: 'Flats for sale Delhi', domains: '17K+', content: 'Listings, city guides' },
        { portal: 'MagicBricks', traffic: '~53M', keyword: 'Flats for sale Mumbai', domains: '12K+', content: 'Blogs, calculators' },
        { portal: 'Housing.com', traffic: '~27M', keyword: 'Flats for rent Pune', domains: '25K+', content: 'Interactive maps' },
        { portal: 'NoBroker', traffic: '~19M', keyword: 'NoBroker Bangalore', domains: '13K+', content: 'App-driven, "no agent"' },
        { portal: 'SquareYards', traffic: '~3M', keyword: 'New projects Gurgaon', domains: '9K+', content: 'Developer tie-ups' }
    ];

    const leadingPortals = [
        '99acres - 37M+ visits',
        'MagicBricks - Strong blog presence',
        'Housing.com - Map-based search',
        'NoBroker - Broker-free model'
    ];

    const emergingPlayers = [
        'PropTiger - Newsroom-driven',
        'SquareYards - Transaction focus',
        'Regional portals in tier-2'
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>04</span>
                    <h2 className={styles.headingText}>Competitor Landscape & Market Leaders</h2>
                </div>

                {/* Table Section */}
                <div className={styles.card} style={{ marginBottom: '24px' }}>
                    <h3 className={styles.performanceTitle}>Top Portals Performance (SEMrush 2025)</h3>
                    <div className={styles.tableContainer}>
                        <table className={styles.performanceTable}>
                            <thead>
                                <tr>
                                    <th>Portal</th>
                                    <th>Est. Organic Traffic</th>
                                    <th>Top Keyword</th>
                                    <th>Ref. Domains</th>
                                    <th>Content Focus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.portal}</td>
                                        <td className={styles.trafficValue}>{row.traffic}</td>
                                        <td>{row.keyword}</td>
                                        <td className={styles.refDomains}>{row.domains}</td>
                                        <td>{row.content}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Bottom Details Grid */}
                <div className={styles.detailsGrid}>
                    {/* Leading Portals */}
                    <div className={`${styles.card} ${styles.detailCard}`}>
                        <h3 className={styles.detailTitle}>Leading Portals</h3>
                        <ul className={styles.bulletList}>
                            {leadingPortals.map((item, index) => (
                                <li key={index} className={styles.bulletItem}>
                                    <span className={styles.dot}></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Emerging Players */}
                    <div className={`${styles.card} ${styles.detailCard}`}>
                        <h3 className={styles.detailTitle}>Emerging Players</h3>
                        <ul className={styles.bulletList}>
                            {emergingPlayers.map((item, index) => (
                                <li key={index} className={styles.bulletItem}>
                                    <span className={styles.dot}></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Authority Benchmarks */}
                    <div className={`${styles.card} ${styles.detailCard} ${styles.benchmarkCard}`}>
                        <div className={styles.benchmarkLabel}>Authority Benchmarks</div>
                        <div className={styles.benchmarkValue}>50-55</div>
                        <div className={styles.benchmarkLabel} style={{ fontSize: '13px', color: '#fff', textTransform: 'none' }}>Domain Authority (DA/DR)</div>
                        <div className={styles.benchmarkSubLabel}>Top portals average</div>
                    </div>
                </div>
            </div>
        </section>
    );
}