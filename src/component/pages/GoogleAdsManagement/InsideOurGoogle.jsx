import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const InsideOurGoogle = () => {
  const accordionData = [
    {
      title: "Account Audit & Opportunity Mapping",
      content: `Every Google Ads campaign management project begins with a detailed account audit to reveal both performance gaps and growth potential. We assess structure, quality scores, audience segmentation, bidding logic, and attribution models to identify wasted spend and missed opportunities. This diagnostic builds a clear roadmap for smarter budget allocation and faster ROI improvement.`,
    },
    {
      title: "Intent-Driven Keyword Targeting",
      content: `Keyword selection is mapped to buyer intent and aligned with funnel stages. This ensures spend is focused on search terms with real conversion value. The approach reduces CPL, improves lead quality, and drives high-intent traffic ready to take action.`,
    },
    {
      title: "Campaign Structuring (SKAG vs STAG)",
      content: `Campaign architecture is custom-tailored to business goals. <b>SKAGs</b> provide precise keyword-to-ad relevance for quality score gains, while <b>STAGs</b> allow scalable thematic growth with reduced complexity. The structure always matches the offer and conversion objective.`,
    },
    {
      title: "Conversion-Optimized Creatives",
      content: `Creatives are built to engage and convert. Headlines prioritize clarity, urgency, and benefits, while descriptions reinforce value. Visuals, extensions, and CTAs are adapted to user behavior and placement, ensuring stronger engagement and higher conversion rates.`,
    },
    {
      title: "Smart Bidding & Budget Allocation",
      content: `Bidding models such as <b>tCPA</b>, <b>Max Conversions</b>, and <b>tROAS</b> are activated based on campaign maturity and data signals. Budgets are reviewed weekly to scale high-ROAS campaigns and cut wasted spend, keeping efficiency high while expanding profitable segments.`,
    },
    {
      title: "Continuous A/B Testing & Scaling",
      content: `Testing is ongoing—from headlines and CTAs to creatives and landing pages. Structured test cycles ensure strong performers are scaled quickly, while weak variations are eliminated. This maintains competitiveness and adapts campaigns to changing market behavior.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Inside Our Google<br/>Ads Planning &<br/>Optimization Process"
      items={accordionData}
      splitRatio={0.49}
    />
  );
};
