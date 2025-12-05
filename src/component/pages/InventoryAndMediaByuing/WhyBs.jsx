import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const WhyBs = () => {
  const accordionData = [
    {
      title: "Cross-platform execution backed by certified media buying experts",
      content: `We plan, activate, and optimize campaigns across all major DSPs, ad exchanges, and programmatic platforms with certified specialists at the helm.`,
    },
    {
      title: "End-to-end visibility and honest reporting with no black-box tactics",
      content: `You get full transparency into where your ads appear, how your money is spent, and what results you are driving, no hidden margins, ever.`,
    },
    {
      title: "Deep experience across inventory buying for global and local markets",
      content: `From hyper-local real estate targeting to global OTT buys, we manage inventory with cultural and contextual relevance at scale.`,
    },
    {
      title: "Transparent processes and data-driven media planning and buying",
      content: `Every decision, platform, placement, or bid, is backed by performance data, not guesswork. And we keep you looped in, every step of the way.`,
    },
    {
      title: "Integrated in-house teams across content, analytics, and growth",
      content: `Our media team doesn’t work in isolation. They collaborate with creative strategists, data analysts, and growth leads to ensure every campaign performs holistically.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Why BrandStory is a Strategic Media Buying Partner"
      description="We are not just buyers, we are business partners. As the best media buying agency for outcome-focused brands, we offer end-to-end expertise that combines human creativity with technical precision.<br/><br/>Why brands choose us:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};