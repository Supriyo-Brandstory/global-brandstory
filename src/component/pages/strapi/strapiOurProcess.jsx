import CommonOurProcess from "../common/CommonOurProcess";

export const StrapiOurProcess = ({ data }) => {
  if (!data) return null;

  return (
    <CommonOurProcess
      label={data?.label}
      title={data?.title}
      orangeText={data?.orangeText}
      para={data?.para}
      buttons={data?.buttons || []}
      steps={data?.steps || []}
    />
  );
};

export default StrapiOurProcess;
