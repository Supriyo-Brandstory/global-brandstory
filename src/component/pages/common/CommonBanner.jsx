import React from 'react'
import styles from '@/style/common/commponBanner.module.css'

export const CommonBanner = ({heading, paragraph, paragraph2, buttonLink,buttonText}) => {
    return (
        <div className={styles.seoBanner}>
            <div className={styles.seoBannerContent}>
                <h1><div dangerouslySetInnerHTML={{__html: heading}}></div></h1>
                <div className={styles.seoBannerParagraph}>
                    <p><div dangerouslySetInnerHTML={{__html: paragraph}}></div></p>
                    <p><div dangerouslySetInnerHTML={{__html: paragraph2}}></div></p>

                </div>
                <div className={styles.seoBannerButton}>
                    <a href={buttonLink} className={styles.seoBannerButtonLink}>{buttonText}</a>
                </div>
            </div>
        </div>
    )
}
