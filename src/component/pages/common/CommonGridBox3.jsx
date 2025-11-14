import styles from "@/style/common/commonGridBox3.module.css"

const CommonGridBox3 = ({ title, description, data, footer }) => {
  return (
    <section className={styles.seoSection}>
      <div className={styles.header}>
        <h2 dangerouslySetInnerHTML={{__html:title}} />
        {description && <p dangerouslySetInnerHTML={{__html:description}} className={styles.footer} />}
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
      <br />
      {footer &&<p className={styles.footer}>{footer}</p>}
    </section>
  )
}

export default CommonGridBox3
