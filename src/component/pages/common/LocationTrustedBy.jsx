"use client";

import styles from "@/style/common/locationTrustedBy.module.css";

function buildLoopSet(logos) {
  // Pad short lists so one loop set is wide enough, then duplicate once for seamless -50% scroll.
  const minItems = 8;
  const set = [...logos];
  while (set.length < minItems) {
    set.push(...logos);
  }
  return set;
}

export default function LocationTrustedBy({ title, logos = [] }) {
  if (!logos.length) return null;

  const loopSet = buildLoopSet(logos);
  const track = [...loopSet, ...loopSet];

  return (
    <section className={styles.section} aria-label={title || "Trusted brands"}>
      <div className={styles.accent} aria-hidden="true" />
      {title ? (
        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      ) : null}

      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {track.map((logo, index) => (
            <div
              className={styles.logoItem}
              key={`${logo.src}-${index}`}
              aria-hidden={index >= loopSet.length ? true : undefined}
            >
              <img
                src={logo.src}
                alt={index >= loopSet.length ? "" : logo.alt || "Client logo"}
                className={styles.logoImg}
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
