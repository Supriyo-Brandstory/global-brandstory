import React from "react";
import styles from "@/style/common/commonBusinessContext.module.css";
import * as Icons from "lucide-react";

export const CommonBusinessContext = ({ title, cards }) => {
  return (
    <section className={styles.CommonBusinessContext}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </div>

        <div className={styles.grid}>
          {cards.map((card, index) => {
            const IconComponent = Icons[card.icon];
            return (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    {IconComponent && <IconComponent size={24} />}
                  </div>
                  <span className={styles.number}>{card.number}</span>
                </div>
                <div className={styles.cardContent}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <div className={styles.bottomLine}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};