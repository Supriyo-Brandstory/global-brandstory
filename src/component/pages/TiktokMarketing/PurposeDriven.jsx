import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const PurposeDriven = () => {
  const accordionData = [
    {
      title: "Data-Driven Strategy Development",
      content: `Every campaign begins with a deep understanding of your target audience, industry trends, and competitor activity. We identify audience interests, platform behavior, and engagement patterns to create campaigns built for maximum impact.`,
    },
    {
      title: "Content Calendar & Planning",
      content: `We design a detailed campaign roadmap, planning posts, videos, and creative themes aligned with your business objectives. This ensures consistent messaging and strategic momentum from awareness to conversion.`,
    },
    {
      title: "Short-Form Video Production",
      content: `TikTok is a fast-scrolling platform, so every video must hook viewers instantly. We produce mobile-native content with attention-grabbing openings, trend-aligned visuals, vertical formatting, dynamic editing, and clear calls-to-action within the first few seconds.`,
    },
    {
      title: "Trend & Challenge Leveraging",
      content: `Viral trends, hashtags, and challenges are leveraged to increase organic reach and engagement. We adapt brand messaging to fit trending audio, memes, and visual styles while ensuring authenticity and relevance to your audience.`,
    },
    {
      title: "Influencer Partnerships & UGC Integration",
      content: `Influencers bring trust and credibility. We identify the right creators for your brand, manage outreach, approvals, and content delivery, and integrate user-generated content to amplify social proof and engagement.`,
    },
    {
      title: "Paid TikTok Advertising",
      content: `We manage all ad formats including In-Feed Ads, TopView, Brand Takeovers, and Spark Ads. Each campaign uses precise targeting, retargeting, and optimization to reach high-intent users and maximize ROI.`,
    },
    {
      title: "Community Engagement & Real-Time Interaction",
      content: `Engagement isn’t optional. We handle comments, moderate discussions, host TikTok Live sessions, and run interactive polls or Q&As to nurture relationships, foster loyalty, and turn followers into advocates.`,
    },
    {
      title: "Cross-Platform Repurposing",
      content: `Your TikTok content is adapted for Instagram Reels, YouTube Shorts, and Meta platforms. Visual and messaging consistency is maintained while optimizing formats, captions, and hashtags to feel native on each platform.`,
    },
    {
      title: "Performance Tracking & Analytics",
      content: `Every campaign is tracked with clear metrics like views, engagement, CTR, follower growth, conversions, and ROI. Weekly and monthly dashboards provide actionable insights, helping you optimize spend, creative, and strategy continuously.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Purpose-Driven TikTok Campaigns for Measurable Growth"
      description=""
      items={accordionData}
      splitRatio={0.5}
    />
  );
};