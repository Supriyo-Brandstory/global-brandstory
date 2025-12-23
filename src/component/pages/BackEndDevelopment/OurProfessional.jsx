import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const OurProfessional = () => {
  const accordionData = [
    {
      title: "1. Custom-Coded Solutions",
      content: `Every business has unique workflows and requirements. Our team develops back-end systems from scratch, tailored to your specific logic, processes, and security needs. This ensures that your digital platform operates efficiently while remaining fully aligned with your business goals.`,
    },
    {
      title: "2. Scalable & Efficient Databases",
      content: `We design databases with MongoDB, PostgreSQL, MySQL, and Redis that prioritize fast data retrieval, reliability, and long-term scalability. Our architectures handle growth gracefully, maintaining performance even as user demand and data volume increase.`,
    },
    {
      title: "3. Enterprise-Grade Security",
      content: `Protecting sensitive information is a top priority. We implement data encryption, OAuth 2.0 authentication, and regular security audits to safeguard user data and maintain compliance with standards such as GDPR and HIPAA.`,
    },
    {
      title: "4. Seamless Third-Party Integrations",
      content: `Your back-end should communicate effortlessly with essential services. We integrate payment gateways like Stripe, email platforms like SendGrid, and analytics tools, creating a unified ecosystem that supports smooth, automated operations.`,
    },
    {
      title: "5. Cloud-Native Architecture",
      content: `Leveraging AWS, Google Cloud, or Azure, we build fault-tolerant, highly available back-end systems capable of handling heavy traffic and ensuring uninterrupted service. Cloud-native design guarantees resilience, scalability, and cost-efficiency.`,
    },
    {
      title: "6. High-Performance API Development",
      content: `We develop RESTful or GraphQL APIs that act as the connective tissue between your front-end, third-party services, and core business logic. Each API is designed to be fast, secure, and well-documented, enabling smooth communication and future scalability.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Our Professional Back-End Development Services for Seamless Performance"
      subheding2 = "We offer end-to-end back-end solutions that are secure, high-performing, and tailored to your business needs:"
      items = {accordionData}
      footer = "" 
    />
  );
};