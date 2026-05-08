import React from "react";
import styles from "@/style/common/csStepCards.module.css";

const CsStepCards = ({ title, description, cards = [] }) => {
  const themeColors = [
    {
      color: "linear-gradient(277.2deg, #F15D22 37.79%, #BA998C 93.22%)",
      bg: "linear-gradient(180deg, rgba(241, 93, 34, 0.4) 0%, rgba(134, 65, 28, 0.4) 100%)",
    }, // Orange
    {
      color: "linear-gradient(277.2deg, #6E67BF 37.79%, #7A7CC8 93.22%)",
      bg: "linear-gradient(180deg, rgba(60, 53, 138, 0.4) 0%, rgba(91, 95, 192, 0.4) 100%)",
    }, // Purple
    {
      color: "linear-gradient(277.2deg, #E7E4C2 37.79%, #BA998C 93.22%)",
      bg: "linear-gradient(180deg, rgba(231, 228, 194, 0.4) 0%, rgba(186, 153, 140, 0.4) 100%)",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
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

        <div className={styles.grid}>
          {cards.map((card, index) => {
            const theme = themeColors[index % themeColors.length];
            return (
              <div
                key={index}
                className={styles.card}
                style={{ background: theme.color }}
              >
                <div
                  className={styles.cardInner}
                  style={{
                    background: card.title2
                      ? "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 100%)"
                      : "#0F0F0F",
                  }}
                >
                  {card.title2 && (
                    <h4 className={styles.cardTitle2}>{card.title2}</h4>
                  )}

                  <div
                    className={styles.numberBox}
                    style={{ background: theme.bg }}
                  >
                    <span
                      style={{
                        background: theme.color,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {card.number}
                    </span>
                  </div>

                  {card.title && (
                    <h4 className={styles.cardTitle}>{card.title}</h4>
                  )}

                  {card.content && (
                    <p className={styles.cardContent}>{card.content}</p>
                  )}

                  {card.sections && (
                    <div className={styles.sections}>
                      {card.sections.map((sec, i) => (
                        <div key={i} className={styles.section}>
                          <h4 className={styles.sectionLabel}>{sec.label}</h4>
                          <p className={styles.sectionValue}>{sec.value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* <div
                  className={styles.bottomGlow}
                  style={{ background: theme.color }}
                ></div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CsStepCards;
