import React from 'react';
import styles from '@/style/indCompAndMarkLeaders.module.css';

export default function IndCompAndMarkLeaders({ data }) {
    const sectionTitle = data?.sectionTitle || 'Competitor Landscape & Market Leaders';
    const cardTitle = data?.cardTitle || 'Leading Portals';
    const title = data?.title || 'Emerging Players';

    const fallbackTableData = [
        { portal: '99acres', traffic: '~37M', keyword: 'Flats for sale Delhi', domains: '17K+', content: 'Listings, city guides' },
        { portal: 'MagicBricks', traffic: '~53M', keyword: 'Flats for sale Mumbai', domains: '12K+', content: 'Blogs, calculators' },
        { portal: 'Housing.com', traffic: '~27M', keyword: 'Flats for rent Pune', domains: '25K+', content: 'Interactive maps' },
        { portal: 'NoBroker', traffic: '~19M', keyword: 'NoBroker Bangalore', domains: '13K+', content: 'App-driven, "no agent"' },
        { portal: 'SquareYards', traffic: '~3M', keyword: 'New projects Gurgaon', domains: '9K+', content: 'Developer tie-ups' }
    ];
    const fallbackHeaders = ['Portal', 'Est. Organic Traffic', 'Top Keyword', 'Ref. Domains', 'Content Focus'];

    const table = data?.perfTable || data?.table || data?.Table || null;
    const dynamicHeaders = Array.isArray(table?.heading)
        ? table.heading.map((item) => item?.heading).filter(Boolean)
        : [];
    const dynamicRows = Array.isArray(table?.Row) || Array.isArray(table?.row)
        ? (table?.Row || table?.row).map((row) => ({
            id: row?.id,
            cells: Array.isArray(row?.cells)
                ? row.cells.map((cell) => cell?.tableData || '')
                : [],
        }))
        : [];

    const headers = dynamicHeaders.length ? dynamicHeaders : fallbackHeaders;
    const hasDynamicRows = dynamicRows.length && dynamicRows.some((row) => row.cells.length);
    const rows = hasDynamicRows
        ? dynamicRows
        : fallbackTableData.map((row, index) => ({
            id: `fallback-${index}`,
            cells: [row.portal, row.traffic, row.keyword, row.domains, row.content],
        }));

    const leadingPortals = Array.isArray(data?.points) && data.points.length
        ? data.points.map((item) => ({ id: item?.id, point: item?.point || '' }))
        : [
            { id: 1, point: 'null' },
        ];

    const emergingPlayers = Array.isArray(data?.emergingCompetitor) && data.emergingCompetitor.length
        ? data.emergingCompetitor.map((item) => ({ id: item?.id, point: item?.point || '' }))
        : [
            { id: 1, point: 'null' },
        ];

    const benchmark = data?.benchmark || {};
    const benchmarkTitle = benchmark?.title || 'Authority Benchmarks';
    const benchmarkValue = benchmark?.numValue || '50-55';
    const benchmarkAuthority = benchmark?.domAuthority || 'Domain Authority (DA/DR)';
    const benchmarkBottom = benchmark?.textBottom || 'Top portals average';

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>04</span>
                    <h2 className={styles.headingText}>{sectionTitle}</h2>
                </div>

                {/* Table Section */}
                <div className={styles.card} style={{ marginBottom: '24px' }}>
                    <h3 className={styles.performanceTitle}>Top Portals Performance (SEMrush 2025)</h3>
                    <div className={styles.tableContainer}>
                        <table className={styles.performanceTable}>
                            <thead>
                                <tr>
                                    {headers.map((heading, headingIndex) => (
                                        <th key={`${heading}-${headingIndex}`}>{heading}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={row.id || index}>
                                        {row.cells.map((cell, cellIndex) => (
                                            <td
                                                key={`${row.id || index}-${cellIndex}`}
                                                className={
                                                    cellIndex === 1
                                                        ? styles.trafficValue
                                                        : cellIndex === 3
                                                            ? styles.refDomains
                                                            : ''
                                                }
                                            >
                                                {cell}
                                            </td>
                                        ))}
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
                        <h3 className={styles.detailTitle}>{cardTitle}</h3>
                        <ul className={styles.bulletList}>
                            {leadingPortals.map((item, index) => (
                                <li key={item.id || index} className={styles.bulletItem}>
                                    <span className={styles.dot}></span>
                                    <span>{item.point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Emerging Players */}
                    <div className={`${styles.card} ${styles.detailCard}`}>
                        <h3 className={styles.detailTitle}>{title}</h3>
                        <ul className={styles.bulletList}>
                            {emergingPlayers.map((item, index) => (
                                <li key={item.id || index} className={styles.bulletItem}>
                                    <span className={styles.dot}></span>
                                    <span>{item.point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Authority Benchmarks */}
                    <div className={`${styles.card} ${styles.detailCard} ${styles.benchmarkCard}`}>
                        <div className={styles.benchmarkLabel}>{benchmarkTitle}</div>
                        <div className={styles.benchmarkValue}>{benchmarkValue}</div>
                        <div className={styles.benchmarkLabel} style={{ fontSize: '13px', color: '#fff', textTransform: 'none' }}>{benchmarkAuthority}</div>
                        <div className={styles.benchmarkSubLabel}>{benchmarkBottom}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}