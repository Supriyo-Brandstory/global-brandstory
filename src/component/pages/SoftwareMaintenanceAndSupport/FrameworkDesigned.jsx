import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const FrameworkDesigned = () => {
  const accordionData = [
    {
      title: "Phase I: Health Audit & Discovery",
      content: `We begin with a comprehensive audit of your software to uncover hidden risks and opportunities. This includes identifying technical debt, detecting security gaps, spotting performance bottlenecks, and documenting areas for improvement. The result is a clear picture of your software’s current health.`,
    },
    {
      title: "Phase II: Strategic Maintenance Plan",
      content: `Next, we create a phased roadmap tailored to your business priorities. This plan blends preventive maintenance, adaptive updates, and perfective improvements, with each step carefully prioritized to maximize ROI and minimize risk.`,
    },
    {
      title: "Phase III: Managed Execution & Support",
      content: `Our dedicated team takes charge of ongoing maintenance activities, including routine updates, critical bug fixes, and performance tuning. This allows your internal teams to focus on strategic initiatives while we ensure your systems operate without disruption.`,
    },
    {
      title: "Phase IV: Performance & Reporting",
      content: `Finally, we provide continuous monitoring and transparent reporting. Real-time insights, performance tracking, and regular recommendations ensure your software stays reliable, secure, and ready for future growth.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Framework Designed<br/>for Measurable<br/>Results"
      description="Our framework ensures your software is monitored, maintained, and optimized around the clock."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};