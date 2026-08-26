import React from 'react'
import styles from '@/style/common/commonAbout.module.css'
import SafeImg from './SafeImg'

const CommonAbout = ({
    title = null,
    subtitle = null,
    text1 = null,
    points = [],
    text2 = null,
    imageSrc = null,
    imageAlt = "",
    imageReverse = false,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.textBox}>
                {title && <div dangerouslySetInnerHTML={{ __html: title }}></div>}
                {subtitle && <div dangerouslySetInnerHTML={{ __html: subtitle }}></div>}
            </div>

            <div className={`${styles.flexbox} ${imageReverse ? styles.reverse : ""}`}>
                <SafeImg
                    src={imageSrc}
                    alt={imageAlt || "Image"}
                    className={styles.image}
                    wrapperClassName={styles.imageBox}
                />

                {(text1 || points?.length > 0 || text2) && (
                    <div className={styles.points}>
                        {text1 && <h4 dangerouslySetInnerHTML={{ __html: text1 }}></h4>}
                        {points?.length > 0 && (
                            <ul>
                                {points.map((point, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                                ))}
                            </ul>
                        )}
                        {text2 && <h4 dangerouslySetInnerHTML={{ __html: text2 }} />}
                    </div>
                )}
            </div>
        </div>
    )
}


export default CommonAbout
