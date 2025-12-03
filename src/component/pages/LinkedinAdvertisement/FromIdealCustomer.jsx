import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const FromIdealCustomer = () => {
  const accordionData = [
    {
      title: "Ideal Customer Profile Mapping",
      content: `First, we look for the people who are most likely to want or need your product. When we show your ads to the right people, more of them will notice, click, and become leads.`,
    },
    {
      title: "Content & Offer Match",
      content: `Next, we make sure your ads say the right things for the people who see them. If the message fits what they need, they will pay attention and respond.`,
    },
    {
      title: "Funnel Stage Targeting",
      content: `Not everyone is ready to buy at the same time. We show different ads to different people:
        <ul>
          <li>Some are just learning about your brand.</li>
          <li>Some are thinking about your product.</li>
          <li>Some are ready to buy.</li>
        </ul>
        This helps people move through your sales funnel step by step.`,
    },
    {
      title: "Budget Allocation Strategy",
      content: `We help you use your ad money in the best way. This means putting money where it works the most and getting the most leads for your budget.`,
    },
    {
      title: "ROAS-Focused KPI Tracking",
      content: `Finally, we track important numbers like clicks, leads, and costs. Watching these numbers helps us see if your ads are working well and how we can make them even better.`,
    },
  ];

  return (
    <CommonAccordion2
      title="From Ideal Customer to Maximum ROI: Our LinkedIn Strategy"
      description="Our campaigns follow a clear, performance-oriented blueprint:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};