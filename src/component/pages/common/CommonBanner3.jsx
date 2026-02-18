"use client";
import React from "react";
import styles from "@/style/common/commonBanner3.module.css";

export const CommonBanner3 = ({
  heading,
  meta = [],
  description,
  stats = [],
}) => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        {/* Heading */}
        <h1
          className={styles.heading}
          dangerouslySetInnerHTML={{ __html: heading }}
        />

        {/* Meta grid */}
        {meta.length > 0 && (
          <div className={styles.metaGrid}>
            {meta.map((item, index) => (
              <div key={index} className={styles.metaItem}>
                <span><b>{item.title}</b></span>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className={styles.description}>{description}</p>
        )}

        {/* Stats */}
        {stats.length > 0 && (
          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <h3>{stat.value}</h3>
                <b>{stat.label}</b>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
