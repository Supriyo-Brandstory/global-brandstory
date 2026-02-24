import CaseStudySearchGrid from "../common/caseStudySearchGrid";
import { CommonGridSelector } from "../common/CommonGridSelector";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE;

export const CaseStudies = ({ initialData = [], pagination = {} }) => {

  const dynamicCards = initialData.map(item => {
    const attr = item.attributes || item;
    const previewImage = attr.previewImage?.data?.attributes || attr.previewImage;

    // Fallback: Get image from the image slider section if previewImage is missing
    const sliderSection = attr.caseSections?.find(s => s.__component === "section.case-image-slider");
    const firstSliderImage = sliderSection?.images?.[0]?.attributes || sliderSection?.images?.[0];

    const finalImage = previewImage || firstSliderImage;

    return {
      category: attr.caseSections?.[0]?.industry || "Case Study",
      title: attr.caseStudyTitle,
      description: attr.caseSections?.[0]?.bannerPara,
      buttonText: "Read More",
      buttonLink: `/case-studies/${attr.caseStudySlug}`,
      publishedAt: attr.publishedAt,
      image: finalImage?.url ? (finalImage.url.startsWith('http') ? finalImage.url : `${STRAPI_URL}${finalImage.url}`) : ""
    };
  });

  // console.log(dynamicCards);

  const tabs = [
    {
      name: "All Case Studies",
      cards: dynamicCards
    }
  ];

  return (
    <CaseStudySearchGrid title="Case Studies" tabs={tabs} pagination={pagination} />
  );
};
