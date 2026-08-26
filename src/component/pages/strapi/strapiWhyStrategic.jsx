import CommonAbout from "../common/CommonAbout";

export const StrapiWhyStrategic = ({ data }) => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE || "";
  const imageUrl = data?.img?.url
    ? `${strapiUrl}${data.img.url}`
    : data?.image?.url
      ? `${strapiUrl}${data.image.url}`
      : null;

  const points =
    data?.points?.map((item) => item?.point || item?.text || item?.para || item).filter(Boolean) ||
    [];

  return (
    <CommonAbout
      title={data?.title ? `<h2>${data.title}</h2>` : null}
      subtitle={data?.subtitle || data?.para || null}
      text1={data?.text1 || data?.orangeText || ""}
      points={points}
      text2={data?.text2 || data?.bottomPara || null}
      imageSrc={imageUrl}
      imageAlt={data?.img?.alternativeText || data?.imageAlt || data?.title || ""}
      imageReverse={Boolean(data?.imageReverse)}
    />
  );
};

export default StrapiWhyStrategic;
