import { CommonBigIndex } from "../common/CommonBigIndex";

export const ProvenImpact = () => {
  const heading = "Proven Impact: Case Studies";
  const description =
    "Our content strategy case studies show real results for clients across industries:";

  const cases = [
    {
      title: "Healthcare",
      description:
        "Targeted blogs and email campaigns led to a 3x increase in patient inquiries, improving engagement and conversion.",
    },
    {
      title: "SaaS",
      description:
        "A multi-channel content campaign boosted trial sign-ups by 40%, enhancing lead generation and product adoption.",
    },
    {
      title: "Retail",
      description:
        "Strategic content planning and social media engagement increased online sales by 35%, strengthening customer acquisition and revenue.",
    },
  ];
  const footer =
    "Every case demonstrates measurable growth driven by a tailored strategy.";
  return (
    <CommonBigIndex
      data={cases}
      description={description}
      caseLabel="Case"
      heading={heading}
      footer={footer}
    />
  );
};
