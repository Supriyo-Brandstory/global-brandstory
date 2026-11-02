"use client";

import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import styles from "@/style/common/ourProcess.module.css";

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

export default function CommonOurProcess({
  label,
  title,
  orangeText,
  para,
  buttons = [],
  steps = [],
}) {
  const primaryButton = buttons?.[0];
  const buttonLabel = primaryButton?.buttonLabel;
  const buttonUrl = primaryButton?.buttonUrl || "/contact-us";

  if (!title && !orangeText && !steps?.length) return null;

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

          {(title || orangeText) && (
            <h2 className={styles.heading}>
              {title && <span>{title} </span>}
              {orangeText && (
                <span className={styles.orangeText}>{orangeText}</span>
              )}
            </h2>
          )}

          <RichText content={para} className={styles.para} />

          {buttonLabel && (
            <Link href={buttonUrl} className={styles.cta}>
              {buttonLabel}
              <svg
                className={styles.ctaArrow}
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </div>

        {steps?.length > 0 && (
          <div className={styles.right}>
            <ol className={styles.timeline}>
              {steps.map((step, index) => {
                const number =
                  step?.number || String(index + 1).padStart(2, "0");

                return (
                  <li
                    key={step?.id || `${number}-${step?.title || index}`}
                    className={styles.step}
                  >
                    <div className={styles.number}>{number}</div>
                    <div className={styles.stepContent}>
                      {step?.title && (
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                      )}
                      <RichText
                        content={step?.description}
                        className={styles.stepDescription}
                      />
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
