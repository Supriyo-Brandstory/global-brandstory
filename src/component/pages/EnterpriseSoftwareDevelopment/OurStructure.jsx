import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const OurStructure = () => {
  const accordionData = [
    {
      title: "1. Discovery & Business Analysis",
      content: `We begin by gaining a deep understanding of your organization—your workflows, operational challenges, and long-term goals. Through stakeholder interviews, process mapping, and business analysis, we identify opportunities for optimization and ensure that the solution aligns with your strategic objectives from day one.`,
    },
    {
      title: "2. Solution Architecture & Technical Design",
      content: `Our experts design scalable, secure, and future-ready architectures that form the foundation of your enterprise software. Every design decision is guided by performance, compliance, and adaptability—ensuring that your system not only meets today’s requirements but is prepared to evolve with tomorrow’s demands.`,
    },
    {
      title: "3. Agile Development & CI/CD",
      content: `We follow agile methodology, leveraging DevOps practices and continuous integration/continuous delivery pipelines. This allows us to deliver incremental value in sprints, incorporate real-time feedback, and maintain flexibility—ensuring faster releases without compromising quality.`,
    },
    {
      title: "4. Testing & Deployment",
      content: `Before launch, every feature undergoes rigorous quality assurance, performance testing, and security validation. This meticulous approach minimizes risks and guarantees a smooth, reliable deployment, enabling your teams to adopt the system with confidence.`,
    },
    {
      title: "5. Change Management & Post-Launch Support",
      content: `Our engagement doesn’t end at deployment. We provide structured change management, user training, and dedicated support to ensure seamless adoption. Post-launch, we continuously monitor, maintain, and optimize your systems so they perform at peak efficiency and continue to deliver long-term business value.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Our Structured Approach to Business-Centric Software Development"
      subheding2 = "Every successful solution is backed by a strong process. "
      items = {accordionData}
      footer = "Our commitment to a structured, agile approach ensures we deliver high-quality, scalable solutions that drive measurable business value."
    />
  );
};