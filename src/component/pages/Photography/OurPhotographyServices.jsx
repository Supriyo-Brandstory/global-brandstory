import React from 'react';
import CommonCard from '../common/CommonCard';

export const OurPhotographyServices = () => {
  const boxHeight = '270px';

  const data = [
    {
      title: 'Corporate Photography',
      desc: 'First impressions matter! Our professional corporate photography elevates your brand identity. Every frame will reflect your organization culture and values.',
      icon: '/images/rounded-icons/r7.png',
      background: "url('/images/ppc/bg-1.png')",
      height: boxHeight,
    },
    {
      title: 'Ecommerce Photography',
      desc: 'Our ecommerce product photography service focuses on conversion-driven visuals for websites, catalogues, and marketplaces. Every shot is optimized for digital storefront performance.',
      icon: '/images/rounded-icons/r8.png',
      background: "url('/images/ppc/bg-2.png')",
      height: boxHeight,
    },
    {
      title: 'Food Photography',
      desc: 'Our commercial food photography captures flavor and freshness with styled compositions and professional lighting. We create images triggering appetite and influencing customer decisions.',
      icon: '/images/rounded-icons/r85.png',
      background: "url('/images/ppc/bg-3.png')",
      height: boxHeight,
    },
    {
      title: 'Fashion Photography',
      desc: 'BrandStory’s fashion photography services blend creativity with brand storytelling. We design editorial and lookbook shoots aligning with your visual identity to showcase garments in their best light.',
      icon: '/images/rounded-icons/r86.png',
      background: "url('/images/ppc/bg-1.png')",
      height: boxHeight,
    },
    {
      title: 'Architectural Photography',
      desc: 'We deliver architectural and interior photography with technical precision balancing natural light and perspective. Our images highlight ambiance to communicate space aesthetics with clarity and depth.',
      icon: '/images/rounded-icons/r87.png',
      background: "url('/images/ppc/bg-2.png')",
      height: boxHeight,
    },
    {
      title: 'Event Photography',
      desc: 'Documenting moments that matter, professionally. Our corporate event photography ensures every key moment is professionally captured for media use, social campaigns, and archives.',
      icon: '/images/rounded-icons/r88.png',
      background: "url('/images/ppc/bg-3.png')",
      height: boxHeight,
    },
    {
      title: 'Drone Photography',
      desc: 'Our drone photography services provide unmatched vantage points for brand marketing. We capture cinematic aerial shots and 4K imaging to reveal scale, structure, and stunning visual narratives.',
      icon: '/images/rounded-icons/r89.png',
      background: "url('/images/ppc/bg-1.png')",
      height: boxHeight,
    },
  ];

  return (
    <CommonCard
      seoData={data}
      heding="Our Photography Services:<br/>Tailored for Every Need"
      description="Every BrandStory project is powered by expertise, precision, and passion, delivering photography that not only looks beautiful but also drives measurable brand impact."
      footer="With BrandStory, every photo becomes a meaningful touchpoint between your brand and its audience"
    />
  );
};