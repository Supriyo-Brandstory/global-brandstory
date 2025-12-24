import { CommonBigIndex } from "../common/CommonBigIndex"

export const Client = () => {
  const heading = "Client Stories & Success"
  const description = "Our work speaks for itself:"

  const cases = [
    {
      title: "Startup Launch Video",
      description:
        "We developed a compelling launch video that clearly communicated the startup’s unique value proposition. By combining engaging storytelling with crisp visuals, the campaign increased lead generation by 60% within just two months, helping the brand gain early traction and customer interest."
    },
    {
      title: "Corporate Brand Video",
      description:
        "For a large enterprise, we created a polished, narrative-driven video that highlighted the company's values and offerings. The strategic messaging and professional production strengthened brand recall among decision-makers by 75%, reinforcing the company's authority in its industry."
    },
    {
      title: "Social Media Campaign",
      description:
        "We produced short-form, platform-optimized videos for Instagram and LinkedIn, carefully crafted to capture attention in the first few seconds. Through strategic pacing, motion graphics, and engaging visuals, the campaign boosted audience engagement by 120%, driving meaningful interactions and brand awareness."
    },
  ]

  const footer = "We deliver measurable results that showcase the ROI of professional video post-production."

  return (
    <CommonBigIndex    
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
  )
}