import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const SystematicApproach = () => {
  const accordionData = [
    {
      title: "Phase I: Discovery & Strategic Blueprinting",
      content: `We start by gaining a deep understanding of your business. This includes mapping workflows, identifying pain points, conducting stakeholder interviews, and analyzing user needs and technology gaps. The result is a comprehensive strategic blueprint that outlines project scope, milestones, and technology recommendations, ensuring every step is aligned with your business objectives.`,
    },
    {
      title: "Phase II: Solution Architecture & UX/UI Design",
      content: `Our architects and designers then create scalable and intuitive systems. We build secure, robust architectures designed for future growth, design user interfaces that are simple yet powerful, and produce high-fidelity prototypes to gather early feedback and validate concepts.`,
    },
    {
      title: "Phase III: Agile Development & Quality Assurance",
      content: `Development is carried out in iterative sprints, incorporating continuous feedback to ensure alignment with your goals. Rigorous quality assurance and automated testing guarantee a reliable, bug-free product, while the agile approach allows flexibility to adapt to evolving requirements.`,
    },
    {
      title: "Phase IV: Deployment, Integration & Post-Launch Support",
      content: `Finally, we ensure a smooth and sustainable launch. Our team handles seamless integration with existing systems, provides post-launch monitoring and support, and implements continuous improvements and updates to keep your solution performing at its best.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Systematic Approach to Custom Software Development"
      description="We follow the Blueprint-to-Launch™ methodology, a strategic approach to custom software development:<br/><br/>This framework ensures software that’s reliable, scalable, and designed for your business outcomes"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};