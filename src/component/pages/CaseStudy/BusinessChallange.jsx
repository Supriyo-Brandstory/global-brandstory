import CommonText from "../common/CommonText"

export const BusinessChallange = ({ data }) => {
  if (!data) return null;
  const { title, description } = data;

  return (
    <CommonText
      title={title || "Business Challenge - dummy"}
      description={description || "dummy_para inside the businessChallenge"}
    />
  );
};
