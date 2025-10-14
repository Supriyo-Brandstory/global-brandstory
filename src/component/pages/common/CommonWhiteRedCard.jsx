// components/common/CommonWhiteRedCard.jsx
import styles from '@/style/common/commonWhiteRedCard.module.css'

export const CommonWhiteRedCard = ({ title, cards }) => {
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      
      <div className={styles.cardsContainer}>
        <div className={styles.redBg}>

        </div>
        <div className={styles.cardsWrapper}>
            {cards?.map((card, index) => (
                <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.name}>{card.name}</h3>
                  <p className={styles.role}>{card.role}</p>
                </div>

                <div className={styles.divider}></div>

                <p className={styles.testimonial}>{card.testimonial}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
