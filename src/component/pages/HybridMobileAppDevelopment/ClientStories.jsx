import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Client Stories"
  const description = ""

  const cases = [
    {
      title: "Startup Launch",
      description:
        "A fintech startup partnered with us to develop a hybrid mobile app that launched quickly across iOS and Android. By leveraging Flutter and React Native, we delivered a visually engaging, high-performance app that reached 100,000 downloads within three months, helping the startup rapidly establish a strong presence in a competitive market."
    },
    {
      title: "Enterprise Modernization",
      description:
        "We modernized a legacy healthcare app for an enterprise client, integrating new cross-platform architecture, updated UX/UI, and streamlined backend systems. This transformation reduced maintenance costs by 40%, improved app reliability, and enhanced the user experience for both patients and healthcare providers."
    },
    {
      title: "Retail Growth",
      description:
        "For an e-commerce client, we developed a Flutter-powered hybrid app that optimized product discovery, checkout flows, and personalized recommendations. The result was a doubling of mobile conversions, stronger customer engagement, and increased revenue, demonstrating the power of cross-platform solutions for retail businesses."
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