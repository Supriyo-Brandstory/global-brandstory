"use client";
import React from "react";
import styles from "@/style/common/commonLabels.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const CommonLabels = ({ title, data }) => {
  // ✅ Chunk data into groups of 4
  const chunkedData = [];
  for (let i = 0; i < data.length; i += 4) {
    chunkedData.push(data.slice(i, i + 4));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>

        {/* Desktop Grid */}
        <div className={styles.grid}>
          {data.map((item, index) => (
            <div key={index} className={styles.label}>
              {item}
            </div>
          ))}
        </div>

        {/* Mobile / Slider */}
        <div className={styles.mobileSlider}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {chunkedData.map((group, i) => (
              <SwiperSlide key={i}>
                <div className={styles.slideGrid}>
                  {group.map((item, idx) => (
                    <div key={idx} className={styles.label}>
                      {item}
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};