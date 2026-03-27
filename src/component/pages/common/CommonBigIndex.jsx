'use client'
import styles from '@/style/common/commonBigIndex.module.css'
import { useRef, useState, useEffect } from "react";
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export const CommonBigIndex = ({ heading, description, data, footer, caseLabel = null, paddingBottom }) => {
  const caseRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = caseRef.current;
    if (!el) return;
    const handleScroll = () => {
      const index = Math.round(el.scrollLeft / el.offsetWidth);
      setActiveIndex(index);
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (index) => {
    const el = caseRef.current;
    if (!el) return;
    el.scrollTo({ left: el.offsetWidth * index, behavior: "smooth" });
  };

  return (
    <div
      className={styles.frame}
      style={{ paddingBottom: typeof paddingBottom !== "undefined" ? paddingBottom : undefined }}
    >
      <h2 className={`${styles.heading} ${styles.center}`} dangerouslySetInnerHTML={{ __html: heading }} />

      {description && (typeof description === "string" ? (<p className={styles.center} dangerouslySetInnerHTML={{ __html: description }} />) : (<BlocksRenderer content={description} blocks={{ paragraph: ({ children }) => (<p className='!text-white'>{children}</p>) }} />))}

      <div className={styles.caseWrapper} ref={caseRef}>
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
      {data?.length > 1 && (
        <div className={styles.dots}>
          {data.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      )}

      {footer && (typeof footer === "string" ? (<p className={styles.center} dangerouslySetInnerHTML={{ __html: footer }} />) : (<BlocksRenderer content={footer} blocks={{ paragraph: ({ children }) => (<p className='!text-white !mt-8'>{children}</p>) }} />))}
    </div>
  )
}
