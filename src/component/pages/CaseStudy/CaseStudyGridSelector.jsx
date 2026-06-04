'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/style/common/caseStudyGridSelector.module.css';

export const CaseStudyGridSelector = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCards = tabs[activeTab]?.cards ?? [];

  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <div
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className={styles.tabs} role="tablist" aria-label="Case study categories">
          {tabs.map((tab, i) => (
            <button
              key={tab.name}
              type="button"
              role="tab"
              aria-selected={activeTab === i}
              className={`${styles.tabName} ${activeTab === i ? styles.active : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className={styles.cardsGrid} role="tabpanel">
          {activeCards.map((card) => (
            <article key={card.slug} className={styles.card}>
              {/* {card.image && (
                <div className={styles.cardImageWrapper}>
                  <img
                    src={card.image}
                    className={styles.cardImage}
                    alt={card.title}
                    loading="lazy"
                  />
                </div>
              )} */}

              <div className={styles.cardContent}>
                {/* <p className={styles.cardCategory}>{card.category}</p> */}
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
                <Link href={card.buttonLink} className={styles.cardButton}>
                  <span>{card.buttonText}</span>
                  <img
                    src="/images/box-arrow.svg"
                    alt=""
                    className={styles.icon}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
