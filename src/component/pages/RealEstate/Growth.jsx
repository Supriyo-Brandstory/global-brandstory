import { CommonOptionSelector } from "../common/CommonOptionSelector"

export const Growth = () => {
  const title = "Growth Results in Real Estate"
  const desc = "We help real estate brands scale through data-driven marketing and high-intent lead generation:"

  const options = [
    {
        heading: "Premium Residential Project",
        description:
        "<b>Challenge</b><br/>High CPL And Low Site Visit Ratio.<br/><br/><b>Solution</b><br/>High-Intent Keyword Targeting And Landing Page Optimisation.<br/><br/><b>Results</b><br/>• 45% Reduction In Cost Per Lead<br/>• 2.6x Increase In Qualified Enquiries<br/>• 38% Improvement In Lead Quality"
    },
    {
      heading: "Pre-Launch Development",
      description:
        "Building momentum before the grand opening. Our strategies focus on exclusive early-bird lead generation, social proofing through 3D walkthroughs, and high-frequency retargeting to ensure maximum inventory is booked during the launch phase."
    },
    {
      heading: "Luxury Villa Project",
      description:
        "Targeting ultra-high-net-worth individuals requires a boutique approach. We leverage localized geographic targeting, premium creative storytelling, and personalized automated nurturing to drive high-value site visits for luxury estates."
    }
  ]

  return (
    <CommonOptionSelector title={title} description={desc} options={options} />
  )
}