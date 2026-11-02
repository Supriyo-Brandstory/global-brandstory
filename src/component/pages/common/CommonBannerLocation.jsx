"use client";

import styles from "@/style/common/locationBanner.module.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import SafeImg from "./SafeImg";
import BannerAnimatedStats from "./BannerAnimatedStats";

export const CommonBannerLocation = ({
  heading,
  paragraph,
  paragraph2,
  renderType,
  stats,
}) => {
  const finalLink1 = "/contact-us";
  const finalLink2 = "/our-works";

  return (
    <div className={styles.seoBanner}>
      <div className={styles.seoBannerContent}>
        <h1>
          <div className="title1" dangerouslySetInnerHTML={{ __html: heading }} />
        </h1>

        <div className={styles.seoBannerParagraph}>
          {paragraph &&
            (renderType === "dynamic" ? (
              <div className="highlited-text">{paragraph}</div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}

          {paragraph2 &&
            (typeof paragraph2 === "string" ? (
              <div dangerouslySetInnerHTML={{ __html: paragraph2 }} />
            ) : (
              <BlocksRenderer
                content={paragraph2}
                blocks={{
                  paragraph: ({ children }) => (
                    <p className="!text-[20px]">{children}</p>
                  ),
                }}
              />
            ))}
        </div>

        <div className={styles.btnWrapper}>
          <div className={styles.seoBannerButton}>
            <a href={finalLink1} className={styles.seoBannerButtonLink}>
              Contact Us
              <SafeImg
                src="/images/triangle-btn.png"
                alt="btn img"
                className={styles.btnImg}
              />
            </a>
          </div>

          <div className={styles.seoBannerButton}>
            <a href={finalLink2} className={styles.seoBannerButtonLink2}>
              Our Works
            </a>
          </div>
        </div>

        {stats?.length > 0 && <BannerAnimatedStats stats={stats} />}
      </div>

      <div className={styles.boxes}>
        <div className={styles.box1} />
        <div className={styles.box2} />
        <div className={styles.box3} />
      </div>
    </div>
  );
};
