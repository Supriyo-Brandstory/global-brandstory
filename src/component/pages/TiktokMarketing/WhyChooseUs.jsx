import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const WhyChooseUs = () => {
  const accordionData = [
    {
      title: "Proven Campaign Success",
      content:
        "We’ve executed 200+ TikTok campaigns across sectors like beauty, food, fitness, eCommerce, education, and lifestyle, consistently delivering engagement and conversions.",
    },
    {
      title: "In-House Expertise",
      content:
        "Our dedicated team of editors, content strategists, and creators are TikTok natives, ensuring every piece of content aligns with platform trends and audience behavior.",
    },
    {
      title: "Fast, Agile Execution",
      content:
        "From brainstorming to launch, our process is streamlined for speed, with real-time optimizations to maximize campaign performance.",
    },
    {
      title: "Performance-Driven Workflows",
      content:
        "TikTok advertising experts track every metric, fine-tune targeting, and optimize creative to deliver measurable ROI at every stage.",
    },
    {
      title: "Trend-Setting Strategy",
      content:
        "Beyond following trends, we help brands create viral moments, turning attention into meaningful engagement and tangible results.",
    },
  ];

  return (
    <CommonAccordion
      title="Why Choose Us for Your TikTok Marketing?"
      items={accordionData}
      footer="When you partner with the best TikTok ad company, along with chasing trends, you are setting them, with a team that turns every scroll into measurable impact."
    />
  );
};