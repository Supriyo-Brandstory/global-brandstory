import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const GoFromRaw = () => {
  const accordionData = [
    {
      title: "Spot patterns and shifts before they impact your business",
      content: `With ongoing tracking, you can catch changes in customer behavior, market demand, or performance before they become a problem.`,
    },
    {
      title: "Forecast sales and user actions with real data",
      content: `Well-built models that show where things are headed so you can prepare, adjust, and act fast.`,
    },
    {
      title: "Plan better across marketing, staffing, and operations",
      content: `When you know what’s likely to happen, you can make smarter decisions across the board, from ad spend to inventory to hiring.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Go From Raw Data<br/>to Forecasts That<br/>Matter"
      description="Our data analytics services don’t stop at charts. We help you build models that predict what’s next."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};