"use client";
import styles from "@/style/common/commonTwoCard.module.css";

const CommonTwoCard = ({ heading, subheading, cards }) => {
  return (
    <section className={styles.seoSection}>
      <div className={styles.header}>
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </div>

      <div className={styles.grid}>
        {cards?.map((card, index) => (
          <div key={index} className={`${styles.card} ${index == 0 ? `${styles.local}`:''}`}>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommonTwoCard;
