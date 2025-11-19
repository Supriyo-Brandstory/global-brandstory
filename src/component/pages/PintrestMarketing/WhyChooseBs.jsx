import { CommonBigIndex } from "../common/CommonBigIndex"

export const WhyChooseBs =()=>{
  const heading = "Why Choose BrandStory for Pinterest Marketing"
  const description =
    "As The Best Pinterest Marketing Company, BrandStory Combines Creativity, Performance, And Global Support To Help Brands Scale. Our Approach Ensures Your Campaigns Are Visually Stunning And Strategically Optimized For Growth Across Platforms. So, Why Businesses Trust Us:"

  const cases = [
    {
      title: "Proven Experience",
      description:
        "We Have Managed 100+ Pinterest Profiles Across Industries, Delivering Custom Strategies That Generate Traffic And Engagement. Our Experience Ensures Every Campaign Is Backed By Insights And Tested Best Practices."
    },
    {
      title: "Massive Reach",
      description:
        "Through A Mix Of Organic And Paid Tactics, We Achieve 50M+ Monthly Impressions, Expanding Brand Visibility And Connecting With High Intent Audiences. Every Pin Is Optimized To Drive Long Term Growth."
    },
    {
      title: "Cross Platform Growth",
      description:
        "By Utilizing Pinterest + Meta + Google Synergy, We Amplify Your Campaigns Across Platforms. This Approach Ensures Maximum Visibility, Engagement, And Conversion For Your Brand."
    },
    {
      title: "Creative First Approach",
      description:
        "Our Team Crafts Visually Compelling Branded Pins And Scroll Stopping Content That Captures Attention And Encourages Interaction. Creativity Drives Engagement While Aligning With Your Brand Identity."
    },
    {
      title: "Performance-Backed Results",
      description:
        "Every Campaign Is Data Driven, Optimized, And Measured Against KPIs From Saves And Clicks To Website Traffic. Our Pinterest Marketing Services Deliver Tangible Outcomes For Your Business."
    },
  ]
  const footer = "" // The image does not contain a specific footer text for the section.
    return <CommonBigIndex 
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}