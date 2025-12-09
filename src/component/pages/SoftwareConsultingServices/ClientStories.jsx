import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Client Stories"
  const description =
    "We don’t just plan campaigns, we drive outcomes. Our content promotion case studies show measurable growth:"

  const cases = [
    {
      title: "Retail Enterprise Modernization",
      description:
        "A leading retail chain struggled with disconnected legacy systems that slowed down operations. BrandStory conducted a technology audit and developed an automation roadmap. Within a year, they achieved a 35% increase in operational efficiency and reduced order processing times by 40%."
    },
    {
      title: "SaaS Startup Scaling For Growth",
      description:
        "A fast-growing SaaS company faced scaling challenges as demand surged. We designed a strategic IT roadmap, selected cloud-native platforms, and optimized their development cycle. The result? A 50% faster time-to-market and seamless scalability."
    },
    {
      title: "Manufacturing Process Optimization",
      description:
        "A mid-sized manufacturer battled rising costs due to outdated manual processes. Our process automation blueprint eliminated redundant tasks and reduced expenses by 25%. Employee satisfaction also rose as workflows became easier and faster."
    },
  ]
  const footer = "These stories are proof that the right consulting can deliver measurable impact."
    return <CommonBigIndex 
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}