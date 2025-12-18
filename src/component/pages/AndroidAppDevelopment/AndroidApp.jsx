import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const AndroidApp = () => {
  const title = "Android App Development Strategies<br/>Designed to Enhance Customer Retention";
  const desc = "We focus on results, not just features. Our strategies include:"; 

  const options = [
    {
      heading: "User Retention Insights",
      description:
        "We focus on delivering highly personalized features, intuitive navigation, and seamless interactions. By creating a frictionless user experience, we keep users coming back to your app, increasing engagement metrics and fostering long-term loyalty."
    },
    {
      heading: "New Revenue Streams",
      description:
        "Our mobile solutions open up multiple avenues for monetization. From direct-to-consumer sales to subscription models and in-app purchases, we help you generate sustainable revenue while providing real value to your users."
    },
    {
      heading: "Operational Efficiency",
      description:
        "We integrate your app with internal systems, automate repetitive workflows, and streamline processes. This reduces manual effort, minimizes errors, and enhances productivity—especially important for enterprise-level operations."
    },
    {
      heading: "Superior Market Intelligence",
      description:
        "Through analytics and user behavior tracking, we provide actionable insights into how users interact with your app. This data-driven approach allows you to continuously refine features, improve user satisfaction, and stay ahead of competitors in a rapidly evolving market."
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