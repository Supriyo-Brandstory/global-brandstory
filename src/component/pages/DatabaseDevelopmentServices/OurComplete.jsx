import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const OurComplete = () => {
  const accordionData = [
    {
      title: "Database Architecture & Design",
      content: `We design databases that stand the test of time. Our team creates both logical and physical data models, ensuring data is structured efficiently for current and future needs. We build scalable architectures for SQL and NoSQL databases, capable of handling growing workloads without compromising performance. Coupled with robust data governance strategies, our approach maintains data accuracy, security, and regulatory compliance across your organization.`,
    },
    {
      title: "Custom Database Solutions",
      content: `Your business has unique requirements, and your database should reflect them. We deliver tailored solutions designed to fit your specific workflows, optimize performance through query tuning, and implement secure, reliable systems. These solutions enhance operational efficiency, support business growth, and provide a foundation for data-driven decision-making.`,
    },
    {
      title: "SQL And NoSQL Development",
      content: `We offer end-to-end development for both relational and non-relational databases. For structured data, we leverage SQL solutions like MySQL and PostgreSQL, while NoSQL systems provide flexibility for high-volume, schema-less applications. Our team focuses on performance optimization through indexing, query tuning, and best practices to ensure fast, reliable access to your data.`,
    },
    {
      title: "Data Migration & ETL",
      content: `Migrating data can be complex and risky if not handled properly. We manage smooth, secure transfers from legacy systems while building ETL pipelines that maintain clean, accurate data flow. Comprehensive integrity checks and validation at every stage ensure your data is reliable, consistent, and ready to support your business processes.`,
    },
    {
      title: "Performance Tuning & Maintenance",
      content: `Even the best-designed database requires ongoing care. We continuously monitor system performance, optimize queries, reduce downtime, and provide post-deployment support. Our proactive maintenance ensures your database operates at peak efficiency, supporting business continuity and scalable growth.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Our Complete Range<br/>of Database<br/>Development<br/>Services"
      description="We provide end-to-end database development services, covering every stage of your data journey."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};