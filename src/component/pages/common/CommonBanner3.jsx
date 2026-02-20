"use client";
import React from "react";
import Link from "next/link";
import styles from "@/style/common/commonBanner3.module.css";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const CommonBanner3 = ({
  heading,
  meta = [],
  description,
  stats = [],
  highlights = [],
  /* CTA PROPS */
  primaryCtaText,
  secondaryCtaText,
  primaryCtaLink = "/contact-us",
  secondaryCtaLink = "/our-works",
}) => {
  const renderContent = (content) => {
    if (!content) return null;
    if (typeof content === "string") {
      return content;
    }
    return <BlocksRenderer content={content} />;
  };

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
                <span>
                  <b>{item.title}</b>
                </span>
                <p>{item.value}</p>
                <span><b>{item.title}</b></span>
                <p>{renderContent(item.value)}</p>
              </div>
            ))}
          </div>
        )}

{/* Highlights strip */}
{highlights.length > 0 && (
  <div className={styles.highlights}>
    {highlights.map((text, index) => (
      <React.Fragment key={index}>
        <span className={styles.highlightText}>{text}</span>
        {index !== highlights.length - 1 && (
          <span className={styles.dot} />
        )}
      </React.Fragment>
    ))}
  </div>
)}
        {/* Description */}
        {description && (
          <p className={styles.description}>{renderContent(description)}</p>
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

        {/* CTA BUTTONS */}
        {(primaryCtaText || secondaryCtaText) && (
          <div className={styles.ctaWrapper}>
            {primaryCtaText && (
              <Link
                href={primaryCtaLink}
                className={`${styles.ctaBtn} ${styles.primaryBtn}`}
              >
                {primaryCtaText}
                <span className={styles.arrow}>▶</span>
              </Link>
            )}

            {secondaryCtaText && (
              <Link
                href={secondaryCtaLink}
                className={`${styles.ctaBtn} ${styles.secondaryBtn}`}
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};