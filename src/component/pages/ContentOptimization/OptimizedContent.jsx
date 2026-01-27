import React from "react";
import CommonCard from "../common/CommonCard";

export const OptimizedContent = () => {
  const boxHeight = "232px";
  const seoData = [
    {
      title: "Technology & SaaS",
      desc: "Simplifying complex products into clear, engaging content that highlights innovation and builds trust.",
      icon: "/images/rounded-icons/r27.png",
      background: "url('/images/ppc/p-bg-1.png')",
      height: boxHeight,
    },
    {
      title: "Healthcare & Life Sciences",
      desc: "Creating informative, empathetic content that educates patients and communicates credibility.",
      icon: "/images/rounded-icons/r17.png",
      background: "url('/images/ppc/p-bg-2.png')",
      height: boxHeight,
    },
    {
      title: "Finance & Fintech",
      desc: "Delivering clear, compliant, and trustworthy content in an industry where accuracy is everything.",
      icon: "/images/rounded-icons/r28.png",
      background: "url('/images/ppc/p-bg-3.png')",
      height: boxHeight,
    },
    {
      title: "Retail & E-commerce",
      desc: "Crafting product-driven content that inspires purchases and strengthens customer loyalty.",
      icon: "/images/rounded-icons/r4.png",
      background: "url('/images/ppc/p-bg-1.png')",
      height: boxHeight,
    },
    {
      title: "B2B Services",
      desc: "Building thought leadership and nurturing leads with content that speaks directly to decision-makers.",
      icon: "/images/rounded-icons/r74.png",
      background: "url('/images/ppc/p-bg-2.png')",
      height: boxHeight,
    },
    {
      title: "B2C Brands",
      desc: "Designing relatable, engaging content that connects emotionally and keeps customers coming back.",
      icon: "/images/rounded-icons/r9.png",
      background: "url('/images/ppc/p-bg-3.png')",
      height: boxHeight,
    },
  ];

  return (
    <CommonCard
      seoData={seoData}
      heding="Optimized Content for Every Industry"
      description="Our strategies adapt to sector-specific challenges:"
      footer="No matter your industry, we create solutions tailored to your goals, audience, and growth objectives."
    />
  );
};
