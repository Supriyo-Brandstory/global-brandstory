'use client'
import { useState } from 'react'
import styles from '@/style/common/commonOptionSelector2.module.css'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export const CommonOptionSelector2 = ({ title, description, footer, options, splitRatio = 0.4 }) => {
  const [selected, setSelected] = useState(0)
  const [fade, setFade] = useState(false)

  const handleSelect = (index) => {
    if (index === selected) return
    setFade(true)
    setTimeout(() => {
      setSelected(index)
      setFade(false)
    }, 300)
  }

  // ensure splitRatio stays between 0–1
  const safeRatio = Math.min(Math.max(splitRatio, 0), 1)

  return (
    <div className={styles.frame}>
      <h2
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className={styles.container}>
        <div
          className={styles.optionList}
          style={{ flex: safeRatio }}
        >
          {options.map((opt, index) => (
            <div key={index} className={styles.optionWrapper}>
              <button
                onClick={() => handleSelect(index)}
                className={`${styles.optionBtn} ${selected === index ? styles.active : ''}`}
              >
                {opt.heading}
              </button>
              {selected === index && (
                <div className={`${styles.optionContentMobile} ${fade ? styles.fadeOut : ''}`}>
                  {typeof opt.description === "string" ? (
                    <div dangerouslySetInnerHTML={{ __html: opt.description }} />
                  ) : (
                    <BlocksRenderer
                      content={opt.description}
                      blocks={{
                        paragraph: ({ children }) => (
                          <p className="!text-white">{children}</p>
                        ),
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {options[selected]?.description &&
          (typeof options[selected].description === "string" ? (
            <div
              className={`${styles.optionContent} ${styles.desktopOnly} ${fade ? styles.fadeOut : ''}`}
              style={{ flex: 1 - safeRatio }}
              dangerouslySetInnerHTML={{ __html: options[selected].description }}
            />
          ) : (
            <div className={`${styles.optionContent} ${styles.desktopOnly} ${fade ? styles.fadeOut : ''}`}
              style={{ flex: 1 - safeRatio }}>
              <BlocksRenderer
                content={options[selected].description}
                blocks={{
                  paragraph: ({ children }) => (
                    <p className="!text-white">{children}</p>
                  ),
                }}
              />
            </div>
          ))}

      </div>
      {footer && <p className={styles.description} dangerouslySetInnerHTML={{ __html: footer }} />}
    </div>
  )
}
