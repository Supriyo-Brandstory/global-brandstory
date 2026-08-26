import styles from "@/style/ppc.module.css";

export const StrapiThePeople = ({ data }) => {
  const points =
    data?.points?.map((item) => item?.point || item?.text || item?.para || item).filter(Boolean) ||
    [];

  return (
    <div className={styles.frame}>
      {data?.title && (
        <h2
          className={styles.heading}
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
      )}

      {data?.para && (
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: data.para }}
        />
      )}

      {data?.subtext && (
        <p
          className={styles.subtext}
          dangerouslySetInnerHTML={{ __html: data.subtext }}
        />
      )}

      {points.length > 0 && (
        <ul className={styles.list}>
          {points.map((point, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
      )}

      {data?.bottomPara && (
        <p
          className={styles.highlight}
          dangerouslySetInnerHTML={{ __html: data.bottomPara }}
        />
      )}
    </div>
  );
};

export default StrapiThePeople;
