import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const ExploreOur = () => {
  const accordionData = [
    {
      title: "1. Custom WordPress Themes",
      content: `We design fully bespoke WordPress themes tailored to your brand and business needs. Every theme prioritizes flexibility, aesthetics, and performance, delivering a website that is uniquely yours and built to scale.`,
    },
    {
      title: "2. Advanced Plugin Development",
      content: `When off-the-shelf solutions aren’t enough, our team develops custom plugins that provide the exact functionality your business requires. These plugins integrate seamlessly while enhancing site performance and usability.`,
    },
    {
      title: "3. Headless WordPress Development",
      content: `By separating the front-end from the back-end, we create fast, secure, and modern WordPress experiences. Using frameworks like React or Vue.js, we build dynamic, responsive websites that deliver superior user experiences and technical performance.`,
    },
    {
      title: "4. WooCommerce & ECommerce Integration",
      content: `We create custom online stores with tailored payment gateways, inventory management, and product pages optimized for conversions. Your e-commerce platform is fully functional, secure, and designed to maximize sales.`,
    },
    {
      title: "5. WordPress Maintenance & Support",
      content: `Ongoing support ensures your WordPress website remains secure, up-to-date, and high-performing. We handle updates, monitor performance, and provide content management guidance so your site continues to deliver results.`,
    },
    {
      title: "6. UX/UI Design & Scalable Architecture",
      content: `Our designs combine intuitive interfaces with robust backend systems, ensuring your website is easy to use, visually appealing, and built to accommodate future growth. Scalability and long-term performance are always at the core of our approach.`,
    },
  ];

  return (
    <CommonAccordion
      title = "Explore Our WordPress Services Designed<br/>to Grow Your Business"
      subheding2 = "We cover every aspect of WordPress web development, from planning to post-launch support:"
      items = {accordionData}
      footer = "" // The image does not provide a specific footer, leaving it empty.
    />
  );
};