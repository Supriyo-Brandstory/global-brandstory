import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const EnterpriseSoftware = () => {
  const accordionData = [
    {
      title: "Custom Enterprise Software Development",
      content: `We build enterprise-grade solutions designed specifically for your business processes, objectives, and industry environment. Rather than forcing you to adapt to off-the-shelf tools, our custom applications are tailored to fit seamlessly into your operations. From workflow management systems to analytics platforms, every solution is engineered to improve efficiency, reduce risks, and create long-term value.`,
    },
    {
      title: "Legacy System Modernization",
      content: `Outdated systems can limit innovation, increase maintenance costs, and create compliance risks. We help enterprises modernize their legacy infrastructure through cloud adoption, system refactoring, and seamless data migration. The result is a secure, scalable, and future-ready platform that maintains business continuity while unlocking new opportunities for growth.`,
    },
    {
      title: "Enterprise Application Integration",
      content: `Disconnected tools and fragmented data often slow down decision-making. Our integration services connect your enterprise applications, data silos, and third-party platforms into a unified ecosystem. By enabling smooth communication across systems, we ensure that information flows efficiently, operations run seamlessly, and your teams work smarter—not harder.`,
    },
    {
      title: "Business Process Automation",
      content: `Manual processes drain resources and limit scalability. We design automation solutions that streamline operations across finance, HR, supply chain, customer service, and beyond. From intelligent workflows to AI-driven automation, our systems reduce errors, accelerate outcomes, and free your teams to focus on high-value initiatives.`,
    },
    {
      title: "Industry-Specific Solutions",
      content: `Every industry comes with its own set of challenges. That’s why we deliver specialized solutions such as custom ERP systems, CRM platforms, supply chain management tools, and advanced data integration frameworks. Whether you’re in healthcare, finance, manufacturing, or retail, our tailored software ensures compliance, efficiency, and competitive advantage.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Enterprise Software Development Services Designed for Your Business"
      description="We offer end-to-end services that cover every stage of your software journey:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};