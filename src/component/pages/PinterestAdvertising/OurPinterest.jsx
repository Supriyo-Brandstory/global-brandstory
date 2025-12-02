import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const OurPinterest = () => {
  const accordionData = [
    {
      title: "1. Creative Design",
      content: `The design pins we create are visually appealing, go well with your brand, and speak your story clearly.`,
    },
    {
      title: "2. Audience Research",
      content: `We identify and target people who are already in search of ideas, products, or inspiration like yours. This way your ads stay relevant and reach the right audience.`,
    },
    {
      title: "3. Continuous Optimization",
      content: `Campaigns are never “set and forget.” We monitor performance daily, test different visuals, copy, and formats, and refine strategies to increase clicks, saves, and conversions over time.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Our Pinterest Advertising Approach"
      subheding2 = "We mix creativity and data to make Pinterest ads work. We design ads that look good and perform well."
      items = {accordionData}
      footer = "This approach ensures that your ads are not just seen but also clicked and converted."
    />
  );
};