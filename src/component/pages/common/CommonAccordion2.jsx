"use client";
import React, { useState } from "react";
import styles from "@/style/common/commonAccordion2.module.css";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import SafeImage from "./SafeImage";

const CommonAccordion2 = ({ title, highlited, description, items, button, buttonLink, splitRatio }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleItem = (index) => setActiveIndex(activeIndex === index ? null : index);

    // Default split ratio 0.55 (55% text / 45% accordion)
    const leftRatio = splitRatio ? splitRatio : 0.55;
    const rightRatio = 1 - leftRatio;

    // console.log("consoling the items in CommonAccordion2 : ", items);

    return (
        <div className={styles.wrapper}>
            {/* Left Side */}
            <div className={styles.text} style={{ flex: `${leftRatio} 1 0` }}>
                {title && <h2 dangerouslySetInnerHTML={{__html:title}} className={styles.title} />}
                {highlited && <h2 className={styles.highlited}>{highlited}</h2>}
                {/* {description && <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />} */}
                {description && (typeof description === 'string' ? (<p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />):(<BlocksRenderer content={description} blocks={{ paragraph: ({ children }) => (<p className="!text-white">{children}</p>) }}  />))}
                {button && <Link className={styles.btn} href={buttonLink}>{button}</Link>}
            </div>

            {/* Right Side Accordion */}
            <div className={styles.accordionWrapper} style={{ flex: `${rightRatio} 1 0` }}>
                {items?.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ""}`}
                    >
                        <button className={styles.accordionHeader} onClick={() => toggleItem(index)}>
                            <h4>{item.title}</h4>
                            <div className={styles.arrowContainer}>
                                <SafeImage
                                    src="/images/arrow-down.webp"
                                    alt="arrow down"
                                    width={24}
                                    height={24}
                                    className={`${styles.arrow} ${activeIndex === index ? styles.flip : ''}`}
                                />
                            </div>
                        </button>

                        {activeIndex === index && (
                            <div className={styles.accordionContent}>
                                {/* <div dangerouslySetInnerHTML={{__html:item.content}} /> */}
                                {(item.content || item.para) && (typeof item.content === 'string' ? (<div dangerouslySetInnerHTML={{__html:item.content}} />) : (<BlocksRenderer content={item.para} blocks={{ paragraph: ({ children }) => (<p>{children}</p>) }} />))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommonAccordion2;
