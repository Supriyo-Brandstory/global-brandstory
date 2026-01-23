import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const WhyBrandsChoose = () => {
  const title = "Why Brands Choose BrandStory for AEO";
  const description =
    "BrandStory is chosen by brands that want to stay ahead in how AI engines understand, select, and showcase content. ";
  const data = [
    {
      title: "Global Coverage with Local Insight",
      description:
        "We work across regions, markets, and languages. Whether your content serves a global enterprise or a regional audience, we structure it with cultural context and platform-specific nuance in mind.",
      bgcolor: "#a03e17ff",
      logo: "/images/square-images/s7.png",
    },
    {
      title: "Human Strategy Meets AI Execution",
      description:
        "We bring smart thinking to AI-first delivery. Every piece of content is crafted with a clear user goal, structured for machine readability, and guided by prompt-level insight.",
      bgcolor: "#514f82ff",
      logo: "/images/square-images/s8.png",
    },
    {
      title: "Real-Time Performance Tracking",
      description:
        "We don’t wait to hear if it’s working. Our dashboards track your citations, prompt coverage, and schema health across AI engines in real time.",
      bgcolor: "#c1ba9cff",
      logo: "/images/square-images/s9.png",
    },
  ];
  const footer =
    "Each case demonstrates how PPC campaign management drives real ROI.";

  return (
    <CommonGridBox3
      boxHeight="350px"
      title={title}
      description={description}
      data={data}
      footer={footer}
    />
  );
};
