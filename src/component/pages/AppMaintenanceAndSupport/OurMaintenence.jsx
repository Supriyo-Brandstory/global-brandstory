import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const OurMaintenence = () => {
  const accordionData = [
    {
      title: "1. Mobile App Maintenance Services",
      content: `Ensure your mobile apps stay secure and bug free with our expert app maintenance solutions. We provide quick fixes, feature enhancements, and smooth upgrades.`,
    },
    {
      title: "2. Web Application Maintenance Services",
      content: `Our web application maintenance services keep your business platforms optimized for speed, security, and scalability ensuring uninterrupted performance.`,
    },
    {
      title: "3. AI-Enabled Predictive Maintenance & Performance Optimization",
      content: `Harness the power of AI to predict and resolve issues before they impact your users. With regular application monitoring and real time tuning, we optimize speed and reliability across web and mobile platforms.`,
    },
    {
      title: "4. Cloud & Hybrid Infrastructure Support with Application Monitoring",
      content: `We provide reliable maintenance support services across cloud and hybrid environments while monitoring your apps. Real time alerts and scalable integration ensure your applications stay secure and reliable at all times.`,
    },
    {
      title: "5. Cross Platform Compatibility Testing",
      content: `We conduct in-depth testing across devices, browsers, and OS versions to ensure your apps perform consistently everywhere. This guarantees smooth functionality and better customer satisfaction.`,
    },
    {
      title: "6. Code Refactoring",
      content: `Our experts refine and restructure your code without altering functionality, making apps more efficient and scalable. Cleaner code means faster performance and easier future upgrades.`,
    },
    {
      title: "7. Software Maintenance & Upgrades",
      content: `We deliver timely updates, patches, and security enhancements to keep your apps current and safe. With proactive app maintenance, your systems remain future ready and reliable.`,
    },
    {
      title: "8. Quality Assurance & 24/7 Helpdesk Support",
      content: `Through strict QA and advanced testing, we eliminate bugs and ensure your applications remain stable and high performing. Our maintenance support services include 24/7 helpdesk assistance, providing fast resolutions anytime issues arise.`,
    }
  ];

  return (
    <CommonAccordion
      title="Our Maintenance and Support Services"
      subheding2="At Brandstory, we offer end to end application maintenance and support services designed to keep your apps future ready. From mobile app maintenance services to proactive monitoring, our solutions cover every stage of app lifecycle management."
      items={accordionData}
      footer="Every decision is backed by data and insights, ensuring your ASO efforts translate into real-world results."
    />
  );
};