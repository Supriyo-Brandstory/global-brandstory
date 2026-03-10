"use client";
import { useRef, useState, useEffect } from "react";
import styles from "@/style/common/commonTwoCard.module.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const CommonTwoCard = ({ heading, subheading, highlight, cards, subheadingMaxWidth, footer, renderType }) => {
  const gridRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const handleScroll = () => {
      const cardWidth = el.offsetWidth;
      const index = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (index) => {
    const el = gridRef.current;
    if (!el) return;
    el.scrollTo({ left: el.offsetWidth * index, behavior: "smooth" });
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 dangerouslySetInnerHTML={{ __html: heading }} />
        {subheading && (
          typeof subheading === "string" ? (
            <p style={{ maxWidth: subheadingMaxWidth || "1200px", margin: "0 auto" }} dangerouslySetInnerHTML={{ __html: subheading }} />
          ) : (
            <BlocksRenderer content={subheading} />
          )
        )}
        {highlight && <h3>{highlight}</h3>}
      </div>

      <div className={styles.grid} ref={gridRef}>
        {cards?.map((card, index) => (
          <div key={index} className={`${styles.card} ${index === 0 ? styles.local : ""}`}>
            <h4>{card.title}</h4>
            {renderType === "dynamic" && card.para ? (
              <BlocksRenderer content={card.para} />
            ) : card.para ? (
              <p dangerouslySetInnerHTML={{ __html: card.description }} />
            ) : card.description ? (
              <p dangerouslySetInnerHTML={{ __html: card.description }} />
            ) : null}
          </div>
        ))}
      </div>

      {/* Dot indicators — only visible on mobile via CSS */}
      {cards?.length > 1 && (
        <div className={styles.dots}>
          {cards.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      )}

      {footer && (
        typeof footer === "string" ? (
          <p dangerouslySetInnerHTML={{ __html: footer }} />
        ) : (
          <BlocksRenderer content={footer} />
        )
      )}
    </section>
  );
};

export default CommonTwoCard;