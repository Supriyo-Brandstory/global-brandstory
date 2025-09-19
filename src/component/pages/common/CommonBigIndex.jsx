import styles from '@/style/common/commonBigIndex.module.css'

export const CommonBigIndex = ({ heading, description, data,footer, showCaseLabel = false }) => {
  return (
    <div className={styles.frame}>
      <h1 className={`${styles.heading} ${styles.center}`}>
        {heading}
      </h1>
      <p className={styles.center}>
        {description}
      </p> 

      <div className={styles.caseWrapper}>
        {data.map((item, index) => (
          <div key={index} className={`${styles.caseBox} ${styles[`case${index + 1}`]}`}>
            {showCaseLabel && <h3>Case</h3>} {/* 👈 conditional */}
            <img
              className={styles.imageId}
              src={`/images/SMM/case-${index+1}.png`}
              alt="image"
            />
            <h3 className={styles.caseTitle}>{item.title}</h3>
            <p className={styles.caseDesc}>{item.description}</p>
            {item.points && <ul>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>}
          </div>
        ))}
      </div>

      {footer && <p className={`${styles.center} ${styles.footer}`}>
        {footer}
      </p>}
    </div>
  )
}
