import React from 'react';
import styles from '@/style/indSearchVolAnalysis.module.css';

export default function IndSearchVolAnalysis({ data }) {
    const sectionTitle = data?.sectionTitle || 'Search Volume Analysis';
    const cardTitle = data?.cardTitle || 'Pan-India Search Trends';
    const totalSearchVolume = data?.totalSearchVolume || '18+Million';
    const insightTitle = data?.insightTitle || 'Seasonality Insights';
    const insightDesc = data?.insightDesc || 'Searches spike 15–20% during Diwali & Gudi Padwa festivals';
    const insightValue = data?.insightValue || '+ 15-20%';

    const fallbackTrends = [
        { number: '0', label: 'null' },
    ];

    const fallbackCitiesData = [
        {
            name: 'location',
            data: [
                { topic: 'null', volume: '0' },
            ],
            total: '0',
            heading: ['h1', 'h2'],
        },
    ];

    const trends = Array.isArray(data?.searchValues) && data.searchValues.length
        ? data.searchValues.map((item) => ({
            id: item?.id,
            number: item?.number || '',
            label: item?.description || '',
        }))
        : fallbackTrends;

    const citiesData = Array.isArray(data?.cityCards) && data.cityCards.length
        ? data.cityCards.map((city) => {
            const cityTable = city?.cityTable || {};
            const tableRows = Array.isArray(cityTable?.Row) ? cityTable.Row : [];
            const parsedRows = tableRows
                .map((row) => ({
                    id: row?.id,
                    cells: Array.isArray(row?.cells) ? row.cells.map((cell) => cell?.tableData || '') : [],
                }))
                .filter((row) => row.cells.length >= 2);

            const totalRowIndex = parsedRows.findIndex((row) =>
                (row.cells[0] || '').toLowerCase().includes('total')
            );

            const totalRow = totalRowIndex >= 0 ? parsedRows[totalRowIndex] : null;
            const dataRows = totalRowIndex >= 0
                ? parsedRows.filter((_, index) => index !== totalRowIndex)
                : parsedRows;

            return {
                id: city?.id,
                name: city?.cityName || '',
                heading: Array.isArray(cityTable?.heading) ? cityTable.heading.map((h) => h?.heading).filter(Boolean) : ['Topic', 'Search Volume'],
                data: dataRows.map((row) => ({ id: row.id, topic: row.cells[0], volume: row.cells[1] })),
                total: totalRow?.cells?.[1] || '',
            };
        })
        : fallbackCitiesData;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>05</span>
                    <h2 className={styles.headingText}>{sectionTitle}</h2>
                </div>

                {/* Pan-India Search Trends */}
                <h3 className={styles.subSectionHeading}>{cardTitle}</h3>
                <div className={styles.trendsGrid}>
                    {trends.map((trend, index) => (
                        <div key={trend.id || index} className={`${styles.card} ${styles.trendCard} ${trend.isHighlighted ? styles.trendCardHighlighted : ''}`}>
                            <h4 className={styles.trendNumber}>{trend.number}</h4>
                            <p className={styles.trendLabel}>{trend.label}</p>
                        </div>
                    ))}
                </div>

                {/* Total Search Volume Banner */}
                <div className={styles.totalVolumeCard}>
                    <div className={styles.totalVolumeLabel}>Total Search Volume : </div> <span className={styles.totalVolumeValue}> {totalSearchVolume}</span>
                </div>

                {/* Seasonality Insights */}
                <div className={styles.seasonalityCard}>
                    <div>
                        <h4 className={styles.seasonalityTitle}>{insightTitle}</h4>
                        <p className={styles.seasonalityText}>
                            {insightDesc}
                        </p>
                    </div>
                    <span className={styles.seasonalityBadge}>{insightValue}</span>
                </div>

                {/* City-Specific Search Volumes */}
                <h3 className={styles.subSectionHeading}>City-Specific Search Volumes</h3>
                <div className={styles.citiesGrid}>
                    {citiesData.map((city, index) => (
                        <div key={city.id || index} className={`${styles.card} ${styles.cityCard}`}>
                            <div className={styles.cityHeader}>
                                <div className={styles.cityLine}></div>
                                <h4 className={styles.cityName}>{city.name}</h4>
                            </div>
                            <div className={styles.tableHeaderRow}>
                                <span>{city.heading?.[0] || 'Topic'}</span>
                                <span>{city.heading?.[1] || 'Search Volume'}</span>
                            </div>
                            {city.data.map((row, i) => (
                                <div key={row.id || i} className={styles.dataRow}>
                                    <span className={styles.dataLabel}>{row.topic}</span>
                                    <span className={styles.dataValue}>{row.volume}</span>
                                </div>
                            ))}
                            {city.total ? (
                                <div className={styles.cityTotalRow}>
                                    <span className={styles.cityTotalLabel}>Total Search Volume:</span>
                                    <span className={styles.cityTotalValue}>{city.total}</span>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}