import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const OurExpert = () => {
  const accordionData = [
    {
      title: "1. Corporate & Brand Video Editing",
      content: "We transform raw footage into polished, professional videos that communicate your brand story with clarity and impact. Perfect for internal communications, product launches, or corporate campaigns, each edit reinforces your brand’s identity while keeping viewers engaged.",
    },
    {
      title: "2. Social Media & Short-Form Content",
      content: "From Instagram Reels to TikTok clips and YouTube Shorts, we craft content that grabs attention within seconds. By blending smart pacing, motion graphics, and sound design, we create videos that are not just seen, but remembered and shared.",
    },
    {
      title: "3. Marketing & Explainer Videos",
      content: "Complex ideas are simplified into clear, compelling narratives. Our edits educate your audience, showcase your product’s value, and guide viewers toward meaningful action, turning curiosity into conversions.",
    },
    {
      title: "4. Documentary & Long-Form Content",
      content: "We turn interviews, events, or multi-part series into cohesive, immersive stories. Every scene is thoughtfully structured to maintain engagement, highlight key messages, and leave a lasting impression on your audience.",
    }
  ];

  return (
    <CommonAccordion
      title = "Our Expert Video Editing Services for<br/>Marketing and Branding"
      subheding2 = "We offer comprehensive services tailored to your needs:"
      items = {accordionData}
    />
  );
};