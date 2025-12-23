import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories = () => {
  const heading = "Client Stories"
  const description = "" 

  const cases = [
    {
      title: "Startup Launch",
      description:
        "A fintech startup wanted rapid adoption. We delivered a custom back-end with secure APIs and real-time transaction processing. Result: 60% faster user onboarding."
    },
    {
      title: "Enterprise Optimization",
      description:
        "A healthcare platform needed a modern back-end. Our team optimized their database and API structure, reducing load times by 45% and increasing patient portal engagement."
    },
    {
      title: "E-Commerce Growth",
      description:
        "An online retailer struggled with high cart abandonment. We built a cloud-native back-end with seamless payment integrations, doubling conversion rates within six months."
    },
  ]

  return (
    <CommonBigIndex 
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
    />
  )
}