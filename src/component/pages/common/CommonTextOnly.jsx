import styles from "@/style/common/commonTextOnly.module.css";

const CommonTextOnly = ({ data }) => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      {data.map((block, i) => (
        <div key={i} className={styles.section}>
          
          {block.title && (
            <h2
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: block.title }}
            />
          )}

          {block.paragraphs?.map((p, idx) => (
            <p
              key={idx}
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}

          {block.list && (
            <ul className={styles.list}>
              {block.list.map((item, j) => (
                <li
                  key={j}
                  className={styles.text}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          )}

          {block.paragraphsAfter?.map((p, idx) => (
            <p
              key={idx}
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}

        </div>
      ))}
    </div>
    </div>
  );
};

export default CommonTextOnly;
