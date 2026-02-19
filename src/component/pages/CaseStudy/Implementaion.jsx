import CommonMetrix from "../common/CommonMetrix";

export const Implementaion = () => {
  const pointList = [
    "Conducted stakeholder interviews and user journey mapping",
    "Rebuilt sitemap and information architecture",
    "Designed modular UI system and reusable components",
    "Developed responsive pages optimized for performance",
    "Added contextual CTAs and demo booking flows",
    "Implemented analytics and heatmap tracking"
  ];


  return (
    <CommonMetrix
      title="Implementation Highlights"
    //   description="Primary goal was to transform the website into a consistent lead-generation channel."
    image='/images/CaseStudy/img-3.png'
      points={pointList}
    //   stats={statsData}
    ratio="4:3"
    />
  );
};
