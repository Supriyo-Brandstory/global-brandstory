import CommonTeamPerformance from "../common/CommonTeamPerformance";

export const StrapiTeamPerformance = ({ data }) => {
  if (!data) return null;

  return (
    <CommonTeamPerformance
      label={data?.label}
      title={data?.title}
      orangeText={data?.orangeText}
      titleSuffix={data?.titleSuffix}
      para={data?.para}
      cards={data?.cards || []}
      footerText={data?.footerText}
      footerOrangeText={data?.footerOrangeText}
      footerNote={data?.footerNote}
      image={data?.image}
      imageAlt={data?.imageAlt}
    />
  );
};

export default StrapiTeamPerformance;
