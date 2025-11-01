import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const TailoredVideo = () => {
  const accordionData = [
    {
      title: "1. Corporate Videos",
      content:
        "Build trust with polished and professional content reflecting your mission and brand ethos. Great for onboarding, training, investor relations, and more.",
    },
    {
      title: "2. Explainer Videos",
      content:
        "",
    },
    {
      title: "3. Animation & Motion Graphics",
      content:
        "",
    },
    {
      title: "4. Event Coverage",
      content:
        "",
    },
    {
      title: "5. Testimonial Videos",
      content:
        "",
    },
    {
      title: "6. Social Media Videos",
      content:
        "",
    },
  ];

  return (
    <>
      <CommonAccordion
        title="Tailored Video Solutions for Every Business Need"
        // subheding1="Monitor. Manage. Restore. Grow."
        subheding2="Our versatile video production services are customized to match your brand's goals, audience preferences, and industry dynamics. No two businesses are the same, and neither are the videos we create."
        items={accordionData} 
      />
      <p className="mx-auto text-[180px] max-w-[1000px] text-center">From corporate video production to animation video production, we deliver end-to-end creative video solutions that meet every brand’s communication needs with flawless video content creation.</p>
    </>
  )
}
