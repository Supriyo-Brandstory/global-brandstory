"use client";
import React from "react";
import styles from "@/style/common/commonImageGrid.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const CommonImageGrid = ({ images }) => {
  if (!images || images.length === 0) return null;

  const isSlider = images.length > 3;

  return (
    <section className={styles.CommonImageGrid}>
      <div className={styles.container}>
        {isSlider ? (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className={styles.mySwiper}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <img src={img} alt={`Creative ${index + 1}`} loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles.grid}>
            {images.map((img, index) => (
              <div key={index} className={styles.card}>
                <img src={img} alt={`Creative ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};