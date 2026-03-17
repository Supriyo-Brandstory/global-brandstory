import styles from "@/style/common/commonWhiteGrid.module.css";

const CommonWhiteGrid = ({ data }) => {
  return (
    <div className={styles.frame}>
      <h2 className={styles.title}>Global Impact - Proven Performance</h2>

      <div className={styles.gridWrapper 
      }>
        {
        data.map((item, index) => (
          <div

            key={index}
            className=
            {`${styles.card} ${item.size === "lg" ? styles.lg : styles.sm}`}
          >
            <div 
            className={styles.statRow}>
              <h2 className={styles.stat}>{item.stat}</h2>
              {item.statIcon && <img src={item.statIcon} alt="" className={styles.icon} />}
            </div>
            <h2 
            className={styles.cardTitle}>{item.title}
            </h2>
            <
              p className={styles.desc}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonWhiteGrid;
