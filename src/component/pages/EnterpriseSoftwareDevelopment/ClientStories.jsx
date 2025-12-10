import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Client Stories"
  const description =
    "We measure success through the growth of our clients." 

  const cases = [
    {
      title: "Healthcare Enterprise",
      description:
        "We helped a large healthcare provider modernize its outdated legacy systems. By streamlining workflows and digitizing manual processes, we reduced administrative bottlenecks by 40%, enabling staff to focus more on patient care."
    },
    {
      title: "Logistics Leader",
      description:
        "A leading logistics company partnered with us to overcome inefficiencies in delivery tracking and supply chain visibility. We built a custom supply chain platform that enhanced real-time monitoring and optimized routes, improving delivery efficiency by 30%."
    },
    {
      title: "Finance Firm",
      description:
        "For a financial services company struggling with manual compliance checks, we implemented automated compliance workflows. This not only ensured regulatory accuracy but also cut operational costs by 25%, freeing up resources for strategic initiatives." 
    },
  ]
  const footer = "Every case study reflects our commitment to ROI, scalability, and digital transformation." 
    return <CommonBigIndex 
    caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
        footer={footer} 
    />
}