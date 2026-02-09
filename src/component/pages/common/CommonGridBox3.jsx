"use client";
import styles from "@/style/common/commonGridBox3.module.css"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"

const CommonGridBox3 = ({ title, description, data, footer }) => {
  return (
    <section className={styles.seoSection}>
      <div className={styles.header}>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        {description && (typeof description === "string" ? (<p className={styles.footer} dangerouslySetInnerHTML={{ __html: description }} />) : (<BlocksRenderer content={description} blocks={{ paragraph: ({ children }) => (<p className='!text-white'>{children}</p>) }} />))}

        {/* {description && (typeof description === "string" ? (<p dangerouslySetInnerHTML={{ __html: description }} className={styles.footer} />) : (<BlocksRenderer content={description} blocks={{ paragraph: ({ children }) => (<p className="!text-white">{children}</p>) }} />))} */}
      </div>

      <div className={styles.grid}>
        {data?.map((card, index) => (
          <div key={index} className={`${styles.card}`} style={{ '--card-color': card.bgcolor }}>
            {card.logo && <img src={card.logo || "/placeholder.svg"} alt={card.title} className={styles.cardLogo} />}
            <h4>{card.title}</h4>
            {/* <p>{card.description}</p> */}
            {card?.description && (typeof card?.description === "string" ? (<p className={styles.card?.description} dangerouslySetInnerHTML={{ __html: card?.description }} />) : (<BlocksRenderer content={card?.description} blocks={{ paragraph: ({ children }) => (<p className='!text-white'>{children}</p>) }} />))}
          </div>
        ))}
      </div>
      <br />
      {footer && <p className={styles.footer}>{footer}</p>}
    </section>
  )
}

export default CommonGridBox3
