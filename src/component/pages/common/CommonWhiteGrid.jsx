"use client";

import styles from "@/style/common/commonWhiteGrid.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CommonWhiteGrid = ({ data }) => {
  return (
    <div className={styles.frame}>
      <h2 className={styles.title}>Global Impact - Proven Performance</h2>

      {/* Desktop Grid */}
      <div className={styles.gridWrapper}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              item.size === "lg" ? styles.lg : styles.sm
            }`}
          >
            <div className={styles.statRow}>
              <h2 className={styles.stat}>{item.stat}</h2>
              {item.statIcon && (
                <img src={item.statIcon} alt="" className={styles.icon} />
              )}
            </div>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.desc}>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className={styles.mobileSlider}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <div className={styles.statRow}>
                  <h2 className={styles.stat}>{item.stat}</h2>
                  {item.statIcon && (
                    <img src={item.statIcon} alt="" className={styles.icon} />
                  )}
                </div>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.desc}>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CommonWhiteGrid;