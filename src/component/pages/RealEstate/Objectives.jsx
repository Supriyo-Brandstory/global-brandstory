import { CommonBigIndexScrollable2 } from "../common/CommonBigIndexScrollable2";

export const Objectives = () => {
  const heading = "Objectives and Success Metrics";

const cases = [
    {
        title:"Lead Quality Matters",
      description:
        "Volume without intent increases sales friction."
    },
    {
        title:"Creative Drives Response",
      description:
        "Project storytelling influences visit decisions."
    },
    {
        title:"Tracking Defines ROI",
      description:
        "Without attribution clarity, budgets leak silently."
    }
  ];

  return (
    <CommonBigIndexScrollable2
      data={cases}
      heading={heading}
      description="Real estate marketing has shifted from awareness-driven promotion to performance-led demand generation. Buyers compare multiple projects before booking a visit. Channel partners compete for attention. Paid media costs fluctuate rapidly. Developers must balance branding, lead quality, and project velocity at the same time.<br/>Today, growth depends on structured funnels, conversion-focused landing pages, strong creative assets, and real-time tracking of site visit performance."
    //   caseLabel="Outcome"
    leftPanelWidth="50%"
    />
  );
};