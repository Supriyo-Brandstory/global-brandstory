import { CommonBigIndex } from "../common/CommonBigIndex"
import { CommonBigIndexScrollable } from "../common/CommonBigIndexScrollable"

export const WhyChooseBs =()=>{
  const heading = "Why Choose BrandStory as Your<br/>Programmatic Advertising Partner?"
  const description =
    "As The Best Programmatic Ad Agency, We Bring:"

  const cases = [
    {
      title: "10+ Years Of Experience",
      description:
        "We Have Been Helping Businesses With Digital And Programmatic Advertising For Over 10 Years. Our Team Knows What Works And How To Make Ads Perform Best."
    },
    {
      title: "500+ Campaigns Done",
      description:
        "We Have Run More Than 500 Campaigns Across Many Industries. Each Campaign Is Planned Carefully To Meet The Unique Goals Of Every Client."
    },
    {
      title: "Certified Experts",
      description:
        "Our Team Is Trained And Certified In Top Programmatic Tools, Including DV360 And The Trade Desk. This Means Your Campaigns Are Run Using The Right Tools For Best Results."
    },
    {
      title: "Proven Results",
      description:
        "We Have Helped Brands In ECommerce, BFSI, SaaS, And Real Estate Get Leads, Sales, And Measurable Growth. Our Campaigns Are Designed To Bring Real Business Outcomes."
    },
    {
      title: "Ads Everywhere",
      description:
        "We Run Ads On Desktop, Mobile, Apps, Connected TV, Streaming Platforms, And Digital Billboards. Every Ad Is Designed To Reach The Right People At The Right Time."
    },
    {
      title: "Smart Strategy",
      description:
        "We Combine Human Planning With Data Insights. We Watch Performance, Test What Works, And Make Changes So Campaigns Keep Improving Over Time."
    },
  ]
  const footer = "With BrandStory, Your Campaigns Are Simple To Manage, Effective, And Focused On Results. You Can Trust Us To Handle Everything While Your Business Grows."
    return <CommonBigIndexScrollable
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
        boxHeight='300px'
    />
}