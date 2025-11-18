import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const PowerfulVideo = () => {
  const accordionData = [
    {
      title: "Scriptwriting That Speaks",
      content: `Our team crafts clear, compelling scripts to communicate your brand’s message effectively. Every word is designed to grab attention, inform, and inspire your audience to act.`,
    },
    {
      title: "Stunning Visual Quality",
      content: `High-resolution footage, professional lighting, and clean audio ensure every frame looks polished. We make your videos visually irresistible to keep viewers watching till the end.`,
    },
    {
      title: "Precision Editing & Pacing",
      content: `Cuts, transitions, and effects are carefully designed to maintain interest. With strategic pacing, each video flows smoothly and keeps viewers hooked throughout.`,
    },
    {
      title: "Brand-Focused Integration",
      content: `Logos, colors, and messaging are subtly incorporated to reinforce your brand identity. Every video strengthens recognition while remaining engaging and authentic.`,
    },
    {
      title: "Trend-Forward Short-Form Content",
      content: `Our YouTube Shorts capture attention instantly, using trending formats and challenges. These bite-sized videos complement long-form content and boost discoverability.`,
    },
    {
      title: "Maximized Engagement & Reach",
      content: `Short and long videos are crafted to increase watch time and audience interaction. Expand your reach, grow subscribers, and turn viewers into loyal customers.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Powerful Video Production and Editing Services"
      description="Grab your audience's attention from the first second. We combine storytelling, technical expertise, and creative design to make videos that hold attention. Whether long-form or YouTube Shorts, we deliver content that drives engagement and action."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};