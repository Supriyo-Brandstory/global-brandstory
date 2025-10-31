import CommonAccordion2 from '../common/CommonAccordion2';

export const OurFullList = () => {
  const accordionData = [
    {
      title: "Comprehensive Cybersecurity Assessment",
      content:
        "A thorough evaluation of your organization's security posture to identify vulnerabilities and risks across all systems and operations.",
    },
    {
      title: "IT Security Audits And Compliance",
      content:
        "Detailed audits to ensure your IT infrastructure meets industry security standards and regulatory compliance requirements (e.g., GDPR, HIPAA).",
    },
    {
      title: "Real-World Penetration Testing",
      content:
        "Simulated cyberattacks designed to find exploitable weaknesses in your systems and applications before malicious actors do.",
    },
    {
      title: "Managed Cybersecurity Solutions",
      content:
        "Outsourced security services, including monitoring, threat detection, and incident response, to provide 24/7 protection.",
    },
    {
      title: "Ongoing Vulnerability Management",
      content:
        "Continuous scanning, identification, and remediation of security flaws to maintain a strong defense against emerging threats.",
    },
    {
      title: "Tailored Compliance Support",
      content:
        "Expert assistance in navigating complex compliance frameworks and implementing the necessary controls to achieve and maintain certification.",
    },
  ];

  return (
    <CommonAccordion2
      title="Explore Our Full List of Cybersecurity Services"
      description="Sometimes, The Biggest Risks Are The Ones You Don't Even Know About. We Offer A Full Range Of Cybersecurity Services That Go Beyond Just Protection. Each Service Is Designed To Cover A Specific Part Of Your Business Safety Net."
      items={accordionData}
      splitRatio={0.45}
    />
  );
};