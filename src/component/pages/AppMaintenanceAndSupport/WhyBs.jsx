import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const WhyBs = () => {
  const title = "Why Brandstory for App Maintenance & Support Services";
  const desc = ""; 

  const options = [
    {
      heading: "Tailored Support Services",
      description:
        "Our app maintenance approach is customized for every client, covering mobile, web, and hybrid platforms. From quick fixes to major updates, we ensure your applications perform at their best."
    },
    {
      heading: "DevOps Maintenance Cycles",
      description:
        "We use DevOps driven processes for faster deployments, continuous integration, and smooth updates. This ensures your apps remain secure and scalable at all times."
    },
    {
      heading: "Platform-Specific Expertise",
      description:
        "Our team brings specialized knowledge for iOS, Android, and web platforms, providing application support aligning with platform specific requirements and best practices."
    },
    {
      heading: "MCP Safety Guardrails",
      description:
        "With Maintenance Control Protocols (MCP), we enforce automated checks, compliance, and performance benchmarks. This ensures reliability and security for every application."
    }
  ];

  return (
    <CommonOptionSelector2
      title={title}
      description={desc}
      options={options}
    />
  );
};