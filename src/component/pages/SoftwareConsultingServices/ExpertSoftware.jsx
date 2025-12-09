import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const ExpertSoftware = () => {
  const accordionData = [
    {
      title: "1. Technology Audit & Gap Analysis",
      content: `A detailed review of your current systems, identifying strengths, weaknesses, and hidden opportunities.`,
    },
    {
      title: "2. Strategic IT Blueprinting",
      content: `A phased, actionable technology roadmap that aligns investments with long-term goals.`,
    },
    {
      title: "3. Solution Architecture & Technical Specifications",
      content: `Comprehensive blueprints for custom software development and integrations.`,
    },
    {
      title: "4. Vendor & Platform Selection",
      content: `Independent, data-driven recommendations for third-party tools, ensuring cost efficiency and fit.`,
    },
    {
      title: "5. Business Process Automation",
      content: `Strategies to eliminate manual inefficiencies, optimize workflows, and improve productivity.`,
    },
    {
      title: "6. Execution Oversight & Governance",
      content: `Expert guidance during development to ensure projects meet quality, timelines, and budgets.`,
    },
    {
      title: "7. Post-Launch Optimization",
      content: `Ongoing monitoring, support, and governance frameworks to drive continuous improvement.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Expert Software Consulting Services<br/>for Modern Businesses"
      subheding2 = "At BrandStory, we don’t offer one-size-fits-all solutions. Our software consulting services are tailored to your unique business model, growth stage, and industry challenges. Here’s what we bring to the table:"
      items = {accordionData}
      footer = "These services go beyond solving today’s problems—they prepare you for tomorrow’s opportunities."
    />
  );
};