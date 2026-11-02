"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import "swiper/css";
import styles from "@/style/common/cardSlider.module.css";

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

function progressWidth(index, activeIndex, total) {
  if (total <= 1) return "72%";
  if (index === activeIndex) return "78%";
  const base = 28 + ((index + 1) / total) * 28;
  return `${Math.round(base)}%`;
}

export default function CommonCardSlider({
  label,
  title,
  orangeText,
  para,
  slides = [],
}) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!title && !orangeText && !slides?.length) return null;

  const canLoop = slides.length > 4;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {label && (
          <div className={styles.labelRow}>
            <span className={styles.labelLine} aria-hidden="true" />
            <span className={styles.label}>{label}</span>
            <span className={styles.labelLine} aria-hidden="true" />
          </div>
        )}

        <div className={styles.header}>
          {(title || orangeText) && (
            <h2 className={styles.heading}>
              {title && <span>{title} </span>}
              {orangeText && (
                <span className={styles.orangeText}>{orangeText}</span>
              )}
            </h2>
          )}

          <RichText content={para} className={styles.intro} />

          {slides.length > 1 && (
            <div className={styles.nav}>
              <button
                type="button"
                className={styles.navBtn}
                aria-label="Previous slide"
                onClick={() => swiperInstance?.slidePrev()}
              >
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M10 3L5 8l5 5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className={`${styles.navBtn} ${styles.navBtnActive}`}
                aria-label="Next slide"
                onClick={() => swiperInstance?.slideNext()}
              >
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M6 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {slides.length > 0 && (
          <div className={styles.sliderWrap}>
            <Swiper
              modules={[Navigation]}
              onSwiper={setSwiperInstance}
              spaceBetween={18}
              slidesPerView={4}
              grabCursor
              loop={canLoop}
              speed={600}
              watchOverflow
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
                0: { slidesPerView: 1.15, spaceBetween: 12 },
                480: { slidesPerView: 1.35, spaceBetween: 14 },
                640: { slidesPerView: 2, spaceBetween: 16 },
                900: { slidesPerView: 3, spaceBetween: 16 },
                1100: { slidesPerView: 4, spaceBetween: 18 },
              }}
              className={styles.swiper}
            >
              {slides.map((slide, index) => {
                const number =
                  slide?.number || String(index + 1).padStart(2, "0");
                const isActive = index === activeIndex;

                return (
                  <SwiperSlide key={slide?.id || `${number}-${index}`}>
                    <article
                      className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                      style={{ "--card-delay": `${Math.min(index, 4) * 70}ms` }}
                    >
                      <div className={styles.numberRow}>
                        <span className={styles.number}>{number}</span>
                        <span className={styles.numberLine} aria-hidden="true" />
                      </div>

                      {(slide?.title || slide?.orangeText) && (
                        <h3 className={styles.cardTitle}>
                          {slide?.title && <span>{slide.title} </span>}
                          {slide?.orangeText && (
                            <span className={styles.orangeText}>
                              {slide.orangeText}
                            </span>
                          )}
                        </h3>
                      )}

                      <RichText
                        content={slide?.para}
                        className={styles.cardPara}
                      />

                      <div className={styles.progressTrack} aria-hidden="true">
                        <div
                          className={styles.progressFill}
                          style={{
                            width: progressWidth(
                              index,
                              activeIndex,
                              slides.length
                            ),
                          }}
                        />
                      </div>
                    </article>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}
