import { CommonBigIndexScrollable2 } from "../common/CommonBigIndexScrollable2";

export const StrategicApproach = () => {
  const heading = "Strategic Approach";

const cases = [
    {
        title:"User-first architecture",
      description:
        "reorganized navigation around buyer journeys instead of features"
    },
    {
        title:"Message hierarchy",
      description:
        "simplified copy to highlight outcomes over technical complexity"
    },
    {
        title:"Conversion pathways",
      description:
        "embedded CTAs and micro-conversions across the funnel"
    }
  ];

  return (
    <CommonBigIndexScrollable2
      data={cases}
      heading={heading}
      description="We focused on aligning clarity, structure, and intent before execution."
    //   caseLabel="Outcome"
    />
  );
};