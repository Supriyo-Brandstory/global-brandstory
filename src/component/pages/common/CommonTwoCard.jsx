"use client";
import styles from "@/style/common/commonTwoCard.module.css";

const CommonTwoCard = ({ heading, subheading, highlight, cards, subheadingMaxWidth }) => {
  return (
    <section className={styles.seoSection}>
      <div className={styles.header}>
        <h2>{heading}</h2>
        {highlight && <h3>{highlight}</h3>}
        <p style={{ maxWidth: subheadingMaxWidth || "1200px", margin: "0 auto" }}>
          {subheading}
        </p>
      </div> 

      <div className={styles.grid}>
        {cards?.map((card, index) => (
          <div key={index} className={`${styles.card} ${index == 0 ? styles.local : ""}`}>
            <h4>{card.title}</h4>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: card.description }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommonTwoCard;
