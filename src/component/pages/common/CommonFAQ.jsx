'use client'
import { useState } from 'react';
import styles from '@/style/common/commonFAQs.module.css';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import SafeImage from './SafeImage';

const CommonFAQ = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.frame}>
      <h2 className={styles.heading}>FAQs</h2>
      <div className={styles.faqList}>
        {data.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.faqHeader}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.title}</span>
              <div className={styles.arrowContainer}>
                <SafeImage
                  src="/images/arrow-down.webp"
                  alt="arrow down"
                  width={24}
                  height={24}
                  className={`${styles.arrow} ${openIndex === index ? styles.flip : ''
                    }`}
                />
              </div>
            </button>
            <div
              className={`${styles.faqContent} ${openIndex === index ? styles.open : ''
                }`}
            >
              {/* <p dangerouslySetInnerHTML={{__html:item.description}} /> */}
              {item.description && (typeof item.description === 'string' ? (<p dangerouslySetInnerHTML={{ __html: item.description }} />):(<BlocksRenderer content={item?.description}/>))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonFAQ;
