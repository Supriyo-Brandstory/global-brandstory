import CommonText from "../common/CommonText"

export const BusinessChallange = ({ data }) => {
  if (!data) return null;
  const { title, description } = data;

  return (
    <CommonText
      title={title}
      description={description}
    />
  );
};
