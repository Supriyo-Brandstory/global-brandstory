import CommonCardSlider from "../common/CommonCardSlider";

export const StrapiCardSlider = ({ data }) => {
  if (!data) return null;

  return (
    <CommonCardSlider
      label={data?.label}
      title={data?.title}
      orangeText={data?.orangeText}
      para={data?.para}
      slides={data?.slides || []}
    />
  );
};

export default StrapiCardSlider;
