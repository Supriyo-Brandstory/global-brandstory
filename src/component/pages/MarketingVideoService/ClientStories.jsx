import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories = () => {
  const heading = "Client Stories & Success Cases"
  const description = "Our work has helped brands achieve tangible results:"

  const cases = [
    {
      title: "Startup Launch Video",
      description:
        "Aimed at conveying a new brand's value proposition, this video increased lead generation by 60% within two months."
    },
    {
      title: "Corporate Brand Video",
      description:
        "Designed for enterprise audiences, it strengthened brand recall among decision-makers by 75%, enhancing credibility and awareness."
    },
    {
      title: "Social Media Campaign",
      description:
        "Optimized for Instagram and LinkedIn, the campaign boosted engagement by 120%, driving higher interaction and brand visibility."
    },
  ]

  const footer = "Each project demonstrates our commitment to measurable impact, creative excellence, and client satisfaction."

  return (
    <CommonBigIndex 
        caseLabel="Case Study"
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
  )
}