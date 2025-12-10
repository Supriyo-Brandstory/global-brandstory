import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const OurStepByStep = () => {
  const accordionData = [
    {
      title: "1. Discovery & Analysis",
      content: `We start by understanding your business needs, identifying data challenges, and clarifying long-term goals. This phase ensures that every decision aligns with your strategic objectives.`,
    },
    {
      title: "2. Planning & Architecture",
      content: `Next, we design a scalable database architecture tailored to your requirements. Our planning ensures that your systems can grow with your business while maintaining performance, security, and reliability.`,
    },
    {
      title: "3. Development & Implementation",
      content: `Our team builds and deploys SQL and NoSQL systems using best practices to deliver robust, efficient, and secure databases.`,
    },
    {
      title: "4. Testing & Quality Assurance",
      content: `Before launch, we rigorously validate system performance, security, and data integrity to ensure the database meets your business expectations.`,
    },
    {
      title: "5. Maintenance & Optimization",
      content: `After deployment, we continuously monitor, fine-tune, and upgrade your systems. This proactive approach maximizes ROI, keeps your databases performing optimally, and supports long-term scalability.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Our Step-by-Step Approach to<br/>Database Development"
      subheding2 = "We follow a structured database development methodology that delivers consistent results."
      items = {accordionData}
      footer = "Our collaborative development approach ensures transparency. You’re involved at every stage, from project timeline discussions to the final deployment."
    />
  );
};