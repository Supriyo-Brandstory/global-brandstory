"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/style/common/commonImages.module.css";

const CommonImages = ({ images = [] }) => {
  const [index, setIndex] = useState(0);
  const viewportRef = useRef(null); // for mobile scroll
  const trackRef = useRef(null);    // for desktop transform ✅

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const itemsPerView = isMobile ? 1 : 2;
  const maxIndex = Math.max(images.length - itemsPerView, 0);

  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));

  /** Desktop transform — applied to .track, not .viewport */
  useEffect(() => {
    if (!isMobile && trackRef.current) {
      trackRef.current.style.transform = `translateX(-${
        index * (100 / itemsPerView)
      }%)`;
    }
  }, [index, isMobile, itemsPerView]);

  /** Mobile scroll indicator sync */
  const handleScroll = () => {
    if (!viewportRef.current) return;
    const scrollLeft = viewportRef.current.scrollLeft;
    const width = viewportRef.current.clientWidth;
    setIndex(Math.round(scrollLeft / width));
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div
          className={styles.viewport}
          onScroll={isMobile ? handleScroll : undefined}
          ref={viewportRef} // ✅ viewport ref for scroll tracking
        >
          <div
            className={styles.track}
            ref={trackRef} // ✅ track ref for transform
          >
            {images.map((src, i) => (
              <div className={styles.slide} key={i}>
                <img src={src} alt={`slide-${i}`} />
              </div>
            ))}
          </div>
        </div>

        {!isMobile && (
          <div className={styles.controls}>
            <button className={styles.navBtn} onClick={prev}>
              <img src="/icons/arrow-round-left.svg" alt="Previous" />
            </button>
            <button className={styles.navBtn} onClick={next}>
              <img src="/icons/arrow-round-right.svg" alt="Next" />
            </button>
          </div>
        )}

        {isMobile && (
          <div className={styles.indicators}>
            {images.map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${i === index ? styles.active : ""}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonImages;