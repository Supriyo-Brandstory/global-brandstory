"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import SafeImg from "./SafeImg";
import styles from "@/style/common/reviewsCta.module.css";

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

function resolveMediaUrl(media, strapiUrl) {
  const raw =
    media?.url ||
    media?.formats?.large?.url ||
    media?.formats?.medium?.url ||
    media?.formats?.small?.url ||
    media?.formats?.thumbnail?.url ||
    media?.data?.attributes?.url ||
    media?.attributes?.url;

  if (!raw) return null;
  if (
    raw.startsWith("http://") ||
    raw.startsWith("https://") ||
    raw.startsWith("data:")
  ) {
    return raw;
  }

  const base = (strapiUrl || "").replace(/\/$/, "");
  if (!base) return raw.startsWith("/") ? raw : `/${raw}`;
  return `${base}${raw.startsWith("/") ? raw : `/${raw}`}`;
}

function getSafeLink(link) {
  if (!link || link === "#") return "/contact-us";
  if (link === "/contact") return "/contact-us";
  return link;
}

function Stars({ rating = 5 }) {
  const value = Math.max(0, Math.min(5, Number(rating) || 0));
  return (
    <div className={styles.stars} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < value ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

function initials(name = "") {
  return String(name)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

export default function CommonReviewsCta({
  ratingValue,
  ratingLabel,
  reviewsCount,
  reviewsCountLabel,
  reviews = [],
  ctaTitle,
  ctaOrangeText,
  ctaPara,
  ctaButtonLabel,
  ctaButtonUrl,
  ctaImage,
  ctaImageAlt,
}) {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE || "";
  const [activeIndex, setActiveIndex] = useState(0);
  const ctaImageUrl = resolveMediaUrl(ctaImage, strapiUrl);

  const total = reviews.length;

  const visibleCards = useMemo(() => {
    if (!total) return [];
    return reviews.map((review, index) => {
      const offset = (index - activeIndex + total) % total;
      let offsetKey = "hidden";
      if (offset === 0) offsetKey = "0";
      else if (offset === 1) offsetKey = "1";
      else if (offset === 2) offsetKey = "2";
      return { review, index, offsetKey };
    });
  }, [reviews, activeIndex, total]);

  const goPrev = () => {
    if (!total) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    if (!total) return;
    setActiveIndex((prev) => (prev + 1) % total);
  };

  if (!total && !ctaTitle && !ctaOrangeText) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <div className={styles.statsRow}>
            {(ratingValue || ratingLabel) && (
              <div className={styles.stat}>
                {ratingValue && (
                  <span className={styles.statValue}>{ratingValue}</span>
                )}
                <span className={styles.statStar} aria-hidden="true">
                  ★
                </span>
                {ratingLabel && (
                  <span className={styles.statLabel}>{ratingLabel}</span>
                )}
              </div>
            )}

            {(ratingValue || ratingLabel) &&
              (reviewsCount || reviewsCountLabel) && (
                <span className={styles.statDivider} aria-hidden="true" />
              )}

            {(reviewsCount || reviewsCountLabel) && (
              <div className={styles.stat}>
                {reviewsCount && (
                  <span className={styles.statValue}>{reviewsCount}</span>
                )}
                {reviewsCountLabel && (
                  <span className={styles.statLabel}>{reviewsCountLabel}</span>
                )}
              </div>
            )}
          </div>

          {total > 0 && (
            <div className={styles.reviewsStage}>
              {total > 1 && (
                <button
                  type="button"
                  className={`${styles.navBtn} ${styles.navPrev}`}
                  onClick={goPrev}
                  aria-label="Previous review"
                >
                  ‹
                </button>
              )}

              <div className={styles.stack}>
                {visibleCards.map(({ review, index, offsetKey }) => {
                  const avatarUrl = resolveMediaUrl(review?.avatar, strapiUrl);
                  const platformUrl = resolveMediaUrl(
                    review?.platformIcon,
                    strapiUrl
                  );

                  return (
                    <article
                      key={review?.id || `${review?.authorName || "review"}-${index}`}
                      className={styles.reviewCard}
                      data-offset={offsetKey}
                      aria-hidden={offsetKey !== "0"}
                    >
                      <div className={styles.reviewTop}>
                        {avatarUrl ? (
                          <SafeImg
                            src={avatarUrl}
                            alt={review?.authorName || ""}
                            className={styles.avatar}
                            width={40}
                            height={40}
                          />
                        ) : (
                          <span className={styles.avatarFallback}>
                            {initials(review?.authorName) || "BS"}
                          </span>
                        )}

                        <div className={styles.authorMeta}>
                          {review?.authorName && (
                            <p className={styles.authorName}>
                              {review.authorName}
                            </p>
                          )}
                          {review?.reviewDate && (
                            <p className={styles.reviewDate}>
                              {review.reviewDate}
                            </p>
                          )}
                        </div>

                        {platformUrl && (
                          <SafeImg
                            src={platformUrl}
                            alt=""
                            className={styles.platformIcon}
                            width={22}
                            height={22}
                          />
                        )}
                      </div>

                      <Stars rating={review?.rating} />

                      {review?.review && (
                        <p className={styles.reviewText}>{review.review}</p>
                      )}
                    </article>
                  );
                })}
              </div>

              {total > 1 && (
                <button
                  type="button"
                  className={`${styles.navBtn} ${styles.navNext}`}
                  onClick={goNext}
                  aria-label="Next review"
                >
                  ›
                </button>
              )}

              {total > 1 && (
                <div className={styles.dots}>
                  {reviews.map((review, index) => (
                    <button
                      key={review?.id || `dot-${index}`}
                      type="button"
                      className={`${styles.dot} ${
                        index === activeIndex ? styles.dotActive : ""
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className={`${styles.panel} ${styles.ctaPanel}`}>
          <div className={styles.ctaCopy}>
            {(ctaTitle || ctaOrangeText) && (
              <h2 className={styles.ctaHeading}>
                {ctaTitle && <span>{ctaTitle} </span>}
                {ctaOrangeText && (
                  <span className={styles.orangeText}>{ctaOrangeText}</span>
                )}
              </h2>
            )}

            <RichText content={ctaPara} className={styles.ctaPara} />

            {ctaButtonLabel && (
              <Link
                href={getSafeLink(ctaButtonUrl)}
                className={styles.ctaButton}
              >
                {ctaButtonLabel}
                <span className={styles.ctaArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            )}
          </div>

          {ctaImageUrl && (
            <div className={styles.ctaVisual}>
              <SafeImg
                src={ctaImageUrl}
                alt={ctaImageAlt || ctaTitle || "Campaign illustration"}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
