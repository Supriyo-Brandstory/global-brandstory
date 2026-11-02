"use client";

import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import styles from "@/style/common/industryResults.module.css";

function RichText({ content, className }) {
  if (!content) return null;

  if (typeof content === "string") {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return (
    <div className={className}>
      <BlocksRenderer
        content={content}
        blocks={{
          paragraph: ({ children }) => <p>{children}</p>,
        }}
      />
    </div>
  );
}

function getSafeLink(link) {
  if (!link || link === "#") return "/contact-us";
  return link;
}

export default function CommonIndustryResults({
  title,
  orangeText,
  subtitle,
  cards = [],
}) {
  if (!title && !orangeText && !cards?.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {(title || orangeText || subtitle) && (
          <div className={styles.header}>
            {(title || orangeText) && (
              <h2 className={styles.heading}>
                {title && <span>{title} </span>}
                {orangeText && (
                  <span className={styles.orangeText}>{orangeText}</span>
                )}
              </h2>
            )}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}

        {cards.length > 0 && (
          <div className={styles.grid}>
            {cards.map((card, index) => (
              <article
                key={card?.id || `${card?.metric || "card"}-${index}`}
                className={styles.card}
              >
                {card?.metric && (
                  <p className={styles.metric}>{card.metric}</p>
                )}
                {card?.metricLabel && (
                  <p className={styles.metricLabel}>{card.metricLabel}</p>
                )}

                <hr className={styles.divider} />

                <RichText content={card?.para} className={styles.para} />

                <div className={styles.footer}>
                  {card?.industry && (
                    <p className={styles.industry}>{card.industry}</p>
                  )}
                  {card?.buttonLabel && (
                    <Link
                      href={getSafeLink(card?.buttonUrl)}
                      className={styles.cta}
                    >
                      {card.buttonLabel}
                      <svg
                        className={styles.ctaArrow}
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
