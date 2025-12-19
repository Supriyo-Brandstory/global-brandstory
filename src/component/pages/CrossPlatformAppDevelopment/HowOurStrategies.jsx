import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const HowOurStrategies = () => {
  const title = "How Our Strategies Ensure Successful<br/>Cross-Platform App Development"; 
  const desc = "Our strategies are designed to ensure your app performs, engages, and converts:"; 

  const options = [
    {
      heading: "Market-Centric Planning", 
      description:
        "We begin by thoroughly understanding your target audience, analyzing competitors, and evaluating industry trends. This research-driven approach ensures your app addresses real user needs, stands out in the market, and aligns with your business objectives." 
    },
    {
      heading: "Agile Development", 
      description:
        "Our iterative development process allows for continuous feedback and rapid adjustments. This ensures that the final product is polished, functional, and delivered on schedule while maintaining the highest quality standards." 
    },
    {
      heading: "Performance Optimization", 
      description:
        "We prioritize speed and responsiveness to ensure a seamless user experience. By optimizing code, assets, and third-party integrations, we build apps that perform flawlessly across various devices and network conditions." 
    },
    {
      heading: "Data-Driven Decisions", 
      description:
        "We leverage analytics to track user behavior and app performance. These insights allow us to make informed updates, refine features, and continuously improve the app's overall impact and user satisfaction." 
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