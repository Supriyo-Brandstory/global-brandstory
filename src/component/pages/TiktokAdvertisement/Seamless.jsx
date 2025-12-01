import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const Seamless = () => {
  const title = "Seamless Marketing Integration for<br/>Multi-Channel Success";
  const desc = "When combined with Meta retargeting and Google Search capture, brands achieve full-funnel dominance:";

  const options = [
    {
      heading: "TikTok",
      description:
        "Generates awareness and discovery through viral, native-style videos that spark curiosity and brand recall."
    },
    {
      heading: "Meta Ads",
      description:
        "Retargets these high-intent users with more detailed product messaging, testimonials, and offers that move them closer to purchase."
    },
    {
      heading: "Google Ads",
      description:
        "Captures purchase-ready demand from those actively searching, closing the loop and turning interest into measurable sales."
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
