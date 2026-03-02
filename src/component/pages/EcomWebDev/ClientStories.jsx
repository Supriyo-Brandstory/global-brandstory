import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Client Stories"
  const description =
    "We don’t just plan campaigns, we drive outcomes. Our content promotion case studies show measurable growth:"

  const cases = [
    {
      title: "Startup Launch Success",
      description:
        "A small fashion brand launched their first online store with a mobile-first UI/UX design and a streamlined checkout process. Within three months, their sales increased by 200%, establishing a strong foundation for growth."
    },
    {
      title: "Enterprise Optimization",
      description:
        "An established electronics company faced high cart abandonment. By implementing conversion-focused design and advanced product management systems, we reduced abandonment by 35%, boosting overall revenue."
    },
    {
      title: "Headless Commerce<br/>Advantage",
      description:
        "A large retailer transitioned to a headless commerce architecture. The result was faster page load times and the ability to handle high seasonal traffic without downtime, ensuring a seamless shopping experience for customers."
    },
  ]
  const footer = "Our work speaks through measurable results. Every project tells a story of transformation."
    return <CommonBigIndex 
    caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
        // footer={footer}
    />
}