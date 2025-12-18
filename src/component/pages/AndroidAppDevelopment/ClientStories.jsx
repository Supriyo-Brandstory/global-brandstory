import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Portfolio & Case Studies"
  const description =
    "Here’s how we turn a guest post into a real SEO asset, step by step."

  const cases = [
    {
      title: "Startup Success",
      description:
        "A fintech startup partnered with us to launch a secure, scalable Android app within six months. The app streamlined onboarding, resulting in a 40% faster process and strong user adoption."
    },
    {
      title: "Enterprise Transformation",
      description:
        "For a logistics enterprise, we developed a custom internal app that automated workflows, reducing manual tracking by 60% and improving real-time data accuracy across operations."
    },
    {
      title: "Market Expansion",
      description:
        "An e-commerce client integrated a personalized Android app with in-app purchases and push notifications, achieving a 25% revenue increase and enhanced customer engagement."
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