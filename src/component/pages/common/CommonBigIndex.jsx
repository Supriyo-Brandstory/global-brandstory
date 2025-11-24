'use client'
import styles from '@/style/common/commonBigIndex.module.css'

export const CommonBigIndex = ({ heading, description, data, footer, caseLabel = null, paddingBottom }) => {
  return (
    <div
      className={styles.frame} 
      style={{ paddingBottom: typeof paddingBottom !== "undefined" ? paddingBottom : undefined }}  
    >
      <h1 className={`${styles.heading} ${styles.center}`} dangerouslySetInnerHTML={{__html:heading}} />
      {/* <p className={styles.center}>
        {description && description}
      </p>  */}
      {description && <p className={styles.center} dangerouslySetInnerHTML={{__html:description}} />}

      <div className={styles.caseWrapper}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.caseBox} ${styles[`case${(index % 3) + 1}`]}`}
          >

            {caseLabel && <h3 className={styles.label}>{caseLabel}</h3>}
            <img
              className={styles.imageId}
              src={`/images/case-${index+1}.png`}
              alt="image"
            />
            {/* <h3 className={styles.caseTitle}>{item.title}</h3> */}
            <h3 className={styles.caseTitle} dangerouslySetInnerHTML={{__html:item.title}}/>
            <p className={styles.caseDesc} dangerouslySetInnerHTML={{__html: item.description}}></p>
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
