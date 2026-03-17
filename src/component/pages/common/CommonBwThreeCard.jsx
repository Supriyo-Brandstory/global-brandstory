"use client";

import React, { useRef, useState } from "react";
import styles from "@/style/common/commonBwThreeCard.module.css";

export const CommonBwThreeCard = ({
  title,
  description,
  footer,
  cardData,
  rightPadding,
  paddingBottom,
}) => {

  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth =
      el.querySelector(`.${styles.card}`)?.offsetWidth || el.clientWidth;

    const index = Math.round(el.scrollLeft / cardWidth);

    setActive(index);
  };

  return (
    <div
      className={styles.frame}
      style={{
        paddingBottom:
          typeof paddingBottom !== "undefined" ? paddingBottom : undefined,
      }}
    >
      <h2
        className={styles.heading}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <p
        className={styles.subHeading}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div
        className={styles.cardWrapper} ref={scrollRef}
        onScroll={handleScroll}
      >
        {cardData?.map((item, index) => (
          <div     key={index}
            className={`
              ${styles.card}
              ${index === 0 ? styles.firstBox : ""}
              ${index === 2 ? styles.thirdBox : ""}
            `}
            style={{
              paddingRight: rightPadding ? rightPadding : undefined,
            }}
          >
            <h3 dangerouslySetInnerHTML={{ __html: item.title }} />

            <p
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>

      {/* indicators */}
      <div className={styles.indicators}>
        {cardData?.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${
              active === i ? styles.activeDot : ""
            }`}
          />
        ))}
      </div>

      <p className={styles.footer}>{footer}</p>
    </div>
  );
};