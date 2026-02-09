'use client'
import styles from '@/style/common/commonBigIndex.module.css'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export const CommonBigIndex = ({ heading, description, data, footer, caseLabel = null, paddingBottom }) => {
  console.log("consoling bottom para from real results : ", footer)
  return (
    <div
      className={styles.frame}
      style={{ paddingBottom: typeof paddingBottom !== "undefined" ? paddingBottom : undefined }}
    >
      <h1 className={`${styles.heading} ${styles.center}`} dangerouslySetInnerHTML={{ __html: heading }} />

      {description && (typeof description === "string" ? (<p className={styles.center} dangerouslySetInnerHTML={{ __html: description }} />) : (<BlocksRenderer content={description} blocks={{ paragraph: ({ children }) => (<p className='!text-white'>{children}</p>) }} />))}

      <div className={styles.caseWrapper}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.caseBox} ${styles[`case${(index % 3) + 1}`]}`}
          >

            {caseLabel && <h3 className={styles.label}>{caseLabel}</h3>}
            <img
              className={styles.imageId}
              src={`/images/case-${index + 1}.png`}
              alt="image"
            />
            <h3 className={styles.caseTitle} dangerouslySetInnerHTML={{ __html: item.title }} />
            <p className={styles.caseDesc} dangerouslySetInnerHTML={{ __html: item.description }}></p>
            {item.points && <ul>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>}
          </div>
        ))}
      </div>

      {footer && (typeof footer === "string" ? (<p className={styles.center} style={{marginTop:"20px;"}} dangerouslySetInnerHTML={{ __html: footer }} />) : (<BlocksRenderer content={footer} blocks={{ paragraph: ({ children }) => (<p className='!text-white !mt-8'>{children}</p>) }} />))}
    </div>
  )
}
