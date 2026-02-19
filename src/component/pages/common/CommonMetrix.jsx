'use client'
import React, { useRef, useState } from "react";
import styles from "@/style/common/commonMetrix.module.css";

/**
 * Converts "1:2" → "1fr 2fr"
 */
const parseRatio = (ratio) => {
  if (!ratio || typeof ratio !== "string") return "1fr 1.3fr";
  const parts = ratio.split(":").map(Number);
  if (parts.length !== 2 || parts.some(isNaN)) return "1fr 1.3fr";
  const [left, right] = parts;
  return `${left}fr ${right}fr`;
};

/** Chunk an array into groups of n */
const chunkArray = (arr, n) => {
  const result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
};

const CommonMetrix = ({
  title,
  description,
  points = [],
  stats = [],
  image = null,
  ratio = "1:1.3",
  button = null,
  butnLink = "#",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const hasStats = stats.length > 0;
  const hasImage = !!image;

  // Group stats into pairs for mobile
  const statPairs = chunkArray(stats, 2);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (i) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ left: i * scrollRef.current.offsetWidth, behavior: "smooth" });
    setActiveIndex(i);
  };

  const TextContent = ({ mobile = false }) => (
    <>
      {title && <h2 className={`${styles.title} ${mobile ? styles.mobileTitle : ""}`}>{title}</h2>}
      {description && <p className={`${styles.description} ${mobile ? styles.mobileDescription : ""}`}>{description}</p>}
    </>
  );

  const PointsList = ({ mobile = false }) => (
    <>
      <ul className={`${styles.points} ${mobile ? styles.mobilePoints : ""}`}>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      {button && (
        <>
          <br />
          <a href={butnLink} className={styles.cta}>{button}</a>
        </>
      )}
    </>
  );

  return (
    <section className={styles.container}>
      {/* ─── DESKTOP LAYOUT (unchanged) ─── */}
      <div
        className={`${styles.wrapper} ${styles.desktopOnly}`}
        style={{ gridTemplateColumns: parseRatio(ratio) }}
      >
        {/* LEFT */}
        <div className={styles.left}>
          <TextContent />
          <PointsList />
        </div>

        {/* RIGHT */}
        <div className={styles.rightWrapper}>
          {hasStats && (
            <div className={styles.right}>
              {stats.map((item, index) => (
                <div key={index} className={styles.card}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <div className={styles.metric}>
                    <span className={styles.number}>{item.number}</span>
                    <span className={styles.metricDesc}>{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {hasImage && (
            <img src={image} alt="section visual" className={styles.imageRight} />
          )}
        </div>
      </div>

      {/* ─── MOBILE LAYOUT ─── */}
      <div className={styles.mobileOnly}>
        {/* 1. Title & Description */}
        <TextContent mobile />

        {/* 2. Image OR Swipeable Stats */}
        {hasImage && (
          <img src={image} alt="section visual" className={styles.mobileImage} />
        )}

        {/* 3. Points */}
        <PointsList mobile />

        {hasStats && (
          <div className={styles.mobileStatsBlock}>
            {/* Horizontal swipe — each slide is a PAIR of cards */}
            <div
              className={styles.mobileStatsScroll}
              ref={scrollRef}
              onScroll={handleScroll}
            >
              {statPairs.map((pair, pairIndex) => (
                <div key={pairIndex} className={styles.mobileStatSlide}>
                  {pair.map((item, cardIndex) => (
                    <div key={cardIndex} className={`${styles.card} ${styles.mobileStatCard}`}>
                      <h4 className={styles.cardTitle}>{item.title}</h4>
                      <div className={styles.metric}>
                        <span className={styles.number}>{item.number}</span>
                        <span className={styles.metricDesc}>{item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Dots — one per pair */}
            {statPairs.length > 1 && (
              <div className={styles.dots}>
                {statPairs.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Go to stats ${i * 2 + 1}–${i * 2 + 2}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CommonMetrix;