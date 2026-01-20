import React from 'react';
import styles from '@/style/common/commonBanner.module.css';

export const CommonBanner = ({heading,paragraph,paragraph2,buttonLink,buttonLink2,buttonText,buttonText2}) => {
  const finalLink1 = (!buttonLink || buttonLink === '#') ? '/our-work' : buttonLink;
  const finalLink2 = (!buttonLink2 || buttonLink2 === '#') ? '/contact-us' : buttonLink2;

  return (
    <div className={styles.seoBanner}>
      <div className={styles.seoBannerContent}>
        <h1>
          <div dangerouslySetInnerHTML={{ __html: heading }} />
        </h1>

        <div className={styles.seoBannerParagraph}>
          <div dangerouslySetInnerHTML={{ __html: paragraph }} />
          {paragraph2 && <div dangerouslySetInnerHTML={{ __html: paragraph2 }} />}
        </div>

        <div className={styles.btnWrapper}>
          {/* Primary button - always shown */}
          <div className={styles.seoBannerButton}>
            <a href={finalLink1} className={styles.seoBannerButtonLink}>
              {buttonText || 'Learn More'} {/* optional fallback text */}
              <img
                src="/images/triangle-btn.png"
                alt="btn img"
                className={styles.btnImg}
              />
            </a>
          </div>

          {/* Secondary button - only shown if buttonText2 exists */}
          {buttonText2 && (
            <div className={styles.seoBannerButton}>
              <a href={finalLink2} className={styles.seoBannerButtonLink2}>
                {buttonText2}
              </a>
            </div>
          )}
        </div>
      </div>

      <div className={styles.boxes}>
        <div className={styles.box1} />
        <div className={styles.box2} />
        <div className={styles.box3} />
      </div>
    </div>
  );
};