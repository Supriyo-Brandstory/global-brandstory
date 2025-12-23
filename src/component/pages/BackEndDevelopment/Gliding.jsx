import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const Gliding = () => {
  const accordionData = [
    {
      title: "Phase I: Architectural Blueprinting & Discovery",
      content: `We begin by gaining a deep understanding of your business goals, technical requirements, and user needs. Whether your platform requires a monolithic system, microservices, or serverless architecture, we create a future-proof blueprint that aligns with your growth plans and ensures scalability, maintainability, and resilience from day one.`,
    },
    {
      title: "Phase II: Data Modeling & API Engineering",
      content: `Next, we focus on designing efficient database schemas and robust RESTful or GraphQL APIs. Each data model and API endpoint is carefully structured for fast performance, secure communication, and easy integration with front-end systems, third-party tools, and internal workflows. Comprehensive documentation ensures your team can maintain and extend the platform with confidence.`,
    },
    {
      title: "Phase III: High-Performance Coding & Integration",
      content: `Our developers implement modular, maintainable code using technologies such as Node.js, Python, or Java. Key functionalities—including authentication, payment processing, and external API integrations—are implemented securely and efficiently, ensuring your platform operates smoothly and reliably under real-world load conditions.`,
    },
    {
      title: "Phase IV: Post-Deployment & DevOps",
      content: `Launching the back-end is just the beginning. We provide continuous monitoring, performance optimization, and ongoing maintenance, supported by CI/CD pipelines for seamless updates. This approach minimizes downtime, ensures robust performance, and allows your platform to evolve alongside your business needs.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Guiding Every Back-<br/>End Development Project With Our Proven Methodology"
      description="Our approach ensures a reliable, scalable, and secure back-end from day one:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};