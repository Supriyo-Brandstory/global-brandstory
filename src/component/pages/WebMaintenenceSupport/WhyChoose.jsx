import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const WhyChoose = () => {
  const title = "Why Choose Brandstory for<br/>Performance Marketing";
  const desc = "We leverage industry-leading tools to deliver efficient, proactive web maintenance:"; 

  const options = [
    {
      heading: "Uptime Monitoring Tools",
      description:
        "We use advanced monitoring tools to track your website’s availability in real time. Immediate alerts help us address any downtime swiftly, ensuring your site remains accessible to visitors at all times."
    },
    {
      heading: "Performance Optimization Suite",
      description:
        "Our toolkit includes solutions for caching, image optimization, and code cleanup. These enhancements keep your website fast, responsive, and efficient, providing a smooth experience for every user."
    },
    {
      heading: "CMS Plugin Management",
      description:
        "From core updates to third-party plugins, our tools help manage your CMS seamlessly. This ensures compatibility, smooth integrations, and minimal disruption while maintaining optimal performance."
    },
    {
      heading: "Automated Backup Solutions",
      description:
        "Regular backups safeguard your data and make restoration simple in the event of an issue. Your website’s content, settings, and configurations are always protected, giving you peace of mind."
    }
  ];

  return (
    <CommonOptionSelector2
      title={title}
      description={desc}
      options={options}
      footer="Our Technology Stack Is Chosen To Support Continuous Improvement, Minimize Risks, And Maximize Website ROI."
    />
  );
};