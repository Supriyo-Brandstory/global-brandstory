"use client";
import React from "react";
import styles from "@/style/common/commonTransformation.module.css";

export const CommonTransformation = ({ title, cards }) => {
  if (!cards || cards.length === 0) return null;

  return (
    <section className={styles.transformationSection}>
      <h2 className={styles.mainTitle}>{title}</h2>
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            <div className={styles.card}>
              <div className={styles.iconBox}>
                <div className={styles.dot}></div>
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <div className={styles.cardContent}>
                {Array.isArray(card.content) ? (
                  <ul className={styles.list}>
                    {card.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{card.content}</p>
                )}
              </div>
              <div className={styles.bottomLine}></div>
            </div>

            {/* Render arrow between cards */}
            {index < cards.length - 1 && (
              <div className={styles.arrowContainer}>
                <svg
                  width="80"
                  height="40"
                  viewBox="0 0 80 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20H70M70 20L55 5M70 20L55 35"
                    stroke="#D93D26"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CommonTransformation;
