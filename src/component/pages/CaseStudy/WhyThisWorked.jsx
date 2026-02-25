import CommonMetrix from "../common/CommonMetrix";

export const WhyThisWorked = ({ data }) => {
  if (!data) return null;
  const { title, button, description, image } = data;

  const pointList = [
    "Journey-led navigation improved discoverability",
    "Modular system accelerated iterations",
    "Continuous analytics enabled rapid optimization",
  ];

  const imageBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE;
  const imageURL = `${imageBaseUrl}${image?.url}`;

  return (
    <CommonMetrix
      title={title}
      description={description}
      image={imageURL || '/images/CaseStudy/img-3.png'}
      // points={pointList}
      // stats={statsData}
      ratio="4:3"
      button={button?.buttonLabel}
      butnLink={button?.buttonUrl || '#'}
    />
  );
};
