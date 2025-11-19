import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const Optimize = () => {
  const accordionData = [
    {
      title: "Keyword Optimized Pins ",
      content: `We research trending keywords and include them in pin descriptions and board titles to improve discoverability and ranking.`,
    },
    {
      title: "Alt-Text & SEO Best Practices",
      content: `Every pin includes optimized alternative text and follows Pinterest SEO services frameworks to maximize reach.`,
    },
    {
      title: "Branded Pin Design",
      content: `Scroll stopping vertical pins, carousels, and mobile first visuals are crafted with consistent color, storytelling, and CTAs to grab attention instantly.`,
    },
    {
      title: "Board Structuring & Strategy",
      content: `Thoughtfully organized boards guide users through the customer journey while enhancing searchability on Pinterest.`,
    },
    {
      title: "Tools & Analytics ",
      content: `We utilize Pinterest approved tools and internal frameworks to track performance, optimize content, and refine creative strategy constantly.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Optimize, Design, & Discover: Pinterest Growth Services"
      description="Our Pinterest SEO services and Pinterest creative services work hand-in-hand to make your brand highly discoverable and visually irresistible. By combining strategic keywords and visual search optimization with scroll stopping branded pins, we ensure your content ranks and also converts.<br/>With us, every pin is a discovery driven and SEO optimized piece of Pinterest marketing strategy which drives traffic, engagement, and conversions. <br/><br/>How we make pins perform:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};