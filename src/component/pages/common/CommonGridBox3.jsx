import styles from "@/style/common/commonGridBox3.module.css"

const CommonGridBox3 = ({ title, description, data }) => {
  return (
    <section className={styles.seoSection}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
 
      <div className={styles.grid}>
        {data?.map((card, index) => (
          <div key={index} className={`${styles.card}`} style={{ '--card-color': card.bgcolor }}>
            {card.logo && <img src={card.logo || "/placeholder.svg"} alt={card.title} className={styles.cardLogo} />}
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CommonGridBox3
