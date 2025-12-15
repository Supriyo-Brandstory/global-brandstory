import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const HowLanding = () => {
  const accordionData = [
    {
      title: "1. Boosted Conversion Rates",
      content: `Optimized landing pages can double or triple conversions, making every click more valuable.`,
    },
    {
      title: "2. Lower Cost Per Acquisition (CPA)",
      content: `With higher efficiency, you generate more leads for less investment.`,
    },
    {
      title: "3. Accelerated Lead Generation",
      content: `Capture qualified leads faster, fueling your sales pipeline and boosting revenue.`,
    },
    {
      title: "4. Improved Marketing Funnel",
      content: `Seamlessly guide prospects from awareness to action with a clear, targeted journey.`,
    },
    {
      title: "5. Better Insights",
      content: `Conversion tracking and analytics reveal exactly what resonates with your audience.`,
    }
  ];

  return (
    <CommonAccordion
      title = "How Landing Page Development<br/>Boosts Leads and Sales"
      subheding2 = "A strong campaign demands a strong destination. Without a high-performing landing page, even the best digital marketing campaigns can lose steam and waste valuable ad spend.<br/><b class='highlited-text' >Here’s why landing page development is crucial:</b>"
      items = {accordionData}
      footer = "Landing page development isn’t just about good design. It combines strategy, psychology, and data to maximize impact and deliver measurable business results."
    />
  );
};