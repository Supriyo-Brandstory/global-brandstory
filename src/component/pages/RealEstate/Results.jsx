import { CommonBigIndexScrollable3 } from "../common/CommonBigIndexScrollable3";

export const Results = () => {
//   const { title, impactCards } = data;
//   const heading = title || "fallback - Results and Business Impact";

  const labels = [
    {
      subTitle: "Full-Stack Execution",
      description: "Strategy, creative, campaigns, development, and analytics operate as one system."
    },
    {
      subTitle: "Faster Campaign Deployment",
      description: "Structured workflows reduce launch timelines."
    },
    {
      subTitle: "Project-Based Strategy",
      description: "Each development gets a dedicated funnel approach."
    },
    {
      subTitle: "Clear Reporting Systems",
      description: "Dashboards track leads, site visits, and revenue performance."
    },
    {
      subTitle: "Growth Built for Scale",
      description: "Campaigns adapt across multiple projects and locations."
    }
  ];
  return (
    <CommonBigIndexScrollable3
      data={labels}
      heading="Results and Business Impact"
    />
  );
};