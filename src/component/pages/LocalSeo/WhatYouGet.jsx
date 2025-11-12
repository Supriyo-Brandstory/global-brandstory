import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const WhatYouGet = () => {
  const accordionData = [
    {
      title: "Google Business Profile Management",
      content: `Keep your digital storefront updated, accurate, and optimized for discovery. We handle listings, posts, updates, and profile insights so your brand stays top of mind.`,
    },
    {
      title: "Citation Building & Management",
      content: `We make sure your business is listed on all the right local directories—with the right NAP details—and fix errors wherever we find them.`,
    },
    {
      title: "Local Content Creation",
      content: `We develop content that helps you rank for location-specific searches. From service pages to local blogs, everything is written with clarity, intent, and keyword strategy.`,
    },
    {
      title: "Local Link Acquisition",
      content: `Earn backlinks from regional directories, industry blogs, news outlets, and event pages that boost your credibility and local search authority.`,
    },
    {
      title: "Review & Reputation Management",
      content: `Monitor what customers are saying about you online. We help you respond, request new reviews, and handle negative feedback with care and strategy.`,
    },
    {
      title: "Technical SEO for Local",
      content: `Improve your website speed, mobile usability, and indexability—all factors that help search engines trust and rank your site in your area.`,
    },
    {
      title: "Multi-location SEO Solutions",
      content: `If you serve more than one city or region, we build a custom structure that ensures each location has its own optimized presence without duplicate content.`,
    },
  ];

  return (
    <CommonAccordion2
      title="All You Get with Brandstory’s Local SEO Services"
      description="No matter your business size, we align each service to your growth goals. You can start small and scale as needed. It’s your local SEO—done your way, with real strategy behind it."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};