import React from "react";
import styles from "@/style/common/commonImageGrid.module.css";

export const CommonImageGrid = ({ images }) => {
  return (
    <section className={styles.CommonImageGrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {images.map((img, index) => (
            <div key={index} className={styles.card}>
              <img
                src={img}
                alt={`Creative ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};