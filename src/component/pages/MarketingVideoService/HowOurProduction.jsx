import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const HowOurProduction = () => {
  const title = "How Our Production Tools Enhance<br/>Video Quality and Performance";
  const desc = "To deliver professional, high-quality results, we leverage:";

  const options = [
    {
      heading: "Production Equipment",
      description:
        "4K cameras, drones, and advanced lighting rigs to capture high-quality footage for any environment."
    },
    {
      heading: "Animation & Motion Graphics",
      description:
        "Adobe After Effects and Cinema 4D for dynamic visuals, motion graphics, and 3D animations that elevate storytelling."
    },
    {
      heading: "Audio & Editing",
      description:
        "Pro Tools, Adobe Premiere Pro, and DaVinci Resolve for precise audio mixing, seamless editing, and professional-grade post-production."
    },
    {
      heading: "Analytics & Optimization",
      description:
        "Google Analytics, social media insights, and heatmaps to measure engagement, optimize content, and maximize ROI."
    }
  ];
  
  const footer = "Our combination of creative skill and technical precision ensures your video is remembered.";

  return (
    <CommonOptionSelector2
      title={title}
      description={desc}
      options={options}
      footer={footer}
    />
  );
};