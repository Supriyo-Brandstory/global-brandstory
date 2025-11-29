import React from 'react'
import CommonCard from '../common/CommonCard'

export const GoogleAdsExpertise = ()=>{

  const boxHeight = "250px";

  const backgrounds = [
    "url('/images/ppc/bg-1.png')",
    "url('/images/ppc/bg-2.png')",
    "url('/images/ppc/bg-3.png')",
  ];

  const data = [
    {
      title: "ECommerce",
      desc: "Drive product-level sales using Shopping Campaigns and Performance Max, achieving strong ROAS. Product segmentation and feed enhancements ensure scalable performance.",
      icon: "/images/rounded-icons/r4.png",
      background: backgrounds[0],
      height: boxHeight
    },
    {
      title: "SaaS",
      desc: "Buyer-intent keyword targeting, funnel-driven campaign structures, and CRO-supported landing pages deliver high-quality inbound leads.",
      icon: "/images/rounded-icons/r6.png",
      background: backgrounds[1],
      height: boxHeight
    },
    {
      title: "Healthcare",
      desc: "HIPAA-compliant targeting with real-time performance data. Behavioral triggers and location-based keywords support compliant patient acquisition.",
      icon: "/images/rounded-icons/r12.png",
      background: backgrounds[2],
      height: boxHeight
    },
    {
      title: "Real Estate",
      desc: "Hyperlocal radius targeting and multi-layered display segmentation. CRM-aided pipelines boost site-visit and lead-conversion ratios.",
      icon: "/images/rounded-icons/r95.png",
      background: backgrounds[0],
      height: boxHeight
    },
    {
      title: "EdTech",
      desc: "Drive demo bookings and enrollments using cross-platform funnel strategies—video, search, and performance-based campaign models.",
      icon: "/images/rounded-icons/r22.png",
      background: backgrounds[1],
      height: boxHeight
    },
  ];

  return (
    <CommonCard
      seoData={data}
      heding="Google Ads Expertise Across Key Industries"
      description=""
      footer=""
    />
  );
};
