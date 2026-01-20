'use client';
import React, { useState } from "react";
import styles from "@/style/common/commonGridSelector.module.css";

export const CommonGridSelector = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>

        <div
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className={styles.tabs}>
          {tabs.map((tab, i) => (
            <div
              key={i}
              className={`${styles.tabName} ${activeTab === i && styles.active}`}
              onClick={() => setActiveTab(i)}
            >
              {tab.name}
            </div>
          ))}
        </div>

        <div className={styles.cardsGrid}>
          {tabs[activeTab].cards.map((card, i) => (
            <div className={styles.card}>
  {card.image && (
    <div className={styles.cardImageWrapper}>
      <img 
        src={card.image} 
        className={styles.cardImage} 
        alt={card.title} 
        loading="lazy"          // ← bonus: good for performance
      />
    </div>
  )}

  <div className={styles.cardContent}>
    <p className={styles.cardCategory}>{card.category}</p>
    <h3 className={styles.cardTitle}>{card.title}</h3>
    <p className={styles.cardDescription}>{card.description}</p>
    <a href={card.buttonLink} className={styles.cardButton}>
      <span>{card.buttonText}</span>
      <img src="/images/box-arrow.svg" alt="arrow" className={styles.icon}/>
    </a>
  </div>
</div>
          ))}
        </div>

      </div>
    </div>
  );
};
