import React from 'react';
import CommonTwoCard from '../common/CommonTwoCard';

export const YoutubeSeo = () => {
  const data = {
    heading: "YouTube SEO, Ads & Optimization Solutions",
    subheading:
      "Great content deserves the audience it’s meant for. Our YouTube SEO services and strategic ad campaigns make your videos highly discoverable. We optimize every element for search, recommendations, and engagement.<br/>From short form content to long form storytelling, we help your brand reach the right viewers effectively.",

    cards: [
      {
        title: "Keyword-Rich Titles & Descriptions",
        description:
          "We create clear and clickable titles and descriptions, full of relevant keywords. This ensures your videos attract organic views while ranking higher in search results.",
      },
      {
        title: "Optimized Tags & Metadata",
        description:
          "Tags, categories, and metadata are strategically selected to align with audience search behavior. Properly structured content increases discoverability and session duration.",
      },
      {
        title: "Eye-Catching Thumbnails & Playlists",
        description:
          "Thumbnails are designed to grab attention instantly, improving click through rates. Organized playlists guide viewers through your content, boosting engagement and watch time.",
      },
      {
        title: "Targeted YouTube Advertising",
        description:
          "We manage TrueView, pre-roll, and bumper ads to reach viewers likely to convert. Audience targeting ensures your ad spend focuses on demographics, interests, and behavior.",
      },
      {
        title: "Creative & Performance Optimization",
        description:
          "A/B testing of visuals, messages, and formats helps improve campaign performance. We refine creatives to ensure ads are engaging and ROI driven.",
      },
      {
        title: "Regular Monitoring & Real Results",
        description:
          "Our team monitors campaigns and SEO performance in real time. This guarantees higher rankings, more views, and meaningful engagement for your brand.",
      },
    ],
  };

  return (
    <>
      <CommonTwoCard 
        {...data} 
        titleClass="text-center" 
        cardLayout="two-col" 
      />
      
      <p className='max-w-[1200px] text-center mx-auto mb-30'>Reach your audience, grow your channel, and maximize every view. With our expertise, every video works harder for your brand.</p>
    </>
  );
};