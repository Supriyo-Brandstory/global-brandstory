import styles from "@/style/common/commonGridBoxBlack.module.css";

const CommonGridBoxBlack = ({ title, data = [] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{title}</div>

      <div className={styles.grid}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>
              <img src={item.icon} alt="icon"/>
            </div>
            <div className={styles.cardTitle}>{item.title}</div>
            <div className={styles.cardContent}>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonGridBoxBlack;
