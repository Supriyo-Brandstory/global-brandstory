import CommonAccordion2 from '../common/CommonAccordion2';

export const Precision = () => {
 const accordionData = [
    {
      // Title from the image
      title: "API Consulting Services",
      // Content created to match the title
      content:
        "Strategic guidance on API architecture, design best practices, and defining a clear API roadmap to align with your overall business objectives and digital strategy.",
    },
    {
      // Title from the image
      title: "API Design & Implementation",
      // Content created to match the title
      content:
        "Developing robust, scalable, and well-documented APIs from scratch using industry-standard protocols (REST, GraphQL) and agile development methodologies.",
    },
    {
      // Title from the image
      title: "API Security Testing",
      // Content created to match the title
      content:
        "Comprehensive security audits and testing (penetration testing, vulnerability scanning) to ensure your APIs are protected against common threats like injection and unauthorized access.",
    },
    {
      // Title from the image
      title: "API Integration Solutions",
      // Content created to match the title
      content:
        "Seamlessly connecting your internal systems (CRMs, ERPs, databases) and external third-party services to create powerful, integrated digital experiences.",
    },
    {
      // Title from the image
      title: "API Automation",
      // Content created to match the title
      content:
        "Implementing automated workflows for API testing, deployment, and monitoring to accelerate development cycles and ensure consistent quality.",
    },
    {
      // Title from the image
      title: "API Management",
      // Content created to match the title
      content:
        "Setting up centralized platforms for API governance, version control, access control, traffic routing, and detailed analytics to manage your entire API lifecycle.",
    },
    {
      // Title from the image
      title: "API Configuration",
      // Content created to match the title
      content:
        "Fine-tuning performance parameters, rate limits, caching policies, and environment-specific settings to maximize API efficiency and resource utilization.",
    },
    {
      // Title from the image
      title: "Ongoing Support & Maintenance",
      // Content created to match the title
      content:
        "Continuous monitoring, performance optimization, bug fixes, and version upgrades to ensure your APIs remain secure, functional, and aligned with evolving business needs.",
    },
  ];

  return (
    <CommonAccordion2
      title="Designed for Precision, Built for Scale:<br/>Our Full-Spectrum API Services"
      description="
      Modern enterprises don’t need generic integrations. They need API ecosystems engineered for performance, security, and longevity.
      <br/><br />
      Our capabilities span the full API lifecycle:
      <br><br/>
      <span class='highlited-text'>At Brandstory, we offer end-to-end API services that cover the full lifecycle</span>
      "
      items={accordionData}
      splitRatio={0.5}
    />
  );
};