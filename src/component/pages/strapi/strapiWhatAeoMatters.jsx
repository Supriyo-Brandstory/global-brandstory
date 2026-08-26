import CommonCard from "../common/CommonCard";

const BOX_HEIGHT = "250px";
const BG_CYCLE = [
  "url('/images/ppc/bg-1.png')",
  "url('/images/ppc/bg-2.png')",
  "url('/images/ppc/bg-3.png')",
];

export const StrapiWhatAeoMatters = ({ data }) => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE || "";

  const seoData =
    data?.imgcards?.map((card, index) => ({
      title: card?.title,
      desc: card?.para,
      icon: card?.img?.url ? `${strapiUrl}${card.img.url}` : null,
      background: BG_CYCLE[index % BG_CYCLE.length],
      height: BOX_HEIGHT,
    })) || [];

  return (
    <CommonCard
      seoData={seoData}
      heding={data?.title}
      description={data?.para}
      footer={data?.bottomPara}
    />
  );
};

export default StrapiWhatAeoMatters;
