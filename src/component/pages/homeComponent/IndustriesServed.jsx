'use client';
import { useState, useRef } from 'react';
import styles from '@/style/homepage.module.css';

const industries = [ 'E-commerce', 'Healthcare', 'Education & E-Learning', 'Real Estate', 'Finance & Banking', 'Hospitality & Tourism', 'Automotive', 'Media & Entertainment', 'Manufacturing & Industrial', 'Fashion & Apparel', 'Technology & SaaS', 'Logistics & Supply Chain', 'Telecommunication', 'Legal Services', 'Beauty, Wellness & Fitness', 'Non-profits & NGOs', 'Food & Beverages', 'Interior Design', 'Government & Public Sector', 'Energy & Utilities', 'Insurance', 'Gaming & Esports', 'Events & Exhibitions', 'Agriculture & Agrotech', 'Crypto & Blockchain', 'Petcare & Veterinary', 'Renewable Energy', 'Sustainable Brands' ];

const ITEMS_PER_SLIDE = 4;

const chunkArray = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
};

const slides = chunkArray(industries, ITEMS_PER_SLIDE);

export default function IndustriesServed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50 && activeIndex < slides.length - 1) {
      setActiveIndex(activeIndex + 1); // swipe left
    }

    if (distance < -50 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1); // swipe right
    }
  };

  return (
    <section className={styles.industries_section}>
      <div className={styles.industries_container}>
        <h2 className={styles.industries_title}>30+ Industries Served</h2>
        <p className={styles.industries_subtitle}>
          Real businesses. Real challenges. Real results.
        </p>
        <p className={styles.industries_description}> From Fashion To Fintech, We Team Up With Industries That Demand More From Digital — And Deliver Strategies That Do The Job. </p>

        {/* Desktop Grid */}
        <div className={`${styles.industries_grid} ${styles.desktopOnly}`}>
          {industries.map((industry) => (
            <div key={industry} className={styles.industries_item}>
              {industry}
            </div>
          ))}
        </div>

        {/* Mobile Swipe */}
        <div className={styles.mobileOnly}>
          <div
            className={styles.industries_slider}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((group, i) => (
              <div key={i} className={styles.industries_slide}>
                {group.map((item) => (
                  <div key={item} className={styles.industries_item}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className={styles.industries_dots}>
            {slides.map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${
                  i === activeIndex ? styles.activeDot : ''
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}