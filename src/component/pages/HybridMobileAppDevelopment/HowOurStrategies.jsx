import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const HowOurStrategies = () => {
  const title =
    "Strategies That Optimize Hybrid Mobile App Development for Businesses";
  const desc = "";

  const options = [
    {
      heading: "Performance-Driven Development",
      description:
        "We build apps with speed, reliability, and responsiveness at their core. Optimized code, efficient caching, and careful architecture ensure your app loads quickly, responds instantly to user interactions, and minimizes errors, providing a seamless experience.",
    },
    {
      heading: "User-Centered Design",
      description:
        "Every interface and interaction is crafted with the end-user in mind. Our UX/UI team focuses on usability, accessibility, and intuitive flows, ensuring users can engage with your app effortlessly and enjoy a consistent, satisfying experience.",
    },
    {
      heading: "Data-Informed Decisions",
      description:
        "Analytics and user insights guide every optimization. We continuously monitor performance metrics, feature usage, and user behavior to refine functionality, prioritize updates, and make decisions that enhance engagement and retention.",
    },
    {
      heading: "Cross-Platform Consistency",
      description:
        "With a single codebase, we ensure that your app delivers a uniform experience across both iOS and Android. This consistency in design, interactions, and performance strengthens your brand identity and reduces maintenance complexity.",
    },
  ];

  return (
    <CommonOptionSelector2 title={title} description={desc} options={options} />
  );
};
