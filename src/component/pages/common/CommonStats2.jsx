import React from "react";
import styles from "@/style/common/commonStats2.module.css";

export const CommonStats2 = ({ summaryLabel, summaryQuote, stats }) => {
  return (
    <section className={styles.CommonStats2}>
      <div className={styles.container}>
        {/* Summary Section */}
        <div className={styles.summarySection}>
          <div className={styles.labelWrapper}>
            <div className={styles.verticalLine}></div>
            <span className={styles.label}>{summaryLabel}</span>
          </div>
          <blockquote className={styles.quote}>
            "{summaryQuote}"
          </blockquote>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.title}>{stat.title}</span>
              <p className={styles.subText}>{stat.subText}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
