import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Client Stories"
  const description =
    "We don’t just plan campaigns, we drive outcomes. Our content promotion case studies show measurable growth:"

  const cases = [
    {
      title: "Startup Success",
      description:
        "A tech startup needed a website that could effectively showcase their product and attract early customers. We designed a clean, responsive site with intuitive navigation and clear calls-to-action. Within three months, their lead generation doubled, giving them the momentum needed to grow quickly in a competitive market."
    },
    {
      title: "Established Brand Refresh",
      description:
        "An established company approached us for a website redesign to better reflect their evolving brand identity. We focused on brand-aligned visuals, improved UX flows, and engaging content. The result was a 40% increase in user engagement, revitalizing their digital presence and strengthening connections with existing and potential customers."
    },
    {
      title: "E-Commerce Growth",
      description:
        "A retail client wanted to increase online sales and improve the shopping experience. We delivered a conversion-focused design with optimized product pages, responsive layouts, and clear navigation. Within the first quarter after launch, online sales grew by 25%, demonstrating tangible business impact through thoughtful design."
    },
  ]
  const footer = "Our work speaks through measurable results. Every project tells a story of transformation."
    return <CommonBigIndex 
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}