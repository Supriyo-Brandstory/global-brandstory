import { CommonBigIndex } from "../common/CommonBigIndex"

export const SuccessStories =()=>{
  const heading = "Success Stories"
  const description =
    ""

  const cases = [
    {
      title: "D2C Fashion Label",
      description:
        "Achieved a 3.2x ROAS in just 30 days by combining TikTok Spark Ads with influencer-driven UGC.<br/><br/>The campaign leveraged trending sounds, styled product showcases, and creator-led storytelling to blend seamlessly into the For You feed. This approach not only increased click-through rates but also built long-term brand affinity."
    },
    {
      title: "Mobile App Launch",
      description:
        "Generated 1M+ installs in just 6 weeks using highly engaging In-Feed Ads paired with gamified calls-to-action.<br/><br/>The ads featured short, interactive demonstrations of app features, making users feel they were already part of the experience before downloading."
    },
    {
      title: "Beauty Brand",
      description:
        "Reduced cost per acquisition by 48% compared to Meta Ads through targeted video tutorials and authentic customer testimonials.<br/><br/>By focusing on relatable problem-solution content, the brand captured high-intent audiences and accelerated repeat purchases."
    },
  ]
  const footer = ""
    return <CommonBigIndex
        data={cases}
        description={description}
        heading={heading}
        // footer={footer}
    />
}