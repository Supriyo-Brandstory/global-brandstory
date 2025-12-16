import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const DedicatedTeam = () => {
  const accordionData = [
    {
      title: "1. WordPress Development",
      content: `We specialize in building bespoke WordPress themes, custom plugins, and scalable architectures tailored to your business. Each website is designed to be flexible, high-performing, and aligned with your unique goals.`,
    },
    {
      title: "2. UX/UI Design",
      content: `Our team crafts intuitive, conversion-focused interfaces that guide users effortlessly through your site. Thoughtful design and seamless navigation ensure a positive experience that encourages engagement and action.`,
    },
    {
      title: "3. Headless Solutions",
      content: `We leverage modern frameworks like React and Vue.js to implement decoupled, headless WordPress solutions. This approach enhances speed, security, and flexibility, delivering cutting-edge digital experiences.`,
    },
    {
      title: "4. WooCommerce Development",
      content: `From product pages to payment gateways and inventory management, we build fully customized eCommerce solutions. Our WooCommerce expertise ensures smooth, secure, and conversion-optimized shopping experiences.`,
    },
    {
      title: "5. Maintenance & Support",
      content: `Post-launch, our dedicated team monitors performance, handles updates, and provides ongoing technical support. Your website remains secure, fast, and fully operational, freeing your team to focus on business growth.`,
    }
  ];

  return (
    <CommonAccordion
      title = "A Dedicated Team Committed to Excellence in WordPress Development"
      subheding2 = "Our team is made up of specialists in:"
      items = {accordionData}
      footer = "" // The image/text does not provide a specific footer, leaving it empty.
    />
  );
};