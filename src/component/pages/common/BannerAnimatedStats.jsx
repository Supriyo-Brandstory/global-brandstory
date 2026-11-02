"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/style/common/locationBanner.module.css";

const DURATION_MS = 1600;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function AnimatedStat({ value, suffix = "", headline = "", label = "", start }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frameId;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / DURATION_MS, 1);
      setDisplay(Math.round(easeOutCubic(progress) * value));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [start, value]);

  return (
    <div className={styles.statItem}>
      <p className={styles.statValue}>
        {display}
        {suffix}
        {headline ? ` ${headline}` : ""}
      </p>
      {label && <p className={styles.statLabel}>{label}</p>}
    </div>
  );
}

export default function BannerAnimatedStats({ stats = [] }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!stats.length || started) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stats.length, started]);

  if (!stats.length) return null;

  return (
    <div ref={ref} className={styles.statsRow} aria-label="Company statistics">
      {stats.map((stat, index) => (
        <AnimatedStat
          key={`${stat.label}-${index}`}
          value={Number(stat.value) || 0}
          suffix={stat.suffix || ""}
          headline={stat.headline || ""}
          label={stat.label || ""}
          start={started}
        />
      ))}
    </div>
  );
}
