import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const WhyBusinessToday = () => {
  const accordionData = [
    {
      title: "See what’s working and what’s not",
      content: `From marketing to sales, you can track which efforts are bringing results. You don’t have to waste time or money on ideas that don’t move the needle.`,
    },
    {
      title: "Catch issues before they turn into big problems",
      content: `With regular reporting and pattern tracking, you can spot warning signs early, whether it’s a drop in performance, a customer churn trend, or a supply chain issue.`,
    },
    {
      title: "Know your real growth, not just surface numbers",
      content: `Growth isn’t just about how many customers you have or how many orders you shipped. It’s about margins, retention, and lifetime value. Data analytics services help you measure what really matters.`,
    },
    {
      title: "Make smarter choices with less stress",
      content: `You don’t have to rely on your instinct every time. With data, decisions become clearer and easier. Whether you’re launching a new product, entering a new market, or adjusting prices, you’ll have solid numbers to back your moves.`,
    },
  ];

  return (
    <CommonAccordion
      title="Why Businesses Today Need Strong<br/>Data Analytics Services"
      
      subheding2="If your business runs on guesses, it’s time to change that. With the right data analytics service,<br/>you can understand what’s really happening behind the scenes.<br/>Here’s what it helps you do:"
      items={accordionData}
      footer="You don’t need to know it all. You just need a team who turns data into answers."
    />
  );
};