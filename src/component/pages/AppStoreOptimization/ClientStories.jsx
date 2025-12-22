import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories = () => {
  const heading = "Client Stories"
  const description = ""

  const cases = [
    {
      title: "Startup Launch",
      description:
        "A fintech startup partnered with us to improve their app store visibility and attract their target audience. Through a targeted ASO strategy—including advanced keyword research, metadata optimization, and visual asset enhancements—the app achieved 100,000 downloads within three months, quickly establishing a strong market presence."
    },
    {
      title: "Enterprise Optimization",
      description:
        "For a healthcare enterprise, we optimized their app listing across metadata, visuals, and user reviews. By implementing a holistic ASO workflow, we reduced cost-per-install (CPI) by 40% and significantly boosted organic installs. The improvements not only increased downloads but also strengthened trust and credibility among users."
    },
    {
      title: "Retail Growth",
      description:
        "An e-commerce client approached us to enhance their mobile performance and conversions. We optimized their visual assets—icons, screenshots, and preview videos—and applied a full ASO workflow across keywords, metadata, and ratings management. The result was a doubling of mobile conversions, demonstrating the power of a comprehensive, data-driven ASO approach."
    },
  ]

  return <CommonBigIndex
        caseLabel="Case Study" 
        data={cases}
        description={description}
        heading={heading}
    />
}