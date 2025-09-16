import React from 'react'
import styles from '@/style/common/commponBanner.module.css'

export const CommonBanner = ({heading, paragraph, paragraph2, buttonLink,buttonText}) => {
    return (
        <div className={styles.seoBanner}>
            <div className={styles.seoBannerContent}>
                <h1 className=''><div dangerouslySetInnerHTML={{__html: heading}}></div></h1>
                <div className={styles.seoBannerParagraph}>
                    <div dangerouslySetInnerHTML={{__html: paragraph}}></div>
                    <div dangerouslySetInnerHTML={{__html: paragraph2}}></div>
                </div>
                <div className={styles.seoBannerButton}>
                    <a href={buttonLink} className={styles.seoBannerButtonLink}>{buttonText}</a>
                </div>
            </div>
        </div>
    )
}
 