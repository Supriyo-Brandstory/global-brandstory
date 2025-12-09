import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const SecureAndSclable = () => {
  const accordionData = [
    {
      title: "1. Corrective Maintenance",
      content: `Fixing bugs alone isn’t enough. Our team performs in-depth root-cause analysis to address issues at their source, ensuring they don’t reappear. This approach keeps your software stable, reduces downtime, and minimizes disruptions to your business operations.`,
    },
    {
      title: "2. Adaptive Maintenance",
      content: `Technology evolves constantly and your software should keep pace. We update applications to remain compatible with new operating systems, integrate seamlessly with third-party APIs, and meet changing regulatory or compliance requirements. This ensures your systems stay relevant and fully functional in a shifting digital landscape.`,
    },
    {
      title: "3. Perfective Maintenance",
      content: `Software should grow alongside your business. Through performance enhancements, functionality refinements, and user experience improvements, we make sure your applications remain effective and aligned with your business goals. Every change is designed to add value and improve outcomes.`,
    },
    {
      title: "4. Preventive Maintenance",
      content: `We believe prevention is better than cure. By conducting regular system health checks, applying timely security updates, refactoring code for long-term stability, and monitoring performance continuously, we reduce risks before they escalate. This proactive approach extends the lifespan of your software while lowering the total cost of ownership (TCO).`,
    }
  ];

  return (
    <CommonAccordion
      title = "Secure and Scalable Software Support Services"
      subheding2 = "We provide comprehensive software maintenance and support tailored to your business needs. Our services cover the full spectrum of software care, ensuring your applications remain reliable and future-proof."
      items = {accordionData}
      footer = ""
    />
  );
};