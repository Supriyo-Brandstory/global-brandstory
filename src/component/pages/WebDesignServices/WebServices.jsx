import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const WebServices = () => {
  const accordionData = [
    {
      title: "1. Custom UX/UI Design",
      content: `We create user-centric designs that guide visitors effortlessly through your website. Every interface is crafted to enhance engagement, improve conversions, and deliver a seamless user experience.`,
    },
    {
      title: "2. Fully Responsive Websites",
      content: `Your website will look and perform perfectly across desktops, tablets, and mobile devices. We ensure consistent functionality and design, no matter the screen size.`,
    },
    {
      title: "3. Brand-Aligned Visuals",
      content: `Our design approach reflects your brand story, creating a cohesive aesthetic across every page. This helps strengthen recognition and leaves a lasting impression on your audience.`,
    },
    {
      title: "4. SEO-Optimized Code & Structure",
      content: `From day one, we build websites with clean, search-engine-friendly code. Optimized structure and performance ensure better visibility and higher rankings in search results.`,
    },
    {
      title: "5. Intuitive CMS Integration",
      content: `We integrate user-friendly content management systems so your team can manage content easily. This empowers you to make updates quickly without relying on developers.`,
    },
    {
      title: "6. Website Redesign Services",
      content: `For businesses ready to refresh their digital presence, we provide modern, optimized redesigns. Our redesigns enhance aesthetics, usability, and performance while aligning with your brand goals.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Web Services That Combine Creativity and Function"
      subheding2 = "We offer comprehensive solutions that cover every aspect of custom web design:"
      items = {accordionData}
      footer = "We ensure each website not only looks impressive but also delivers measurable results."
    />
  );
};