import React from "react";
import styles from "@/style/common/csPerformance.module.css";

const CsPerformance = ({
  title,
  titleHighlight,
  stepNumber,
  stats = [],
  highlights = [],
  details = [],
  glow = false,
}) => {
  return (
    <div className={styles.wrapper}>
      {glow && <div className={styles.glow}></div>}
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {title?.split("&").map((part, index, array) => (
              <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && (
                  <span className={styles.amp}>&</span>
                )}
              </React.Fragment>
            ))}
            {titleHighlight && (
              <span className={styles.highlight}> {titleHighlight}</span>
            )}
          </h2>
          {stepNumber && <div className={styles.stepNumber}>{stepNumber}</div>}
        </div>

        {stats.length > 0 && (
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.cardGlow}></div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statValueRow}>
                  {stat.oldValue && (
                    <span className={styles.oldValue}>{stat.oldValue}</span>
                  )}
                  <span className={styles.newValue}>{stat.newValue}</span>
                </div>
                <div className={styles.badgeRow}>
                  {stat.badges?.map((badge, i) => (
                    <span key={i} className={styles.badge}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {highlights.length > 0 && (
          <div className={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <div key={index} className={styles.highlightCard}>
                <div className={styles.redLine}></div>
                <p className={styles.highlightText}>{item}</p>
              </div>
            ))}
          </div>
        )}

        {details.length > 0 && (
          <div className={styles.detailsGrid}>
            {details.map((item, index) => (
              <div
                key={index}
                className={`${styles.detailCard} ${item.fullWidth ? styles.fullWidth : ""}`}
              >
                <div className={styles.redLine}></div>
                {item.title && (
                  <h4 className={styles.detailTitle}>{item.title}</h4>
                )}
                <p className={styles.detailContent}>{item.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CsPerformance;
