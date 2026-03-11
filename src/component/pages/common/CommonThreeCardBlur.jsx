"use client";

import { useRef, useState } from "react";
import styles from '@/style/common/commonThreeCardBlur.module.css'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export const CommonThreeCardBlur = ({ heading, subheading, data, footer }) => {

    const scrollRef = useRef(null)
    const [active, setActive] = useState(0)

    const handleScroll = () => {
        const el = scrollRef.current
        if (!el) return

        const cardWidth = el.querySelector(`.${styles.card}`)?.offsetWidth || el.clientWidth
        const index = Math.round(el.scrollLeft / cardWidth)

        setActive(index)
    }

    return (
        <div className={styles.frame}>

            {heading && (
                <h2
                    className={styles.heading}
                    dangerouslySetInnerHTML={{ __html: heading }}
                />
            )}

            {subheading && (
                typeof subheading === "string" ? (
                    <p
                        className={styles.subHeading}
                        dangerouslySetInnerHTML={{ __html: subheading }}
                    />
                ) : (
                    <BlocksRenderer
                        content={subheading}
                        blocks={{
                            paragraph: ({ children }) => (
                                <p className='!text-white'>{children}</p>
                            )
                        }}
                    />
                )
            )}

            <div
                className={styles.cards}
                ref={scrollRef}
                onScroll={handleScroll}
            >
                {data?.map((item, idx) => (
                    <div
                        key={idx}
                        className={styles.card}
                        style={{ '--bg': `url(${item.bg})` }}
                    >
                        <img
                            src={item.logo}
                            alt={item.title}
                            className={styles.logo}
                        />

                        <h3>{item.title}</h3>

                        {item?.description && (
                            typeof item.description === "string" ? (
                                <p>{item.description}</p>
                            ) : (
                                <BlocksRenderer
                                    content={item.description}
                                    blocks={{
                                        paragraph: ({ children }) => (
                                            <p className='!text-[#ccc]'>{children}</p>
                                        )
                                    }}
                                />
                            )
                        )}
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className={styles.indicators}>
                {data?.map((_, i) => (
                    <span
                        key={i}
                        className={`${styles.dot} ${active === i ? styles.activeDot : ""}`}
                    />
                ))}
            </div>

            {footer && (
                typeof footer === "string" ? (
                    <p
                        className={styles.footer}
                        dangerouslySetInnerHTML={{ __html: String(footer || "") }}
                    />
                ) : (
                    <BlocksRenderer
                        content={footer}
                        blocks={{
                            paragraph: ({ children }) => (
                                <p className='!text-[#ccc]'>{children}</p>
                            )
                        }}
                    />
                )
            )}

        </div>
    )
}