import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Client Stories"
  const description =
    "We don’t just plan campaigns, we drive outcomes. Our content promotion case studies show measurable growth:"

  const cases = [
    {
      title: "SaaS Company Boosts Leads By 150%",
      description:
        "We developed persona-driven landing pages tailored to specific audience segments. By reducing friction points, optimizing messaging, and streamlining user journeys, we cut bounce rates by 50% and tripled the number of qualified leads entering their sales funnel."
    },
    {
      title: "E-Commerce Brand Reduces CPA By 40%",
      description:
        "Through strategic A/B testing, persuasive copywriting, and CRO best practices, we optimized their product-focused landing pages. The result: higher conversions, lower customer acquisition costs, and improved ROI on ad spend."
    },
    {
      title: "Agency White-Label Partnership",
      description:
        "In a fast-paced collaboration, we delivered more than 20 high-performing landing pages within three months. This enabled the agency to expand its service portfolio, delight its clients, and achieve measurable campaign success without straining internal resources."
    },
  ]
  
  
    return <CommonBigIndex 
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
    />
}