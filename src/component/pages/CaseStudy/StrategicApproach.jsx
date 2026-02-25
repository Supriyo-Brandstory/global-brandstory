import { CommonBigIndexScrollable2 } from "../common/CommonBigIndexScrollable2";

export const StrategicApproach = ({ data }) => {
  if (!data) return null;
  const { title, description, card } = data;

  const heading = title;

  const newCases = card?.map((item) => ({
    title: item?.title,
    description: item?.description
  })) || [];

  const cases = [
    {
      title: "User-first architecture",
      description:
        "reorganized navigation around buyer journeys instead of features"
    },
    {
      title: "Message hierarchy",
      description:
        "simplified copy to highlight outcomes over technical complexity"
    },
    {
      title: "Conversion pathways",
      description:
        "embedded CTAs and micro-conversions across the funnel"
    }
  ];

  return (
    <CommonBigIndexScrollable2
      data={newCases}
      heading={heading}
      description={description}
    //   caseLabel="Outcome"
    />
  );
};