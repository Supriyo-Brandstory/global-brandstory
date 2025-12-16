import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const ToolsAndTech = () => {
  const accordionData = [
    {
      title: "1. Analytics & Heatmap",
      content: `We use tools like Google Analytics and Hotjar to gain deep insights into user behavior.`,
    },
    {
      title: "2. Prototyping & Wireframing",
      content: `Using platforms such as Figma and Adobe XD, we bring ideas to life before development begins.`,
    },
    {
      title: "3. Content Management Systems (CMS)",
      content: `Whether it’s WordPress, Drupal, or a custom-built solution, we implement CMS platforms that are flexible, scalable, and easy to manage.`,
    },
    {
      title: "4. SEO & Performance Tools",
      content: `Our SEO and performance toolkit, including SEMrush, Screaming Frog, and Lighthouse, ensures your website is optimized for search engines, speed, and usability.`,
    },
    {
      title: "5. Testing & Optimization",
      content: `Through tools like Optimizely and Google Optimize, we continuously test and refine your website.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Tools and Technologies That Power Our Website Revamp Services"
      subheding2 = "We leverage cutting-edge tools and platforms to ensure your website performs at its best:<br/><b class='highlited-text'>Strong ecommerce web development ensures:</b>"
      items = {accordionData}
      footer = ""
    />
  );
};