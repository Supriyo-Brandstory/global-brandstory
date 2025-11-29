import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const WhyChooseBs = () => {
  const title = "Mastering Visuals Across Every Industry";
  const desc = ""; 

  const options = [
    {
      heading: "Proven Experience",
      description:
        "500+ clients across 30+ industries, from startups to enterprise brands, with campaigns in 10+ global markets."
    },
    {
      heading: "Full-Funnel Capabilities",
      description:
        "In-house experts handle everything from creative and media buying to analytics and strategy, covering awareness to retention."
    },
    {
      heading: "Strategy-First Approach",
      description:
        "We align every campaign with your business goals before spending, making sure every dollar works hard."
    },
    {
      heading: "Cross-Platform Expertise",
      description:
        "We run campaigns on Meta, Google, LinkedIn, and more, reaching your audience where they engage most."
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