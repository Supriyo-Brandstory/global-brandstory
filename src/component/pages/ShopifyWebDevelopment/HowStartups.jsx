import React from 'react'
import CommonCard from '../common/CommonCard'

export const HowStartups = () => {
  const boxHeight = "240px";
  const seoData = [
    {
      title: "Startups",
      desc: "We help new businesses launch scalable, brand-focused online stores that grow alongside their vision and market potential.",
      icon: "/images/rounded-icons/r104.png",
      background: "url('/images/ppc/p-bg-1.png')",
      height: boxHeight
    },
    {
      title: "Established Businesses",
      desc: "For companies with outdated or underperforming websites, we redesign and migrate stores to Shopify for modern performance, security, and scalability.",
      icon: "/images/rounded-icons/r110.png",
      background: "url('/images/ppc/p-bg-2.png')",
      height: boxHeight
    },
    {
      title: "High-Growth Brands",
      desc: "As brands scale rapidly, we enable smooth migrations to Shopify Plus—unlocking advanced capabilities like custom checkout, automation, and enterprise-grade integrations.",
      icon: "/images/rounded-icons/r116.png",
      background: "url('/images/ppc/p-bg-3.png')",
      height: boxHeight
    },
    {
      title: "Direct-To-Consumer (D2C)",
      desc: "We specialize in building seamless, branded ecommerce experiences that strengthen customer relationships and drive long-term loyalty.",
      icon: "/images/rounded-icons/r52.png",
      background: "url('/images/ppc/p-bg-1.png')",
      height: boxHeight
    },
    {
      title: "B2B Companies",
      desc: "From wholesale portals to custom workflows, we deliver enterprise-grade Shopify solutions that simplify complexity and enable business growth.",
      icon: "/images/rounded-icons/r74.png",
      background: "url('/images/ppc/p-bg-2.png')",
      height: boxHeight
    }
  ];

  return (
    <CommonCard 
      seoData={seoData} 
      heding="How Startups and Small Businesses Benefit From Our Shopify Services"
      description="We work with businesses across multiple industries, including:"
      footer=""
    />
  );
}