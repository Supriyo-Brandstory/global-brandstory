import React from "react";
import styles from "@/style/common/csProcess.module.css";

const CsProcess = ({ title, subheading, steps = [] }) => {
  return (
    <section className={styles.howwework_container}>
      {title && <h2 className={styles.howwework_heading}>{title}</h2>}
      {subheading && (
        <p
          className={styles.howwework_subheading}
          dangerouslySetInnerHTML={{ __html: subheading }}
        />
      )}

      {steps.map((step, index) => (
        <div key={index} className={styles.howwework_step}>
          <div className={styles.howwework_number}>{step.number}</div>
          <div>
            <h3 className={styles.howwework_title}>{step.title}</h3>
            <div
              className={styles.howwework_description}
              dangerouslySetInnerHTML={{
                __html:
                  step.description +
                  (step.points
                    ? "<br/>" +
                      step.points
                        .map((p) => `<span class="ml-5">• ${p}</span>`)
                        .join("<br/>")
                    : ""),
              }}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CsProcess;
