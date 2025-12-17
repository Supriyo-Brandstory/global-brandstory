import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const Step = () => {
  const accordionData = [
    {
      title: "Phase I: Strategic Audit & Health Check",
      content: `We begin with a comprehensive audit of your website, examining every aspect from security and performance to technical debt. This in-depth assessment uncovers gaps, risks, and opportunities, providing a clear picture of your website’s current health and laying the foundation for a precise, results-driven maintenance strategy.`,
    },
    {
      title: "Phase II: Proactive Maintenance Plan",
      content: `Based on the audit insights, we craft a tailored maintenance roadmap. This plan includes scheduled updates, regular backups, and thorough security scans. By executing tasks in well-defined phases, we ensure your website stays protected and optimized without disrupting your day-to-day operations.`,
    },
    {
      title: "Phase III: Managed Execution & Support",
      content: `Our dedicated team takes care of all ongoing maintenance, from routine updates to urgent bug fixes. By managing these tasks efficiently, we free your internal resources, allowing your team to focus on strategic initiatives while knowing your website is in safe hands.`,
    },
    {
      title: "Phase IV: Performance Monitoring & Reporting",
      content: `Maintenance is an ongoing journey, not a one-time task. We continuously monitor your website’s performance, track key metrics, and provide transparent reports. These insights inform strategic recommendations, ensuring your website evolves, stays healthy, and continues delivering measurable results over time.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Step-by-Step<br/>Processes Behind<br/>Our High-Impact<br/>Website Services"
      description="We follow a structured, four-phase approach to keep your website in peak condition:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};