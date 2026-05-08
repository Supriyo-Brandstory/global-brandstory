"use client";
import React from "react";
import styles from "@/style/common/csSEOBanner.module.css";

/**
 * CsSEOBanner — Case Study variant of CommonBanner.
 *
 * Props:
 *  heading      {string}  — Main h1 heading (HTML string supported)
 *  description  {string}  — Short paragraph below the metadata grid
 *  meta         {Array}   — Array of { label, value } objects for the info grid
 *  stats        {Array}   — Array of { value, label } objects for the bottom stat counters
 */
export const CsSEOBanner = ({
  heading,
  description,
  description2,
  meta = [],
  stats = [],
}) => {
  return (
    <div className={styles.csBanner}>
      {/* Decorative boxes */}
      <div className={styles.boxes}>
        <div className={styles.box1} />
        <div className={styles.box2} />
        <div className={styles.box3} />
      </div>

      <div className={styles.csBannerContent}>
        {/* Main Heading */}
        <h1
          className={styles.heading}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        
        {/* Description2 paragraph */}
        {description2 && (
          <h4
            dangerouslySetInnerHTML={{ __html: description2 }}
          />
        )}


        {/* Metadata grid (Industry, Market, Business Model, Services) */}
        {meta.length > 0 && (
          <div className={styles.metaGrid}>
            {meta.map((item, i) => (
              <div key={i} className={styles.metaItem}>
                <span className={styles.metaLabel}>{item.label}</span>
                <span className={styles.metaValue}>{item.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Description paragraph */}
        {description && (
          <p
            style={{ maxWidth: description2 ? '100%' : '' }}
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        {/* Stat counters (e.g. 104%, 113%, 23%) */}
        {stats.length > 0 && (
          <div className={styles.statsRow}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
