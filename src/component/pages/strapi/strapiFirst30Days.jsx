import CommonFirst30Days from "../common/CommonFirst30Days";

export const StrapiFirst30Days = ({ data }) => {
  if (!data) return null;

  return (
    <CommonFirst30Days
      label={data?.label}
      title={data?.title}
      orangeText={data?.orangeText}
      para={data?.para}
      weeks={data?.weeks || []}
      outcomeLabel={data?.outcomeLabel}
      outcomeText={data?.outcomeText}
    />
  );
};

export default StrapiFirst30Days;
