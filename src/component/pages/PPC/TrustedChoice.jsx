import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const TrustedChoice = ()=>{
    const data = {
  heading: "Trusted Choice for Smarter PPC Campaigns",
  subHeading: "Brands Choose BrandStory Because We Deliver PPC Campaigns That Drive Real Results. Our Full-Funnel Approach Covers Every Step, From Initial Targeting To Final Conversion, So Your Ads Work Smarter, Not Just Harder.",
  rows: [
    {
      img: "/images/ppc/ppc-ads.jpg",
      alt: "PPC Campaign",
      text: [
        "Full-Funnel PPC Advertising Services: We Design Campaigns That Convert Awareness Into Action By Reaching Out To Clients At Each Step Of The Purchasing Process.",
        "Conversion-Focused Ad Copy And Creative: Every Headline, Image, And Call-To-Action Aims To Draw In Viewers And Encourage Clicks That Result In Conversions.",
        "Daily Budget Optimizations And Bid Adjustments: In Order To Maximize Results And Cut Down On Waste, We Track Your Campaigns And Modify Bids And Expenditures."
      ],
      reverse: false
    },
    {
      img: "/images/ppc/ppc-report.jpg",
      alt: "PPC Report",
      text: [
        "Real-Time Campaign Performance Monitoring: To Make Sure That A Campaign Is Always Operating At Its Best, We Monitor Its Performance In Real Time.",
        "Transparent Reports With Key Metrics: Clear Insights Into CPL, ROAS, CTR, And Other Crucial Data Allow You To Assess How Well Your Campaigns Are Performing.",
        "Proven Experience Across Industries: Through Clever PPC Management, We Have Helped Businesses In A Variety Of Industries, Including Healthcare, SaaS, B2B, And E-Commerce, Achieve Measurable Growth.",
        "Our PPC Experts Combine Experience, Precision, And Measurable Outcomes."
      ],
      reverse: true
    }
  ]
};

    return(
        <CommonTwoImgDesc data={data}/>
    )
}