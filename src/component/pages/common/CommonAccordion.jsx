"use client";
import React, { useState } from "react";
import styles from "@/style/common/commonAccordion.module.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const CommonAccordion = ({ title, subheding1, subheding2, items, footer, paddingBottom }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className={styles.CommonAccordion}
      style={{ paddingBottom: typeof paddingBottom !== "undefined" ? paddingBottom : undefined }}
    >
      {title && <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>}
      {subheding1 && <p dangerouslySetInnerHTML={{ __html: subheding1 }} />}
      {subheding2 && (
        typeof subheding2 === "string" ? (
          // HTML string
          <p
            className={styles.subheding2}
            dangerouslySetInnerHTML={{ __html: subheding2 }}
          />
        ) : (

          // Strapi Blocks : this is a demo for customizing the blocks

          // renderBlocks(subheding2)
          // <BlocksRenderer blocks={{
          //   paragraph: ({ children }) => (
          //     <p className={styles.subheading2}>{children}</p>
          //   ),
          //   heading: ({ children, level }) => {
          //     if (level === 1) return <h1 className="text-red-500">{children}</h1>;
          //     if (level === 2) return <h2 className="text-red-500">{children}</h2>;
          //     if (level === 3) return <h3 className="text-red-500">{children}</h3>;
          //   },
          //   link: ({ children, url }) => (
          //     <a href={url} className={styles.link}>
          //       {children}
          //     </a>
          //   ),
          // }} content={subheding2} />

          <BlocksRenderer blocks={{ paragraph: ({ children }) => (<p className="!text-white">{children}</p>) }} content={subheding2} />
        )
      )}

      <div className={styles.accordionWrapper}>
        {items?.map((item, index) => (
          <div key={index}>
            <div
              className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ""
                }`}
            >
              <button
                className={styles.accordionHeader}
                onClick={() => toggleItem(index)}
              >
                <h4>{item.title}</h4>
                <div className={styles.icon}>
                  {activeIndex === index ? (
                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 0L20.4593 17.25H0.540708L10.5 0Z" fill="#E73D26" />
                    </svg>
                  ) : (
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.8" d="M10 18L19.9593 0.75H0.0407076L10 18Z" fill="#E73D26" />
                    </svg>
                  )}
                </div>
              </button>
              <div className={`${styles.accordionContent} ${activeIndex === index ? styles.open : ''}`}>
                {item.content && (typeof item.content == "string" ? (<h5 dangerouslySetInnerHTML={{ __html: item.content }} />) : (<BlocksRenderer blocks={{ paragraph: ({ children }) => (<p className="!text-white !w-auto !text-[18px] !font-normal">{children}</p>) }} content={item.content} />))}
                {/* {item.content && <h5 dangerouslySetInnerHTML={{ __html: item.content }} />} */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {footer && (typeof footer == "string" ? <span dangerouslySetInnerHTML={{ __html: footer }} className="pt-10"></span> : <BlocksRenderer blocks={{ paragraph: ({ children }) => (<p className="!text-white">{children}</p>) }} content={footer} />)}
    </div>
  );
};

export default CommonAccordion;
