import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const TheProcess = () => {
  const accordionData = [
    {
      title: "1. Requirement Analysis",
      content: `We start with understanding your goals, system architecture, and business needs to create a personalized application maintenance and support services plan.`,
    },
    {
      title: "2. Performance Monitoring",
      content: `Continuous application monitoring tracks app health in real time, ensuring uptime, fast load times, and smooth user experiences.`,
    },
    {
      title: "3. Bug Fixing & Issue Resolution",
      content: `Our team identifies and resolves bugs quickly to maintain stability and reliability, keeping your apps running flawlessly.`,
    },
    {
      title: "4. Security Updates",
      content: `We implement timely security patches and updates to safeguard your apps against vulnerabilities and compliance risks.`,
    },
    {
      title: "5. Feature Enhancement",
      content: `Adding new functionalities and improving existing ones keeps your applications competitive and aligned with evolving business needs.`,
    },
    {
      title: "6. OS & Device Compatibility",
      content: `We ensure your apps work seamlessly across multiple operating systems and devices, maintaining consistent performance for all users.`,
    },
    {
      title: "7. Backup & Recovery",
      content: `Regular backups and recovery plans protect your data and ensure minimal disruption in case of failures or incidents.`,
    },
    {
      title: "8. App Store Compliance",
      content: `We keep your mobile apps aligned with app store guidelines, ensuring smooth approvals and uninterrupted availability for users.`,
    },
  ];

  return (
    <CommonAccordion2
      title="The Process Behind Smooth App Maintenance"
      description=""
      items={accordionData}
      splitRatio={0.5} 
    />
  );
};