import React from "react";
import styles from "@/style/common/commonChallengesObjectives.module.css";
import { XCircle, CheckCircle2 } from "lucide-react";

export const CommonChallengesObjectives = ({ 
  title, 
  desc,
  challenges, 
  objectives 
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
        <p className={styles.desc} dangerouslySetInnerHTML={{ __html: desc }} />
        <div className={styles.gap}></div>
        <div className={styles.grid}>
          {/* Challenges Card */}
          <div className={styles.card} data-type="challenges">
            <div className={styles.cardHeader}>
              <div className={styles.headerIcon}>
                <XCircle size={28} />
              </div>
              <h3>{challenges.title}</h3>
            </div>
            <ul className={styles.list}>
              {challenges.items.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <div className={styles.itemIcon}></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Objectives Card */}
          <div className={styles.card} data-type="objectives">
            <div className={styles.cardHeader}>
              <div className={styles.headerIcon}>
                <CheckCircle2 size={28} />
              </div>
              <h3>{objectives.title}</h3>
            </div>
            <ul className={styles.list}>
              {objectives.items.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <CheckCircle2 className={styles.itemIcon} size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
