"use client";

import { useRef, useState } from "react";
import styles from "@/style/common/commonGridBox3.module.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const CommonGridBox3 = ({ title, description, data, footer }) => {

  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth =
      el.querySelector(`.${styles.card}`)?.offsetWidth || el.clientWidth;

    const index = Math.round(el.scrollLeft / cardWidth);

    setActive(index);
  };

  return (
    <section className={styles.seoSection}>
      <div className={styles.header}>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />

        {description &&
          (typeof description === "string" ? (
            <p
              className={styles.footer}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <BlocksRenderer
              content={description}
              blocks={{
                paragraph: ({ children }) => (
                  <p className="!text-white">{children}</p>
                ),
              }}
            />
          ))}
      </div>

      <div
        className={styles.grid}
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {data?.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ "--card-color": card.bgcolor }}
          >
            {card.logo && (
              <img
                src={card.logo || "/placeholder.svg"}
                alt={card.title}
                className={styles.cardLogo}
              />
            )}

            <h4>{card.title}</h4>

            {card?.description &&
              (typeof card.description === "string" ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: card.description,
                  }}
                />
              ) : (
                <BlocksRenderer
                  content={card.description}
                  blocks={{
                    paragraph: ({ children }) => (
                      <p className="!text-white">{children}</p>
                    ),
                  }}
                />
              ))}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className={styles.indicators}>
        {data?.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${
              active === i ? styles.activeDot : ""
            }`}
          />
        ))}
      </div>

      {footer && <p className={styles.footer}>{footer}</p>}
    </section>
  );
};

export default CommonGridBox3;