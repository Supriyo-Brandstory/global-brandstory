"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import SafeImg from "./SafeImg";
import styles from "@/style/common/teamPerformance.module.css";

function RichText({ content, className }) {
  if (!content) return null;

  if (typeof content === "string") {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return (
    <div className={className}>
      <BlocksRenderer
        content={content}
        blocks={{
          paragraph: ({ children }) => <p>{children}</p>,
        }}
      />
    </div>
  );
}

function resolveMediaUrl(media, strapiUrl) {
  const raw =
    media?.url ||
    media?.formats?.large?.url ||
    media?.formats?.medium?.url ||
    media?.formats?.small?.url ||
    media?.formats?.thumbnail?.url ||
    media?.data?.attributes?.url ||
    media?.attributes?.url;

  if (!raw) return null;
  if (
    raw.startsWith("http://") ||
    raw.startsWith("https://") ||
    raw.startsWith("data:")
  ) {
    return raw;
  }

  const base = (strapiUrl || "").replace(/\/$/, "");
  if (!base) return raw.startsWith("/") ? raw : `/${raw}`;
  return `${base}${raw.startsWith("/") ? raw : `/${raw}`}`;
}

function splitAccentTitle(title = "") {
  const parts = String(title).trim().split(/\s+/).filter(Boolean);
  if (parts.length < 2) {
    return { accent: title, rest: "" };
  }
  return {
    accent: parts.slice(0, -1).join(" "),
    rest: parts[parts.length - 1],
  };
}

export default function CommonTeamPerformance({
  label,
  title,
  orangeText,
  titleSuffix,
  para,
  cards = [],
  footerText,
  footerOrangeText,
  footerNote,
  image,
  imageAlt,
}) {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE || "";
  const imageUrl = resolveMediaUrl(image, strapiUrl);

  if (!title && !orangeText && !cards?.length && !imageUrl) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          {label && (
            <div className={styles.labelRow}>
              <span className={styles.label}>{label}</span>
              <span className={styles.labelLine} aria-hidden="true" />
            </div>
          )}

          {(title || orangeText || titleSuffix) && (
            <h2 className={styles.heading}>
              {title && <span>{title} </span>}
              {orangeText && (
                <span className={styles.orangeText}>{orangeText} </span>
              )}
              {titleSuffix && <span>{titleSuffix}</span>}
            </h2>
          )}

          <RichText content={para} className={styles.para} />

          {cards.length > 0 && (
            <div className={styles.cards}>
              {cards.map((card, index) => {
                const iconUrl = resolveMediaUrl(card?.icon, strapiUrl);
                const { accent, rest } = splitAccentTitle(card?.title || "");

                return (
                  <article
                    key={card?.id || `${card?.title || "card"}-${index}`}
                    className={styles.card}
                  >
                    {iconUrl && (
                      <div className={styles.iconBox}>
                        <SafeImg
                          src={iconUrl}
                          alt=""
                          width={22}
                          height={22}
                        />
                      </div>
                    )}
                    <div className={styles.cardBody}>
                      {card?.title && (
                        <h3 className={styles.cardTitle}>
                          <span className={styles.cardTitleAccent}>
                            {accent}
                          </span>
                          {rest ? ` ${rest}` : null}
                        </h3>
                      )}
                      {card?.description && (
                        <p className={styles.cardDescription}>
                          {card.description}
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {(footerText || footerOrangeText || footerNote) && (
            <div className={styles.footerBlock}>
              {(footerText || footerOrangeText) && (
                <p className={styles.footerHeading}>
                  {footerText && <span>{footerText} </span>}
                  {footerOrangeText && (
                    <span className={styles.orangeText}>
                      {footerOrangeText}
                    </span>
                  )}
                </p>
              )}
              {footerNote && (
                <p className={styles.footerNote}>{footerNote}</p>
              )}
            </div>
          )}
        </div>

        {imageUrl && (
          <div className={styles.right}>
            <div className={styles.imageGlow} aria-hidden="true" />
            <div className={styles.imageFrame}>
              <SafeImg
                src={imageUrl}
                alt={imageAlt || title || "Team"}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
