'use client'
import { useState } from 'react'
import styles from '@/style/common/commonOptionSelector.module.css'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export const CommonOptionSelector = ({ title, description, options, footer, splitRatio = 0.4 }) => {
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
      {description && (typeof description === "string" ? (<p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />) : (
        <BlocksRenderer content={description} blocks={{ paragraph: ({ children }) => (<p className='!text-white'>{children}</p>) }} />
      ))}

      <div className={styles.container}>
        <div
          className={styles.optionList}
          style={{ flex: safeRatio }}
        >
          {options.map((opt, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`${styles.optionBtn} ${selected === index ? styles.active : ''}`}
            >
              {opt.heading}
            </button>
          ))}
        </div>

        {options[selected]?.description &&
          (typeof options[selected].description === "string" ? (
            <div
              className={`${styles.optionContent} ${fade ? styles.fadeOut : ""}`}
              style={{ flex: 1 - safeRatio }}
              dangerouslySetInnerHTML={{ __html: options[selected].description }}
            />
          ) : (
            <div
              className={`${styles.optionContent} ${fade ? styles.fadeOut : ""}`}
              style={{ flex: 1 - safeRatio }}
            >
              <BlocksRenderer
                content={options[selected].description}
                blocks={{
                  paragraph: ({ children }) => <p className='!text-[18px] !mb-4'>{children}</p>,
                  list: ({ children }) => <ul>{children}</ul>,
                  listItem: ({ children }) => <li>{children}</li>,
                }}
              />
            </div>
          ))}

      </div>

      {footer && <div className={styles.footer} dangerouslySetInnerHTML={{ __html: footer }} />}
    </div>
  )
}
