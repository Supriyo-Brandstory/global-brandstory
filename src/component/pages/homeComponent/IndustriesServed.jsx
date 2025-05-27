import React from 'react';
import styles from '@/style/homepage.module.css';

const industries = [
  'E-commerce', 'Healthcare', 'Education & E-Learning', 'Real Estate',
  'Finance & Banking', 'Hospitality & Tourism', 'Automotive', 'Media & Entertainment',
  'Manufacturing & Industrial', 'Fashion & Apparel', 'Technology & SaaS', 'Logistics & Supply Chain',
  'Telecommunication', 'Legal Services', 'Beauty, Wellness & Fitness', 'Non-profits & NGOs',
  'Food & Beverages', 'Interior Design', 'Government & Public Sector', 'Energy & Utilities',
  'Insurance', 'Gaming & Esports', 'Events & Exhibitions', 'Agriculture & Agrotech',
  'Crypto & Blockchain', 'Petcare & Veterinary', 'Renewable Energy', 'Sustainable Brands'
];

const IndustriesServed = () => {
  return (
    <section className={styles.industries_section}>
      <div className={styles.industries_container}>
        <h2 className={styles.industries_title}>30+ Industries Served</h2>
        <p className={styles.industries_subtitle}>
          Real businesses. Real challenges. Real results.
        </p>
        <p className={styles.industries_description}>
          From Fashion To Fintech, We Team Up With Industries That Demand More From Digital — And Deliver Strategies That Do The Job.
        </p>
        <div className={styles.industries_grid}>
          {industries.map((industry) => (
            <div key={industry} className={styles.industries_item}>
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
