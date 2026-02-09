"use client";
import styles from "@/style/common/commonTwoCard.module.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const CommonTwoCard = ({ heading, subheading, highlight, cards, subheadingMaxWidth }) => {
  return (
    <section className={styles.seoSection}>
      <div className={styles.header}>
        <h2 dangerouslySetInnerHTML={{ __html: heading }} />
        {/* <p style={{ maxWidth: subheadingMaxWidth || "1200px", margin: "0 auto" }} dangerouslySetInnerHTML={{__html:subheading}} /> */}
        {subheading && (typeof subheading === "string" ? (<p style={{ maxWidth: subheadingMaxWidth || "1200px", margin: "0 auto" }} dangerouslySetInnerHTML={{ __html: subheading }} />
        ) : (<BlocksRenderer content={subheading} />))}
        {highlight && <h3>{highlight}</h3>}
      </div>

      <div className={styles.grid}>
        {cards?.map((card, index) => (
          <div key={index} className={`${styles.card} ${index == 0 ? styles.local : ""}`}>
            <h4>{card.title}</h4>
            {card?.description || card?.para && (typeof card.para === "string" ? (<p dangerouslySetInnerHTML={{ __html: card.description }} />
            ) : (<BlocksRenderer content={card.para} />))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommonTwoCard;
