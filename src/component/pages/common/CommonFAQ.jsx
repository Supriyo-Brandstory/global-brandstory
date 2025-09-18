'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from '@/style/common/commonFAQs.module.css';

const CommonFAQ = ({data}) => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.frame}>
      <h1 className={styles.heading}>FAQs</h1>
      <div className={styles.faqList}>
        {data.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.faqHeader}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.title}</span>
              <span
                className={`${styles.arrow} ${
                  openIndex === index ? styles.rotate : ''
                }`}
              >
                <Image src="/images/arrow-down.png" alt="arrow down" width={44} height={42} />
              </span>
            </button>
            <div
              className={`${styles.faqContent} ${
                openIndex === index ? styles.open : ''
              }`}
            >
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonFAQ;
