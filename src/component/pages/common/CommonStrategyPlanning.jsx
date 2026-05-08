import React from "react";
import styles from "@/style/common/commonStrategyPlanning.module.css";
import { Users, Search, Layers, Pin, DollarSign } from "lucide-react";

const iconMap = {
  users: Users,
  search: Search,
  layers: Layers,
  pin: Pin,
  dollar: DollarSign,
};

export const CommonStrategyPlanning = ({ 
  title, 
  index, 
  items = [] 
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 
          className={styles.title} 
          dangerouslySetInnerHTML={{ __html: title }} 
        />
        
        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div>
          <div className={styles.list}>
            {items.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Layers;
              return (
                <div key={idx} className={styles.itemWrapper}>
                  <div className={styles.dot}></div>
                  <div className={styles.card}>
                    <div className={styles.iconContainer}>
                      <IconComponent size={22} strokeWidth={2.5} />
                    </div>
                    <div className={styles.content}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
