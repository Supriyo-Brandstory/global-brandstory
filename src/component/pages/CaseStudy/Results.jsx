import { CommonBigIndexScrollable3 } from "../common/CommonBigIndexScrollable3";

export const Results = ({ data }) => {
  if (!data) return null;
  const { title, impactCards } = data;
  const heading = title || "fallback - Results and Business Impact";

  const newLabels = impactCards.map((item) => ({
    title: item?.impactPerc,
    description: item?.impactDesc
  }))


  const labels = [
    {
      title: "178%",
      description: "increase in demo requests"
    },
    {
      title: "3.1×",
      description: "growth in qualified leads"
    },
    {
      title: "46%",
      description: "lower bounce rate"
    },
    {
      title: "2.4×",
      description: "increase in session duration"
    },
    {
      title: "32%",
      description: "improved in conversion rate"
    },
    {
      title: "41%",
      description: "increase in organic traffic"
    }
  ];
  return (
    <CommonBigIndexScrollable3
      data={newLabels}
      heading={heading}
    />
  );
};