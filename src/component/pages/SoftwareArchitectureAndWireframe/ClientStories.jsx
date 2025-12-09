import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Client Stories"
  const description =
    "We don’t just plan campaigns, we drive outcomes. Our content promotion case studies show measurable growth:"

  const cases = [
    {
      title: "Fintech Startup Success",
      description:
        "A fintech client needed a secure, scalable platform. Our architecture blueprint and wireframes guided the development team, resulting in a successful launch and a roadmap for future growth."
    },
    {
      title: "Enterprise System Modernization",
      description:
        "An established company wanted to modernize their legacy system. We provided detailed solution architecture and interactive prototypes, enabling a smooth migration, improved performance, and better user adoption."
    },
    {
      title: "SaaS Platform Optimization",
      description:
        "A SaaS provider faced performance bottlenecks. Our strategic architecture and wireframe redesign reduced load times, increased user retention, and improved overall platform stability."
    },
  ]
    
  return <CommonBigIndex 
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
        // footer={footer} 
    />
}