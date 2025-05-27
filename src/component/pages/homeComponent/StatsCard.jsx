'use client';

import React from 'react';
import styles from '@/style/homepage.module.css';

const stats = [
  { number: '500+', label: 'clients worldwide' },
  { number: '1200+', label: 'projects delivered' },
  { number: '11+', label: 'years of experience' },
  { number: '92%', label: 'client retention' },
  { number: '150+', label: 'Creative Minds' },
  { number: '30+', label: 'Industries Served' },
  { number: '1B', label: 'Revenue Generated' },
  { number: '10M', label: 'Leads Generated' },
];

export default function StatsCard() {
  return (
    <div className={`${styles.cardContainer}`}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${styles.statBox} ${index % 4 !== 3 ? styles.rightBorder : ''} ${
            index < 4 ? styles.bottomMargin : ''
          }`}
        >
          <div className={styles.glowText}>{stat.number}</div>
          <div className={styles.labelText}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
