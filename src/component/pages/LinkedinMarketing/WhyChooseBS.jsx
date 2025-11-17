import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const WhyChooseBS = () => {
  const accordionData = [
    {
      title: "500+ Successful Campaigns",
      content: `We’ve designed and executed LinkedIn campaigns for hundreds of clients, delivering measurable results across different markets and regions.`,
    },
    {
      title: "Cross-Sector Experience",
      content: `From SaaS and education to real estate, healthcare, and professional services, we understand the nuances of each industry to create tailored campaigns that resonate.`,
    },
    {
      title: "Full In-House Team",
      content: `Our strategists, LinkedIn advertising experts, content creators, and analytics leads collaborate closely to ensure every campaign is cohesive and high-performing.`,
    },
    {
      title: "Transparent, End-to-End Process",
      content: `We maintain regular reviews, provide strategic insights at every stage, and take full ownership from campaign launch to scaling, keeping you informed and confident in the results.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Why Choose Brandstory Global as Your LinkedIn Marketing Agency?"
      description="We are not just campaign operators; We act as an extension of your team, focused on long term growth, precision, and performance. Here is what makes Brandstory Global different:<br/><br/>As a results-driven B2B LinkedIn marketing company, we combine insight, execution, and accountability, helping you grow smarter and lead stronger."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};