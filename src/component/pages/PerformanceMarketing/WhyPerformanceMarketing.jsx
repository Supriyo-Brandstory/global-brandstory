import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const WhyPerformanceMarketing = () => {
  const accordionData = [
    {
      title: "1. Accountability",
      content: `Track every rupee, dollar, or dirham with precision. Performance marketing ensures full transparency, letting you see exactly where your budget goes and how every click converts.`,
    },
    {
      title: "2. Precision",
      content: `Reach, engage, and convert your ideal customer with data-backed targeting. This focus allows brands to optimize performance marketing campaigns and eliminate wasted spend.`,
    },
    {
      title: "3. Scalability",
      content: `Invest confidently in what works. Performance marketing gives you the flexibility to scale winning strategies and replicate success across regions, audiences, and platforms.`,
    },
    {
      title: "4. Efficiency",
      content: `Reduce acquisition costs while improving lifetime value. With smart optimization and continuous testing, performance marketing helps brands achieve more results with less spend.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Why Performance Marketing Matters in a Results-Driven World"
      subheding2 = "The importance of performance marketing has never been clearer. With rising CAC, brands need measurable impact and smarter strategy to thrive in a competitive digital space."
      items = {accordionData}
      footer = "Brands using performance marketing grow 2.7x faster in digital ROI than those relying solely on traditional methods proving that measurable marketing is the future of growth."
    />
  );
};