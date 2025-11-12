import React from 'react';
import CommonCard from '../common/CommonCard';

export const AnalyticsThatFit = () => {
  const boxHeight = "232px";

  const seoData = [
    {
      title: "Healthcare",
      desc: "Use data to improve patient outcomes, reduce wait times, and minimize unnecessary costs. From EMR systems to lab reports, we bring everything together for a clearer picture of patient care.",
      icon: "/images/rounded-icons/r3.png",
      background: "url('/images/analytics/health-bg.png')",
      height: boxHeight
    },
    {
      title: "Finance",
      desc: "Stay ahead of market shifts, monitor risk, and meet compliance standards without hassle. Whether it's fraud detection or performance tracking, we make your numbers work harder.",
      icon: "/images/rounded-icons/r32.png",
      background: "url('/images/analytics/finance-bg.png')",
      height: boxHeight
    },
    {
      title: "Retail",
      desc: "Track inventory in real time, forecast demand, and personalize customer experiences. Know what’s selling, what’s stalling, and when to restock, all with a few clicks.",
      icon: "/images/rounded-icons/r84.png",
      background: "url('/images/analytics/r84.png')",
      height: boxHeight
    },
    {
      title: "Manufacturing",
      desc: "Reduce downtime, improve quality, and plan your operations with precision. We help you connect production data with supply chain insights to boost overall efficiency.",
      icon: "/images/rounded-icons/r51.png",
      background: "url('/images/analytics/manufacturing-bg.png')",
      height: boxHeight
    }
  ];

  return (
    <CommonCard
      seoData={seoData}
      heding="Analytics That Fit Your Industry"
      subheding="Every industry is different. That’s why our data analytics services companies offer custom plans built for your field."
    />
  );
};