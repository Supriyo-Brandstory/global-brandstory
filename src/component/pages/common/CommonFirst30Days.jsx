"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import styles from "@/style/common/first30Days.module.css";

const THEME_CLASS = {
  red: styles.themeRed,
  yellow: styles.themeYellow,
  blue: styles.themeBlue,
  green: styles.themeGreen,
};

const THEME_ORDER = ["red", "yellow", "blue", "green"];

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

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 4.5h8v4.2a4 4 0 0 1-8 0V4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 6H5.8A2.3 2.3 0 0 0 3.5 8.3C3.5 10 5 11 7.2 11M16 6h2.2A2.3 2.3 0 0 1 20.5 8.3C20.5 10 19 11 16.8 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 12.5V15M9.5 19.5h5M10.5 15h3v2.2a1.5 1.5 0 0 1-1.5 1.5h0a1.5 1.5 0 0 1-1.5-1.5V15Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CommonFirst30Days({
  label,
  title,
  orangeText,
  para,
  weeks = [],
  outcomeLabel,
  outcomeText,
}) {
  if (!title && !orangeText && !weeks?.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {label && (
          <div className={styles.labelRow}>
            <span className={styles.label}>{label}</span>
            <span className={styles.labelLine} aria-hidden="true" />
          </div>
        )}

        {(title || orangeText) && (
          <h2 className={styles.heading}>
            {title && <span>{title} </span>}
            {orangeText && (
              <span className={styles.orangeText}>{orangeText}</span>
            )}
          </h2>
        )}

        <RichText content={para} className={styles.para} />

        {(weeks.length > 0 || outcomeLabel || outcomeText) && (
          <div className={styles.timeline}>
            {weeks.map((week, index) => {
              const theme =
                week?.theme || THEME_ORDER[index % THEME_ORDER.length];
              const themeClass = THEME_CLASS[theme] || styles.themeRed;
              const number = String(index + 1).padStart(2, "0");
              const showConnector =
                index < weeks.length - 1 || outcomeLabel || outcomeText;

              return (
                <div
                  key={week?.id || `${week?.label || "week"}-${index}`}
                  className={`${styles.week} ${themeClass}`}
                  style={{ "--delay": `${index * 80}ms` }}
                >
                  <div className={styles.iconRow}>
                    <div className={styles.iconWrap}>
                      <span className={styles.stepNumber}>{number}</span>
                    </div>
                    {showConnector && (
                      <div className={styles.connector} aria-hidden="true">
                        <span className={styles.connectorDot} />
                      </div>
                    )}
                  </div>

                  {week?.label && (
                    <span className={styles.weekLabel}>{week.label}</span>
                  )}
                  {week?.title && (
                    <h3 className={styles.weekTitle}>{week.title}</h3>
                  )}
                  <RichText content={week?.para} className={styles.weekPara} />
                </div>
              );
            })}

            {(outcomeLabel || outcomeText) && (
              <aside className={styles.outcome}>
                <div className={styles.outcomeTop}>
                  <span className={styles.outcomeIcon}>
                    <TrophyIcon />
                  </span>
                  {outcomeLabel && (
                    <span className={styles.outcomeLabel}>{outcomeLabel}</span>
                  )}
                  <span className={styles.outcomeArrow} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                {outcomeText && (
                  <p className={styles.outcomeText}>{outcomeText}</p>
                )}
              </aside>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
