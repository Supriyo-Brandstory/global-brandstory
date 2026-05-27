"use client";
import React from "react";
import styles from "@/style/homepage.module.css";
import Link from 'next/link';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerHeading}>
          Everything Your Brand Needs to <br /> Grow — In One Digital Agency
        </h1>
        <p className={styles.bannerParagraph}>
          Just One Sharp, Plugged-In Team Delivering Strategy, Design, Content,
          Tech, And Marketing — All Under One Roof.
        </p>
        <Link href="/contact-us">
          <button className={styles.bannerButton}>Let's Talk</button>
        </Link>
      </div>

      <div className={styles.bannerGrid}>

        {/* ── COL 1: two cards stacked flush, no gap ── */}
        <div className={styles.colStack1}>
          <div className={`${styles.statCard} ${styles.stackTop} ${styles['b-1']}`}>
            <span className={styles.number}>500+</span>
            <span className={styles.label}>Clients Worldwide</span>
          </div>
          <div className={`${styles.statCard} ${styles.stackBottom}`}>
            <span className={styles.number}>150+</span>
            <span className={styles.label}>Creative Minds</span>
          </div>
        </div>

        {/* ── SERVICE PILLS ── */}
        <div className={styles.serviceListCell}>
          <ul className={styles.serviceList}>
            <li><span className={styles.dot} /> STRATEGY</li>
            <li><span className={styles.dot} /> DESIGN</li>
            <li><span className={styles.dot} /> MARKETING</li>
            <li><span className={styles.dot} /> VIDEO</li>
            <li><span className={styles.dot} /> DEVELOPMENT</li>
            <li><span className={styles.dot} /> ANALYTICS</li>
          </ul>
        </div>

        {/* ── COL 6: two cards stacked flush, no gap ── */}
        <div className={styles.colStack6}>
          <div className={`${styles.statCard} ${styles.stackTop} ${styles['b-4']}`}>
            <span className={styles.number}>92%</span>
            <span className={styles.label}>Client Retention</span>
          </div>
          <div className={`${styles.statCard} ${styles.stackBottom}`}>
            <span className={styles.number}>10M+</span>
            <span className={styles.label}>Million Leads Generated</span>
          </div>
        </div>

        {/* ── ARCH WAVE CARDS: row 2, cols 2–5 ── */}
        <div className={`${styles.statCard} ${styles.archCol2} ${styles['b-2']}`}>
          <span className={styles.number}>1200+</span>
          <span className={styles.label}>Projects Delivered</span>
        </div>
        <div className={`${styles.statCard} ${styles.archCol3}`}>
          <span className={styles.number}>30+</span>
          <span className={styles.label}>Industries Served</span>
        </div>
        <div className={`${styles.statCard} ${styles.archCol4}`}>
          <span className={styles.number}>11+</span>
          <span className={styles.label}>Years Of Experience</span>
        </div>
        <div className={`${styles.statCard} ${styles.archCol5} ${styles['b-3']}`}>
          <span className={styles.number}>1M+</span>
          <span className={styles.label}>Billion Revenue Generated</span>
        </div>

      </div>
    </div>
  );
};

export default Banner;