"use client";

import React, { useRef, useState } from "react";
import styles from "@/style/common/commonBwCard.module.css";

export const CommonBwCrd = ({ title, description, footer, cardData }) => {

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
    className={styles.frame}>
      <h2 className={styles.heading}>{title}</h2>

      <p 
      className={styles.subHeading}>{description}</p>

      <div className={styles.cardWrapper}
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {cardData?.map((item, index) => (
          <div key={index}
            className={`${styles.card} ${
              index === 0 ? styles.firstBox : ""
            }`}
          >
            <h3>{item.title}</h3>

            <div
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