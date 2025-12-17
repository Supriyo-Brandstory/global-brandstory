import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Client Stories"
  const description =
    ""

  const cases = [
    {
      title: "Fashion Retail Startup",
      description:
        "A startup fashion brand approached us for a professional launch. We built a custom Shopify theme with optimized checkout and strong storytelling. Result: 3x higher conversions within the first 90 days."
    },
    {
      title: "Electronics Retailer Migration",
      description:
        "A high-volume retailer migrated to Shopify Plus with our help. Using headless architecture, we streamlined their checkout and boosted site speed. Result: 25% increase in average order value."
    },
    {
      title: "D2C Lifestyle Brand",
      description:
        "An established brand was stuck with a generic theme. We redesigned their store with a bespoke Shopify theme and custom app integrations. Result: 40% sales growth in the first quarter."
    },
  ]
  const footer = "CRO Reduces Costs Per Lead And Maximizes Ad Effectiveness."
    return <CommonBigIndex 
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
    />
}