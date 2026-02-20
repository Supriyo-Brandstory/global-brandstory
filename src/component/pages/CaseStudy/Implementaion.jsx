import CommonMetrix from "../common/CommonMetrix";

export const Implementaion = ({ data }) => {
  if (!data) return null;

  const { title, image, description } = data;

  const pointList = [
    "Conducted stakeholder interviews and user journey mapping",
    "Rebuilt sitemap and information architecture",
    "Designed modular UI system and reusable components",
    "Developed responsive pages optimized for performance",
    "Added contextual CTAs and demo booking flows",
    "Implemented analytics and heatmap tracking"
  ];

  const imageBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE;
  const imageURL = `${imageBaseUrl}${image?.url}`;


  return (
    <CommonMetrix
      title={title || "fallback - Implementation Highlights"}
      //   description="Primary goal was to transform the website into a consistent lead-generation channel."
      image={imageURL || '/images/CaseStudy/img-3.png'}
      // points={pointList}
      description={description}
      //   stats={statsData}
      ratio="4:3"
    />
  );
};
