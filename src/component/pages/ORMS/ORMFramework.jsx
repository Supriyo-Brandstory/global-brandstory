import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

const ORMFramework = () => {
  const accordionData = [
    {
      title: "1. Reputation Monitoring",
      content:
        "Track mentions across search engines, social media, and reviews. Detect issues early.",
    },
    {
      title: "2. Content Suppression & Removal",
      content:
        "We strategically suppress negative content through legal channels, SEO techniques, and content optimization. Our team works to remove harmful listings, fake reviews, and damaging content that affects your brand's online presence.",
    },
    {
      title: "3. Positive Content Promotion",
      content:
        "Create and promote high-quality, positive content about your brand across multiple platforms. We develop compelling narratives, press releases, blog posts, and social media content that highlights your brand's strengths and achievements.",
    },
    {
      title: "4. Long-Term Brand Strengthening",
      content:
        "Build sustainable reputation management systems that protect and grow your brand over time. We implement ongoing strategies for brand monitoring, crisis prevention, and positive brand building that ensures long-term digital reputation health.",
    },
  ];

  return (
    <>
      <CommonAccordion
        title="The BrandStory ORM Framework"
        subheding1="Monitor. Manage. Restore. Grow."
        subheding2="Our reputation management strategy is simple but effective. It has four key stages:"
        items={accordionData} 
      />
    </>
  )
}

export default ORMFramework
