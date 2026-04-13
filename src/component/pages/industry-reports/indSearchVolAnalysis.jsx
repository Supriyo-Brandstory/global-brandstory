import React from 'react';
import styles from '@/style/indSearchVolAnalysis.module.css';

export default function IndSearchVolAnalysis() {
    const trends = [
        { number: '1.37M', label: 'Topic:- Flats for sale in [city]', },
        { number: '846K', label: 'Topic:- Property for sale in [city]' },
        { number: '412K', label: 'Topic:- 1BHK flats for sale' },
        { number: '288K', label: 'Topic:- 2BHK flats for sale' },
        { number: '371K', label: 'Topic:- Villas for sale in [city]' },
        { number: '85%', label: 'Topic:- Non-branded searches', }
    ];

    const citiesData = [
        {
            name: 'Bangalore',
            data: [
                { topic: 'Plots for sale', volume: '1.93M' },
                { topic: 'Flats for sale', volume: '920K' },
                { topic: 'Villas for sale', volume: '265K' },
                { topic: 'Luxury properties', volume: '222K' },
                { topic: 'Ready-to-move flats', volume: '3.4K' }
            ],
            total: '4.1+ Million'
        },
        {
            name: 'Mumbai',
            data: [
                { topic: 'Houses for sale', volume: '649K' },
                { topic: 'Flats for sale', volume: '344K' },
                { topic: 'Luxury apartments', volume: '211K' },
                { topic: 'Villas', volume: '138K' },
                { topic: '1BHK/2BHK combined', volume: '~100K' }
            ],
            total: '1.5+ Million'
        },
        {
            name: 'Hyderabad',
            data: [
                { topic: 'BHK apartments', volume: '755K' },
                { topic: 'Ready-to-move flats', volume: '553K' },
                { topic: 'Properties in locality', volume: '397K' },
                { topic: 'Villas', volume: '283K' },
                { topic: 'Plots', volume: '259K' }
            ],
            total: '2.7+ Million'
        },
        {
            name: 'India-Wide Summary',
            data: [
                { topic: 'Flats for sale in [city]', volume: '1.37M' },
                { topic: 'Property for sale in [city]', volume: '846K' },
                { topic: '1BHK/2BHK combined', volume: '700K' },
                { topic: 'Villas combined', volume: '494K' }
            ],
            total: '18+ Million'
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header with index */}
                <div className={styles.mainHeading}>
                    <span className={styles.index}>05</span>
                    <h2 className={styles.headingText}>Search Volume Analysis</h2>
                </div>

                {/* Pan-India Search Trends */}
                <h3 className={styles.subSectionHeading}>Pan-India Search Trends</h3>
                <div className={styles.trendsGrid}>
                    {trends.map((trend, index) => (
                        <div key={index} className={`${styles.card} ${styles.trendCard} ${trend.isHighlighted ? styles.trendCardHighlighted : ''}`}>
                            <h4 className={styles.trendNumber}>{trend.number}</h4>
                            <p className={styles.trendLabel}>{trend.label}</p>
                        </div>
                    ))}
                </div>

                {/* Total Search Volume Banner */}
                <div className={styles.totalVolumeCard}>
                    <div className={styles.totalVolumeLabel}>Total Search Volume : </div> <span className={styles.totalVolumeValue}> 18+Million</span>
                </div>

                {/* Seasonality Insights */}
                <div className={styles.seasonalityCard}>
                    <div>
                        <h4 className={styles.seasonalityTitle}>Seasonality Insights</h4>
                        <p className={styles.seasonalityText}>
                            Searches spike 15–20% during Diwali & Gudi Padwa festivals
                        </p>
                    </div>
                    <span className={styles.seasonalityBadge}>+ 15-20%</span>
                </div>

                {/* City-Specific Search Volumes */}
                <h3 className={styles.subSectionHeading}>City-Specific Search Volumes</h3>
                <div className={styles.citiesGrid}>
                    {citiesData.map((city, index) => (
                        <div key={index} className={`${styles.card} ${styles.cityCard}`}>
                            <div className={styles.cityHeader}>
                                <div className={styles.cityLine}></div>
                                <h4 className={styles.cityName}>{city.name}</h4>
                            </div>
                            <div className={styles.tableHeaderRow}>
                                <span>Topic</span>
                                <span>Search Volume</span>
                            </div>
                            {city.data.map((row, i) => (
                                <div key={i} className={styles.dataRow}>
                                    <span className={styles.dataLabel}>{row.topic}</span>
                                    <span className={styles.dataValue}>{row.volume}</span>
                                </div>
                            ))}
                            <div className={styles.cityTotalRow}>
                                <span className={styles.cityTotalLabel}>Total Search Volume:</span>
                                <span className={styles.cityTotalValue}>{city.total}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}