"use client";
import React from 'react';
import styles from '@/style/common/commonBanner.module.css';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const CommonBanner = ({ heading, paragraph, paragraph2, buttonLink, buttonLink2, buttonText, buttonText2, renderType }) => {
  const finalLink1 = (!buttonLink || buttonLink === '#') ? '/our-works' : buttonLink;
  const finalLink2 = (!buttonLink2 || buttonLink2 === '#') ? '/contact-us' : buttonLink2;

  const isHTML = (value) => /<\/?[a-z][\s\S]*>/i.test(value);

  // console.log(renderType)

  return (
    <div className={styles.seoBanner}>
      <div className={styles.seoBannerContent}>
        <h1>
          <div dangerouslySetInnerHTML={{ __html: heading }} />
        </h1>

        <div className={styles.seoBannerParagraph}>
          {/* <div className='highlited-text' dangerouslySetInnerHTML={{ __html: paragraph }} /> */}
          {paragraph && (
            renderType === "dynamic" ? (
              <div className="highlited-text">
                {paragraph}
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: paragraph }} />
            )
          )}


          {paragraph2 && (typeof paragraph2 === 'string' ? (<div dangerouslySetInnerHTML={{ __html: paragraph2 }} />) : (<BlocksRenderer content={paragraph2} blocks={{ paragraph: ({ children }) => (<p className='!text-[20px]'>{children}</p>) }} />))}
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