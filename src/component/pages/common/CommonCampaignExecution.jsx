import React from "react";
import styles from "@/style/common/commonCampaignExecution.module.css";
import { BarChart3, Pin, Megaphone, FlaskConical, Settings2 } from "lucide-react";

const iconMap = {
  chart: BarChart3,
  pin: Pin,
  megaphone: Megaphone,
  flask: FlaskConical,
  settings: Settings2,
};

export const CommonCampaignExecution = ({ 
  title, 
  cards = []
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 
          className={styles.title} 
          dangerouslySetInnerHTML={{ __html: title }} 
        />
        
        <div className={styles.grid}>
          {cards.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || BarChart3;
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.iconContainer}>
                  <IconComponent size={20} strokeWidth={2.5} />
                </div>
                <div className={styles.cardContent}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
