import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const StarategyFirst = () => {
  const accordionData = [
    {
      title: "1. Goal-Oriented Planning",
      content: `Every campaign begins with a clear strategy, mapping the full funnel from awareness to engagement to conversion. We define measurable objectives such as reach, CTR, ROAS, and CPA to ensure every step moves your audience closer to action.`,
    },
    {
      title: "2. High-Impact Content Creation",
      content: `Our team designs Reels, Stories, carousels, and video ads that stop the scroll and hold attention. Each piece blends striking visuals, storytelling, and platform-native formats to engage your audience and drive clicks, conversions, and brand recall.`,
    },
    {
      title: "3. End-to-End Campaign Management",
      content: `From ad setup, budget allocation, and creative linking to media buying and A/B testing, we manage every detail. Daily monitoring allows us to adjust bids, swap creatives, and refine messaging in real time, ensuring campaigns perform at their best.`,
    },
    {
      title: "4. Advanced Audience Targeting",
      content: `Using behavioral data, demographics, interest clusters, and Instagram Pixel insights, we build custom and lookalike audiences. This ensures your ads reach high-intent users most likely to convert, while reducing wasted spend.`,
    },
    {
      title: "5. Lead Generation & eCommerce Conversions",
      content: `We craft campaigns that produce tangible results, from native lead forms and swipe-up flows to shoppable posts and dynamic product collections. Every ad is designed with clear CTAs and mobile-first flows to turn interest into action.`,
    },
    {
      title: "6. Influencer & UGC Integration",
      content: `We connect your brand with the right creators and integrate user-generated content to amplify reach, build credibility, and humanize your messaging. These partnerships create authentic engagement and strengthen trust.`,
    },
    {
      title: "7. Dynamic Retargeting & Funnel Acceleration",
      content: `Not every user converts on the first visit. Our layered retargeting campaigns re-engage users based on interactions like video views, cart abandonment, and story engagement, moving prospects through the funnel efficiently without overwhelming them.`,
    },
    {
      title: "8. Transparent Reporting & Analytics",
      content: `You’ll receive weekly reports with clear dashboards, campaign breakdowns, and actionable recommendations. We track metrics like ROAS, CTR, CPA, and conversions, so every decision is backed by real data and every opportunity is visible.`,
    },
  ];

  return (
    <>
      <CommonAccordion
        title="Strategy-First Instagram Ad<br />Campaigns That Deliver"
        items={accordionData}
        footer={
          "<p className='highlited-text'>Custom Instagram marketing packages available on request.</p>"
        }
        paddingBottom={0}
      />
      <div className="mx-auto mb-30 text-center">
        <a href="#" className="orange-btn">
          Get Custom Quote
        </a>
      </div>
    </>
  );
};