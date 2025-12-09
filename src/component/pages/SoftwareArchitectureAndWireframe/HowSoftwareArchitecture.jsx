import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const HowSoftwareArchitecture = () => {
  const accordionData = [
    {
      title: "1. Technical Debt",
      content: `Shortcuts or rushed solutions may work temporarily, but they accumulate hidden costs that slow future development.`,
    },
    {
      title: "2. Scalability Issues",
      content: `A product that works for 100 users may collapse under 10,000 if it isn’t built to scale.`,
    },
    {
      title: "3. Security Vulnerabilities",
      content: `Poorly designed systems are prone to breaches, putting your business and users at risk.`,
    },
    {
      title: "4. High Total Cost Of Ownership (TCO)",
      content: `Constant firefighting and fixes inflate costs and prevent teams from innovating.`,
    }
  ];

  return (
    <CommonAccordion
      title = "How Software Architecture Shapes<br/>Your Software’s Future"
      subheding2 = "Software architecture is more than just a technical exercise. It’s a strategic business decision. Poor architecture can derail your entire product and cost your company time, money, and credibility. A weak foundation can lead to:"
      items = {accordionData}
      footer = "For founders and CTOs, understanding this is critical. A strong software architecture is a non-negotiable investment that ensures long-term viability, smoother development, and predictable outcomes. It’s the difference between software that merely works and software that thrives."
    />
  );
};