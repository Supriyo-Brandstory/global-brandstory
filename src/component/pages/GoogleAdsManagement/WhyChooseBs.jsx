import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const WhyChooseBs = () => {
  const title = "Performance Dashboards and KPIs";
  const desc = "";

  const options = [
    {
      heading: "Analytics Dashboard Access",
      description:
        "Every engagement includes access to custom-built GA4 and Looker Studio dashboards. These real-time tools track KPIs like conversions, ROAS, CTR, and budget pacing, giving you instant visibility into campaign performance and spend efficiency."
    },
    {
      heading: "Comprehensive Weekly Insights",
      description:
        "Performance is segmented by platform, device, location, and audience group. Reports map the journey from click to conversion, showing which channels and segments deliver ROI and where optimizations can improve results."
    },
    {
      heading: "Insight-Led Decisions",
      description:
        "Weekly reports include actionable recommendations such as ad copy tests, bid strategy adjustments, and audience refinements. Each suggestion is backed by real campaign data to directly boost performance."
    },
    {
      heading: "Custom Attribution Models",
      description:
        "Attribution models are tailored to your sales cycle and user behavior. Whether using first-click, data-driven, or multi-touch attribution, reporting credits the right touchpoints so you can invest confidently in revenue-driving channels."
    }
  ];

  return (
    <CommonOptionSelector2
      title={title}
      description={desc}
      options={options}
    />
  );
};
