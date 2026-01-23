import React from 'react';
import styles from '@/style/common/commonBanner2.module.css';

export const CommonBanner2 = ({
  heading,
  paragraph,
  paragraph2,
  buttonLink,
  buttonText,
  points = [],
  imageBtn = null
}) => {
  const finalLink = (!buttonLink || buttonLink === '#') 
    ? '/our-work' 
    : buttonLink;

  const hasPoints = points.length > 0;

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.layout}>
        {/* Left - Content */}
        <div className={styles.bannerContent}>
          <h1 dangerouslySetInnerHTML={{ __html: heading }} />
          
          <div className={styles.seoBannerParagraph}>
            <div dangerouslySetInnerHTML={{ __html: paragraph }} />
            {paragraph2 && <div dangerouslySetInnerHTML={{ __html: paragraph2 }} />}
          </div>

          {/* Dynamic points list — only render if points exist */}
          {hasPoints && (
            <ul className={styles.pointsList}>
              {points.map((point, index) => (
                <li key={index} className={styles.pointItem}>
                  <span className={styles.pointBullet}>•</span>
                  {point}
                </li>
              ))}
            </ul>
          )}

          {buttonText && (
  <div className={styles.btnWrapper}>
    <a href={finalLink} className={styles.bannerButtonLink}>
      {buttonText}
    </a>
  </div>
)}
          {
          imageBtn && (
            <img src={imageBtn} alt="imgbtn" className={styles.imageBtn}/>
          )
        }
        </div>
        

        {/* Right - BR image at bottom */}
        <div className={styles.br}>
          <img
            src="/images/br-highlited-text.webp"
            alt="BrandStory BR"
            className={styles.brImage}
          />
        </div>
      </div>
    </div>
  );
};