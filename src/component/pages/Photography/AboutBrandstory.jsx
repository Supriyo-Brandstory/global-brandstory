import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const AboutBrandstory = () => {
  const accordionData = [
    {
      title: "1. Global Reach",
      content:
        "From Asia to the Middle East, our international photography services bring visual consistency to every project. We have successfully executed 500+ shoots across 8 countries, ensuring your brand looks its best.",
    },
    {
      title: "2. Expert Team",
      content:
        "Our network of photographers and editors are masters in commercial imagery. Backed by years of experience, we are recognized as a professional corporate photography company in India, delivering excellence across every frame.",
    },
    {
      title: "3. Advanced Technology",
      content:
        "We invest in the latest mirrorless cameras, drone setups, and AI-enhanced editing suites. Every shoot meets global standards of detail and sharpness, a benchmark for any commercial photography studio.",
    },
    {
      title: "4. Creative Precision",
      content:
        "Every shot begins with intent. As a branding photography agency, we focus on storytelling through light, tone, and composition to create images that do more than impress — they convert.",
    },
  ];

  return (
    <>
      <CommonAccordion
        title="About BrandStory, A Global Leader in<br/>Visual Storytelling"
        subheding2="<b class='highlited-text'>Visual Stories That Connect, Convert, and Captivate</b><br/>With over 10+ years of industry experience, BrandStory stands as a top photography agency in Bangalore trusted by top brands."
        items={accordionData}
        footer="At BrandStory, we don’t just capture — we collaborate, innovate, and elevate. Partner with us to bring your brand’s vision to life with photography expertise."
      />
    </>
  );
};