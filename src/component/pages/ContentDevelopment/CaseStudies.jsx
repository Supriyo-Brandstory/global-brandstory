import { CommonBigIndex } from "../common/CommonBigIndex"

export const CaseStudies =()=>{
  const heading = "Case Studies & Client Success"
  const description = "Here’s a glimpse of what our content development experts have achieved:"

  const cases = [
    {
      title: "Tech Startup – Doubling Blog Traffic In 3 Months",
      description:
        "A Growing SaaS Company Needed To Build Awareness Fast. By Combining SEO-Driven Blog Content With A Consistent Publishing Plan, We Doubled Their Organic Traffic In Just Three Months, Helping Them Attract The Right Audience And Position Themselves As Industry Thought Leaders."
    },
    {
      title: "Healthcare Client – Building Trust Through Educational Video Content",
      description:
        "A Healthcare Provider Wanted To Connect With Patients In A More Meaningful Way. We Produced A Series Of Clear, Easy-To-Understand Explainer Videos That Broke Down Complex Medical Topics. The Result: Stronger Patient Engagement, Increased Website Visits, And Improved Credibility As A Trusted Voice In Healthcare."
    },
    {
      title: "B2B Company – 40% More Leads With Targeted Campaigns",
      description:
        "A Consulting Firm Was Struggling To Generate Quality Leads. We Developed A Multi-Channel Content Campaign With Tailored Landing Pages, Case Studies, And Thought Leadership Articles. Within Six Months, Their Lead Generation Improved By 40%, Directly Boosting Their Sales Pipeline."
    },
  ]
  const footer = "These Examples Highlight Measurable Results, Showing How Strategic Content Drives Real Business Outcomes."
    return <CommonBigIndex 
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}