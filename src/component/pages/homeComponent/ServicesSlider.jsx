"use client";
import React, { useState } from "react";
import styles from "@/style/homepage.module.css";

const serviceData = [
    {
        id: 1,
        title: "Development",
        subtitle: "Smart tech. Built for today — and tomorrow.",
        description:
            "High-performing websites, apps, and platforms — built to scale, load fast, and stay secure. From front-end finesse to back-end reliability, every build is engineered for long-term growth.",
    },
    {
        id: 2,
        title: "Branding",
        subtitle: "More than a look — it’s how you’re remembered.",
        description: "A clear identity that leaves a lasting impression. Logos, language, and visuals come together to reflect purpose, personality, and positioning.",
    },
    {
        id: 3,
        title: "Consulting",
        subtitle: "Insight-led direction when it matters most.",
        description: "Strategic clarity when it’s needed most. Whether scaling, pivoting, or launching — gain a focused roadmap grounded in data, business goals, and market realities.",
    },
    {
        id: 4,
        title: "Digital Marketing",
        subtitle: "Make every click count.",
        description: "Performance-first marketing that delivers. Ads, SEO, content, and automation all work in sync to drive visibility, engagement, and results — with measurable impact and full transparency.",
    },
    {
        id: 5,
        title: "Creative & Media Production",
        subtitle: "Creative that connects — and converts.",
        description: "Compelling visuals and stories that resonate. From brand films to product shoots, every piece of content is designed to engage emotionally and perform commercially.",
    },
];

export default function ServicesSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((prev) => (prev + 1) % serviceData.length);
    const prev = () =>
        setActiveIndex((prev) => (prev - 1 + serviceData.length) % serviceData.length);

    return (
        <div className={styles.servicesSlider}>
            <h2 className={styles.servicesSlider_heading}>50+ Solutions. Endless Possibilities.</h2>

            <div className={styles.servicesSlider_sliderWrapper}>

                <div className={styles.servicesSlider_leftContent}>
                    <div className={styles.servicesSlider_contentBox}>
                        <div className={styles.servicesSlider_number}>
                            {String(serviceData[activeIndex].id).padStart(2, "0")}.
                        </div>
                        <div>
                            <h2 className={styles.servicesSlider_title}>{serviceData[activeIndex].title}</h2>
                            <h3 className={styles.servicesSlider_subtitle}>{serviceData[activeIndex].subtitle}</h3>
                            <p className={styles.servicesSlider_description}>{serviceData[activeIndex].description}</p>
                        </div>
                    </div>
                    <div className={styles.servicesSlider_navButtons}>
                        <button onClick={prev}>
                            <img src="/icons/left-arrow-round.svg" alt="arrow" />
                        </button>
                        <button onClick={next}>
                            <img src="/icons/right-arrow-round.svg" alt="arrow" />
                        </button>
                        <div className={styles.servicesSlider_dots}>
                            {serviceData.map((_, i) => (
                                <span
                                    key={i}
                                    className={`${styles.servicesSlider_dot} ${i === activeIndex ? styles.servicesSlider_activeDot : ""}`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.servicesSlider_rightVisual}>
                    <div className={styles.servicesSlider_stackContainer}>
                        {[...serviceData].reverse().map((item, i) => {
                            const actualIndex = serviceData.length - 1 - i;
                            const isActive = actualIndex === activeIndex;

                            return (
                                <div className="ss" key={item.id}>
                                    <div
                                        className={`${styles.servicesSlider_stackLayer} ${isActive ? styles.servicesSlider_active : ""}`}
                                        style={{ bottom: `${i * 50}px`, width: `${90 - i * 10}%` }}
                                        onMouseEnter={() => setActiveIndex(actualIndex)}
                                    >
                                        <span
                                            className={`
                                                ${i % 2 === 0 ? styles.servicesSlider_dottedLineRight : styles.servicesSlider_dottedLineLeft}
                                                ${item.id === 5 ? styles.servicesSlider_fifthdottedLineLeft : ''}
                                            `}
                                        ></span>

                                        <div onMouseEnter={() => setActiveIndex(actualIndex)}
                                            className={`
                                                ${styles.servicesSlider_labelBox}
                                                ${isActive ? styles.servicesSlider_activeLabel : ""}
                                                ${i % 2 === 0 ? styles.servicesSlider_leftLabel : styles.servicesSlider_rightLabel}
                                            `}
                                            style={{ top: `${item.id === 5 ? '140%' : ''}` }}
                                        >
                                            {`0${item.id}. ${item.title}`}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
