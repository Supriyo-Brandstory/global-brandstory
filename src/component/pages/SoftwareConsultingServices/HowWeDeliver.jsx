import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const HowWeDeliver = () => {
  const accordionData = [
    {
      title: "Phase I: Discovery & Due Diligence",
      content: `We begin by listening. Our team conducts a deep audit of your existing technology stack, workflows, and goals. We analyze not just what tools you use, but how you use them and where inefficiencies arise. This phase highlights the gap between your current state and your growth ambitions.`,
    },
    {
      title: "Phase II: Strategic Blueprinting",
      content: `Next, we craft a tailored IT strategy blueprint. This includes:<ul><li>A technology roadmap with clear milestones</li><li>Plans for modernization and integration</li><li>Prioritization of investments to maximize ROI</li><li>Defined steps for process automation</li></ul>By the end of this phase, you’ll know exactly how your technology will evolve to support your business vision.`,
    },
    {
      title: "Phase III: Solution Architecture & Execution Oversight",
      content: `We design the technical solution, whether it involves custom development, platform integration, or both. Unlike pure developers, we also provide execution oversight—ensuring the delivery is on time, on budget, and aligned with strategy.`,
    },
    {
      title: "Phase IV: Post-Launch Optimization & Governance",
      content: `Technology doesn’t stand still, and neither do we. After launch, we provide governance frameworks, monitor performance, and recommend continuous improvements. This ensures your technology scales seamlessly with business growth.`,
    },
  ];

  return (
    <CommonAccordion2
      title="How We Deliver<br/>Through Our Methodology"
      description="At BrandStory, methodology is everything. We developed the approach to ensure that every engagement creates measurable outcomes and long-term value."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};