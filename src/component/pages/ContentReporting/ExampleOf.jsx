import { CommonBigIndex } from "../common/CommonBigIndex"

export const ExampleOf =()=>{
  const heading = "Examples of Reports That Drive Change"
  const description =
    "We don’t just plan campaigns, we drive outcomes. Our content promotion case studies show measurable growth:"

  const cases = [
    {
      title: "Healthcare Client – Driving Webinar Engagement",
      description:
        "<b>Challenge</b><br>Low Webinar Registrations Despite A Strong Content Lineup.<br><br><b>Solution</b><br>We Implemented A Targeted Email Campaign With Personalized Messaging For Segmented Audiences.<br><br><b>Result:</b><br>Webinar Registrations Increased By 250% Within Weeks. Clear Reporting Dashboards Allowed The Client To Track Performance And Optimize Follow-Ups In Real Time."
    },
    {
      title: "E-Commerce Client – Boosting Social Reach And Traffic",
      description:
        "<b>Challenge</b><br>Product Content Was Not Generating Enough Engagement Or Conversions.<br><br><b>Solution</b><br>A Strategic Influencer-Driven Content Campaign Was Deployed, Combining Social Posts, Product Guides, And Authentic Storytelling.<br><br><b>Result:</b><br>Social Shares Tripled And Website Traffic Doubled, Driving Meaningful Customer Engagement And Improved Conversion Rates."
    },
    {
      title: "Technology Provider – Increasing Qualified Leads",
      description:
        "<b>Challenge</b><br>High-Quality Leads Were Limited Despite Strong Content Assets.<br><br><b>Solution</b><br>Multi-Channel Promotion Including Content Syndication, Thought-Leadership Blogs, And Targeted Paid Campaigns.<br><br><b>Result:</b><br>Leads Increased By 40%, With Campaigns Precisely Tracked To Tie Every Metric To Business Goals."
    },
  ]
  const footer = "These examples illustrate how strategic promotion delivers tangible ROI, turning content into a business growth engine."
    return <CommonBigIndex
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}