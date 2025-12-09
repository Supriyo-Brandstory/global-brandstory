import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const CustomSoftwareDevelopment = () => {
  const accordionData = [
    {
      title: "1. Enterprise Resource Planning (ERP) Systems",
      content: `Our ERP solutions help streamline operations and consolidate workflows across departments. By automating inventory and supply chain management, integrating financial systems, and providing real-time reporting and analytics, we ensure your business operates efficiently and cohesively.`,
    },
    {
      title: "2. Customer Relationship Management (CRM) Systems",
      content: `Our CRM solutions enable you to manage client interactions effectively while gaining insights that drive growth. From lead tracking and sales automation to customer engagement analytics and personalized reporting, we help you make informed business decisions and strengthen customer relationships.`,
    },
    {
      title: "3. Mobile Applications (iOS, Android, Cross-Platform)",
      content: `We develop mobile applications that connect your business with customers and employees wherever they are. With intuitive interfaces, scalable backend infrastructure, push notifications, analytics, and offline capabilities, our apps provide seamless user experiences and robust functionality.`,
    },
    {
      title: "4. SaaS Products",
      content: `Our SaaS solutions are designed for subscription-based or enterprise use, with secure multi-tenant architecture, analytics-driven performance tracking, and scalable infrastructure to support rapid growth. These cloud-based products allow your business to operate efficiently and adapt quickly to market demands.`,
    },
    {
      title: "5. E-commerce Platforms",
      content: `We create customized e-commerce platforms that boost sales and enhance customer engagement. Features include mobile-first design, secure payment and inventory integration, and analytics-driven marketing automation to help you optimize performance and grow revenue.`,
    },
    {
      title: "6. Data Management & Analytics Platforms",
      content: `Our data management solutions turn raw data into actionable insights. Centralized dashboards, predictive analytics, reporting capabilities, and secure storage with access controls allow your business to make smarter, data-driven decisions.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Custom Software Development Services"
      subheding2 = "We provide end-to-end enterprise software solutions that address both immediate needs and long-term goals. Our services include:"
      items = {accordionData}
      footer = "Each service is designed to solve your unique challenges, not force your business to adapt to generic software."
    />
  );
};