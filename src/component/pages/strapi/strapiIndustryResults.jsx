import CommonIndustryResults from "../common/CommonIndustryResults";

export const StrapiIndustryResults = ({ data }) => {
  if (!data) return null;

  return (
    <CommonIndustryResults
      title={data?.title}
      orangeText={data?.orangeText}
      subtitle={data?.subtitle}
      cards={data?.cards || []}
    />
  );
};

export default StrapiIndustryResults;
