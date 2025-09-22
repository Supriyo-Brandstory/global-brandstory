"use client";
import React, { useState } from "react";
import styles from "@/style/common/commonAccordion2.module.css"; // new CSS module

const CommonAccordion2 = ({ title, highlited, description, items }) => {
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
                {/* {description && <p className={styles.description}>{description}</p>} */}
                {description && <p className={styles.description} dangerouslySetInnerHTML={{__html: description}} />}
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
                            <div
                                className={`${styles.icon} ${activeIndex === index ? styles.rotate : ""
                                    }`}
                            >
                                {/* Down Arrow */}
                            <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_i_192_122)">
                                <rect x="0.5" y="0.5" width="43" height="41" rx="5.5" stroke="black"/>
                                <path d="M21.2929 33.2071C21.6834 33.5976 22.3166 33.5976 22.7071 33.2071L29.0711 26.8431C29.4616 26.4526 29.4616 25.8195 29.0711 25.4289C28.6805 25.0384 28.0474 25.0384 27.6569 25.4289L22 31.0858L16.3431 25.4289C15.9526 25.0384 15.3195 25.0384 14.9289 25.4289C14.5384 25.8195 14.5384 26.4526 14.9289 26.8431L21.2929 33.2071ZM22 9.5L21 9.5L21 32.5L22 32.5L23 32.5L23 9.5L22 9.5Z" fill="#383838"/>
                                </g>
                                <defs>
                                <filter id="filter0_i_192_122" x="0" y="0" width="44" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="4"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_192_122"/>
                                </filter>
                                </defs>
                            </svg>


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
