'use client'

import { useState, useEffect } from 'react'
import styles from '@/style/common/commonOptionSelector2.module.css'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export const CommonOptionSelector2 = ({
  title = '',
  description = '',
  footer = '',
  options = [],
  splitRatio = 0.4,
}) => {
  const safeOptions = Array.isArray(options) ? options : []

  const [selected, setSelected] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    if (selected >= safeOptions.length) {
      setSelected(0)
    }
  }, [safeOptions.length, selected])

  const handleSelect = (index) => {
    if (index === selected) return

    setFade(true)

    setTimeout(() => {
      setSelected(index)
      setFade(false)
    }, 300)
  }

  const safeRatio = Math.min(Math.max(splitRatio, 0), 1)
  const selectedOption = safeOptions[selected]

  const renderDescription = (content) => {
    if (!content) return null

    if (typeof content === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: content }} />
    }

    if (Array.isArray(content)) {
      return (
        <BlocksRenderer
          content={content}
          blocks={{
            paragraph: ({ children }) => (
              <p className="!text-white">{children}</p>
            ),
          }}
        />
      )
    }

    return null
  }

  if (!safeOptions.length) {
    return null
  }

  return (
    <div className={styles.frame}>
      {title && (
        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}

      {description && (
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      <div className={styles.container}>
        <div
          className={styles.optionList}
          style={{ flex: safeRatio }}
        >
          {safeOptions.map((opt, index) => (
            <div key={index} className={styles.optionWrapper}>
              <button
                type="button"
                onClick={() => handleSelect(index)}
                className={`${styles.optionBtn} ${selected === index ? styles.active : ''}`}
              >
                {opt?.heading || `Option ${index + 1}`}
              </button>

              {selected === index && opt?.description && (
                <div className={`${styles.optionContentMobile} ${fade ? styles.fadeOut : ''}`}>
                  {renderDescription(opt.description)}
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedOption?.description && (
          <div
            className={`${styles.optionContent} ${styles.desktopOnly} ${fade ? styles.fadeOut : ''}`}
            style={{ flex: 1 - safeRatio }}
          >
            {renderDescription(selectedOption.description)}
          </div>
        )}
      </div>

      {footer && (
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: footer }}
        />
      )}
    </div>
  )
}