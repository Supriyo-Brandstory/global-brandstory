"use client";
import React from "react";
import Link from "next/link";
import { CommonBanner3 } from "@/component/pages/common/CommonBanner3";
import styles from "@/style/thankYou.module.css";

export const ThankYou = () => {
  const bannerData = {
    heading: "Thank You!",
    description: "Your message has been successfully sent. We will get back to you shortly.",
    primaryCtaText: "Back to Home",
    primaryCtaLink: "/",
    highlights: ["Swift Response", "Expert Support", "Dedicated Team"],
  };

  return (
    <main>
      <CommonBanner3 {...bannerData} />
      <section className={styles.thankYouPage}>
        <div className={styles.content}>
          <p className={styles.message}>
            We appreciate you reaching out to us. Our team is already reviewing your inquiry and will contact you as soon as possible. In the meantime, feel free to explore our website and learn more about our services.
          </p>
          <div className={styles.backHomeBtn}>
            my team will contact shortly
          </div>
        </div>
      </section>
    </main>
  );
};
