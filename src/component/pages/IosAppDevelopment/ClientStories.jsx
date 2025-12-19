import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Client Stories"
  const description =
    ""

  const cases = [
    {
      title: "Enterprise Finance App",
      description:
        "We developed a scalable banking app using SwiftUI, implementing secure authentication and Apple Pay integration. The solution drove a 45% increase in active users within three months, improving engagement and transaction efficiency."
    },
    {
      title: "Health & Fitness Platform",
      description:
        "Our team built a fitness app with HealthKit integration and Core ML–powered personalized recommendations. The platform achieved a 60% boost in daily user engagement, helping users stay motivated and connected."
    },
    {
      title: "Retail AR Shopping App",
      description:
        "We created an interactive AR shopping experience with in-app purchases and immersive features. This led to a 30% increase in conversion rates and strengthened brand loyalty among users."
    },
  ]
  const footer = "CRO Reduces Costs Per Lead And Maximizes Ad Effectiveness."
    return <CommonBigIndex
        caseLabel="Case Study" 
        data={cases}
        description={description}
        heading={heading}
        // footer={footer}
    />
}