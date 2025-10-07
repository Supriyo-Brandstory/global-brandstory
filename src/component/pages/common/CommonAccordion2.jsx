"use client";
import React, { useState } from "react";
import Image from 'next/image';
import styles from "@/style/common/commonAccordion2.module.css";
import Link from "next/link";

const CommonAccordion2 = ({ title, highlited, description, items, button, buttonLink }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
 
    return (
        <div className={styles.wrapper}>
            {/* Left Side Title */}
            <div className={styles.text}>
                {title && <h2 className={styles.title}>{title}</h2>}
                {highlited && <h2 className={styles.highlited}>{highlited}</h2>}
                {description && <p className={styles.description} dangerouslySetInnerHTML={{__html: description}} />}
                {button && <Link className={styles.btn} href={buttonLink}>{button}</Link>}
            </div>

            {/* Accordion Right Side */}
            <div className={styles.accordionWrapper}>
                {items?.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ""
                            }`}
                    >
                        <button
                            className={styles.accordionHeader}
                            onClick={() => toggleItem(index)}
                        >
                            <h4>{item.title}</h4>
                            <div className={styles.arrowContainer}>
                                <Image
                                  src="/images/arrow-down.webp"
                                  alt="arrow down"
                                  width={24}
                                  height={24}
                                  className={`${styles.arrow} ${
                                    activeIndex === index ? styles.flip : ''
                                  }`}
                                />
                            </div>
                        </button>

                        {activeIndex === index && (
                            <div className={styles.accordionContent}>
                                <p>{item.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommonAccordion2;
