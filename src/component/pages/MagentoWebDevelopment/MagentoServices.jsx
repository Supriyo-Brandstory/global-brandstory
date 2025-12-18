import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const MagentoServices = () => {
  const accordionData = [
    {
      title: "1. Custom Magento Store Development",
      content: `Every business is unique, and so should be its ecommerce store. Our Magento experts design custom stores that reflect your brand, integrate seamlessly with your workflows, and deliver a smooth, engaging customer journey that drives sales and loyalty.`,
    },
    {
      title: "2. Magento 2 Development & Migration",
      content: `Upgrade to Magento 2 or migrate from legacy platforms with confidence. We maintain data integrity, protect SEO value, and ensure minimal downtime, providing a seamless transition that preserves operational efficiency and performance.`,
    },
    {
      title: "3. B2B Magento Solutions",
      content: (
        "For wholesale and enterprise clients, we develop tailored B2B solutions, including:<br/><br/><ul><li>Custom pricing and tiered product catalogs</li><li>Quote management and self-service dashboards</li><li>Seamless integration with ERP and CRM systems</li></ul>"
      ),
    },
    {
      title: "4. Custom Module & Extension Development",
      content: `Off-the-shelf Magento extensions can be limiting. Our team builds bespoke modules to address unique business needs, from specialized checkout flows to advanced reporting tools, providing exactly the functionality your store requires.`,
    },
    {
      title: "5. Performance Tuning & Optimization",
      content: `Speed and reliability are critical for ecommerce. We audit servers, databases, and code to optimize performance, ensuring lightning-fast load times and seamless functionality, even during peak traffic periods.`,
    },
    {
      title: "6. Post-Launch Support & Maintenance",
      content: `Our relationship doesn’t end at launch. We provide ongoing maintenance, continuous monitoring, and SEO optimization to keep your Magento store secure, high-performing, and fully optimized for growth.`,
    }
  ];

  return (
    <CommonAccordion
      title="Magento Services Tailored to Match Your Brand and Business Goals"
      subheding2="We don’t just build stores; we craft ecommerce platforms that solve real-world business challenges."
      items={accordionData}
    />
  );
};