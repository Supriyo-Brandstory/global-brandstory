import { CommonBigIndex } from "../common/CommonBigIndex"

export const SuccessStories =()=>{
  const heading = "Client Success Stories: Scaling Performance Worldwide"
  
  const cases = [
    {
      title: "UrbanSkin <br/> (D2C Skincare Brand)",
      description:
        "<b>Objective</b> <br/> Improve ROAS across Meta and Google Ads <br/><br/> <b>Approach</b> <br/> Implemented a structured creative refresh aligned with audience behavior and product seasonality. Mapped the conversion funnel to optimize ad placements and reduce drop-offs. <br/><br/> <b>Outcome</b> <br/> Achieved a 14.2% increase in ROAS within 90 days through continuous testing, audience refinement, and platform-specific optimizations."
    },
    {
      title: "Enterprise SaaS CRM Platform",
      description:
        "<b>Objective</b> <br/> Lower CAC and drive higher-quality MQLs <br/><br/> <b>Approach</b> <br/> Deployed a dual-channel strategy using LinkedIn for B2B targeting and Google Search for intent-driven leads. Messaging and targeting were calibrated to align with enterprise buyer personas. <br/><br/> <b>Outcome</b> <br/> Reduced CAC by 37% while increasing lead quality by 81%, leading to more qualified pipeline opportunities."
    },
    {
      title: "Real Estate Group (NRI-Focused Campaign)",
      description:
        "<b>Objective</b> <br/> Drive verified leads from the NRI segment <br/><br/> <b>Approach</b> <br/> Launched geo-targeted campaigns across YouTube and Google Display Network, complemented by a conversion-optimized landing page tailored for international audiences. <br/><br/> <b>Outcome</b> <br/> Delivered a 210% uplift in form fills and a 34% improvement in visit-to-lead conversion rate through better targeting and on-page experience."
    },
  ]
  const footer = "CRO Reduces Costs Per Lead And Maximizes Ad Effectiveness."
    return <CommonBigIndex 
        data={cases}
        // description={description}
        heading={heading}
        // footer={footer}
    />
}