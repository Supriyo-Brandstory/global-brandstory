import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const OurMethod = () => {
  const accordionData = [
    {
      title: "Phase I: Business & Technical Discovery",
      content: `Before we talk about technology, we talk about strategy. In this phase, we dive deep into your business goals, user behaviors, and existing technology landscape, asking why before what. We work to understand your business objectives, identify user needs and pain points, and evaluate current systems and technical constraints. By the end of this phase, we have a crystal-clear understanding of your project’s scope, risks, and opportunities.`,
    },
    {
      title: "Phase II: Solution Architecture & System Design",
      content: `Next, we design the backbone of your software. Every technical decision—technology stack, microservices, database schema, API integrations—is made to ensure scalability, security, and performance. We select the right tools and platforms, define microservices and modular components, map data flows, and design for long-term maintainability. This phase turns strategy into a blueprint your development team can trust.`,
    },
    {
      title: "Phase III: UX/UI Wireframing & Prototyping",
      content: `A system without user-centric design is like a building with no doors. We translate the technical architecture into tangible user experiences through low, mid, and high-fidelity wireframes. Interactive prototypes allow stakeholders to validate workflows, conduct user testing, and provide feedback. The result is a design that users understand intuitively and your team can implement confidently.`,
    },
    {
      title: "Phase IV: Documentation & Handoff",
      content: `Finally, we ensure your team has everything needed to succeed. We provide architecture diagrams for clarity, technical specifications for developers, and wireframe playbooks to maintain design consistency. This structured handoff enables seamless execution and sets the stage for a successful build.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Our Method for Designing Business-Centric Software"
      description="We follow the Structure & Flow™ Framework, a unique approach that ensures your software architecture and wireframes are not only technically robust but also aligned with your business objectives and user needs.<br/><br/>With this handoff, your development process is predictable, efficient, and free from costly confusion."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};