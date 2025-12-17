import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const WebMaintenence = () => {
  const accordionData = [
    {
      title: "1. Security & Compliance",
      content: `Protecting your website and user data is our top priority. We perform regular security scans, manage firewalls, and remove malware to ensure your site remains secure and compliant with industry standards.`,
    },
    {
      title: "2. Performance Optimization",
      content: `A fast website keeps visitors engaged and drives better results. We continuously optimize performance through caching, image compression, code cleanup, and other fine-tuning techniques, ensuring your site remains responsive under all conditions.`,
    },
    {
      title: "3. CMS & Plugin Updates",
      content: `Keeping your content management system and plugins up to date is crucial for functionality and security. We manage core, theme, and plugin updates seamlessly, preventing compatibility issues and reducing potential vulnerabilities.`,
    },
    {
      title: "4. Content & Backup Management",
      content: `Regular backups protect your data and safeguard against unexpected issues. In parallel, we keep your content fresh and relevant, helping your site stay engaging, accurate, and aligned with your business goals.`,
    },
    {
      title: "5. Emergency Support & Bug Fixes",
      content: `When unexpected issues arise, you need fast and reliable solutions. Our team responds promptly to troubleshoot and fix critical problems, minimizing downtime and ensuring smooth operations.`,
    },
    {
      title: "6. Third-Party Integrations",
      content: `Your website often relies on external tools like CRMs, marketing platforms, and analytics services. We ensure these integrations are seamless, efficient, and fully functional, so your digital ecosystem works harmoniously.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Web Maintenance and Support Services for Reliable Online Operations"
      subheding2 = "We offer comprehensive web maintenance services tailored to your business, covering all aspects of website health and functionality:"
      items = {accordionData}
      footer = "Our web maintenance framework ensures no aspect of your site is overlooked, giving you peace of mind and measurable results."
    />
  );
};