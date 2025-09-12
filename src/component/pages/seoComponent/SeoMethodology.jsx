import React from 'react'
import CommonAccordion from '../common/CommonAccordion';
import CommonAccordion2 from '../common/CommonAccordion2';

const SeoMethodology = () => {
     const accordionData = [
    {
      title: "1. Advanced Keyword Research",
      content:
        "Find search terms that match your audience’s intent and have the best chance of bringing in results.",
    },
    {
      title: "2. Content Creation Plans",
      content:
        "AI-powered content strategies designed to align with audience demand and search trends.",
    },
    {
      title: "3. Competitor Tracking",
      content:
        "Monitor competitors’ strategies and uncover gaps that you can leverage for better visibility.",
    },
    {
      title: "4. Predictive Insights",
      content:
        "Leverage AI forecasts to stay ahead of SEO trends and make proactive adjustments.",
    },
  ];
  return (
    <>
    <CommonAccordion
    title="AI-Driven SEO Methodology for Smarter, Faster Results"
    subheding1="Turning Raw Data into Clear Actions"
    subheding2="AI technology makes SEO optimization services faster and more precise. It processes huge volumes of data in seconds, uncovering opportunities that would otherwise take months to find."
     items={accordionData} />

     <CommonAccordion2
     title="Your Path to Profit: The Three Pillars of Successful SEO"
     items={accordionData} />
     </>

  )
}

export default SeoMethodology