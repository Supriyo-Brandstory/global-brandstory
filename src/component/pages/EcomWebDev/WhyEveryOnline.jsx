import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const WhyEveryOnline = () => {
  const accordionData = [
    {
      title: "1. Optimized Online Store Performance",
      content: `Fast-loading, secure, and scalable websites that handle high traffic effortlessly.`,
    },
    {
      title: "2. Reduced Cart Abandonment",
      content: `Streamlined checkout processes and multiple payment integrations improve conversions.`,
    },
    {
      title: "3. Enhanced Customer Experience",
      content: `Thoughtful ecommerce UI/UX design guides users from discovery to purchase with ease.`,
    },
    {
      title: "4. Strategic Growth",
      content: `Your store becomes a tool for building brand loyalty and increasing customer lifetime value.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Why Every Online Store Needs Professional Ecommerce Development"
      subheding2 = "Running an online store is about delivering an experience that converts browsers into buyers. A poorly designed site can lead to abandoned carts, low sales, and frustrated customers.<br/><b class='highlited-text'>Strong ecommerce web development ensures:</b>"
      items = {accordionData}
      footer = "Landing page development isn't just about good design. It combines strategy, psychology, and data to maximize impact."
    />
  );
};