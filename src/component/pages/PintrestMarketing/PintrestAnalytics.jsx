import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const PintrestAnalytics = ()=>{
    const data = {
  heading: "Pinterest Analytics & Performance Tracking",
  subHeading: "At BrandStory, We Make Sure Every Pinterest Performance Tracking Metric Is Measured, Analyzed, And Optimized For Results. Our Reporting Gives You Full Visibility Into How Your Pins And Campaigns Are Performing Across The Visual Discovery Platform.",
  rows: [
    {
      img: "/images/PintrestMarketing/image.png", 
      alt: "Person tracking Pinterest analytics on a laptop",
      text: [
        "<p>What We Track And Report:</p><br/>",
        "<ul>",
        "<li>Saves & Repins – See Which Pins resonate Most And Drive Ongoing Engagement.</li><br/>",
        "<li>Clicks & Outbound Traffic – Monitor How Pinterest drives Users to your Website Or Landing Pages.</li><br/>",
        "<li>Impressions & Reach – Understand Overall Visibility and Discoverability Trends.</li><br/>",
        "<li>Frequency & Reporting – Weekly Dashboards And Monthly Strategy Reviews To Constantly Improve ROI.</li>",
        "</ul>",
        "<br/>",
        "Proven Impact<br/><br/>",
        "<p>Clients Have Achieved Up To An 85% Lift in Referral Traffic In Just 30 Days Through Our Pinterest Marketing Services.</p>"
      ],
      reverse: true 
    }
  ]
};

    return(
        <CommonTwoImgDesc data={data}/>
    )
}