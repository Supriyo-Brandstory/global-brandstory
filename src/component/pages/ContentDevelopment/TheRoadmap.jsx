import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const TheRoadmap = () => {
  const accordionData = [
    {
      title: "1. Research & Planning",
      content: `We begin by digging into your audience, industry, and competitors to uncover what people are really looking for. From there, we map out topics, formats, and timelines that fit your business goals. This groundwork makes sure we’re creating content that’s both relevant and impactful.`,
    },
    {
      title: "2. Content Creation",
      content: `This is where ideas take shape. Whether it’s articles, blog posts, social campaigns, videos, or visuals, we produce content that reflects your brand voice and keeps your audience engaged. Everything we create is designed to be useful, interesting, and easy to consume.`,
    },
    {
      title: "3. Editing & Optimization",
      content: `No content goes live without refinement. Our team edits for clarity, accuracy, and tone while also optimizing for SEO and readability. This ensures your content isn’t just polished—it’s also discoverable and effective.`,
    },
    {
      title: "4. Publishing & Distribution",
      content: `Timing and placement matter. We manage how and where your content is published—on websites, blogs, email campaigns, or social media, making sure it reaches the right people at the right moment for maximum impact.`,
    },
    {
      title: "5. Measuring Results",
      content: `Once your content is out in the world, we don’t stop there. We track performance across traffic, engagement, and conversions, then use those insights to refine future strategies. This way, your content keeps getting stronger over time.`,
    },
  ];

  return (
    <CommonAccordion
      title="The Roadmap to Successful Content Development"
      subheding2="Content only works when it’s built with intention. That’s why our process covers every stage, from research to results, ensuring what we create resonates with your audience and drives measurable outcomes."
      items={accordionData}
      footer=""
    />
  );
};