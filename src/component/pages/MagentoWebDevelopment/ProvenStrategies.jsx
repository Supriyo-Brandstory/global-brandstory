import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const ProvenStrategies = () => {
  const title = "Proven Strategies We Follow for Reliable and Scalable Magento Websites";
  const desc = "Our approach focuses on measurable results:";

  const options = [
    {
      heading: "Data-Driven Decisions",
      description:
        "Every recommendation we make is guided by analytics and real-world data. From design layouts to functionality enhancements, we ensure every decision aligns with measurable business outcomes, helping you make smarter investments and maximize ROI."
    },
    {
      heading: "User-Centric Design",
      description:
        "We focus on crafting seamless, intuitive experiences that guide customers naturally through the buying journey. By prioritizing usability, navigation, and accessibility, we increase engagement, conversions, and overall satisfaction."
    },
    {
      heading: "Automation & Efficiency",
      description:
        "Manual workflows slow businesses down. We integrate Magento with your ERP, CRM, and other systems to automate repetitive tasks, reduce errors, and streamline operations—freeing your team to focus on growth and strategic initiatives."
    },
    {
      heading: "Continuous Improvement",
      description:
        "Magento stores are dynamic, and so are market demands. We provide ongoing monitoring, optimization, and feature enhancements to ensure your store stays competitive, responsive, and aligned with evolving customer expectations."
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