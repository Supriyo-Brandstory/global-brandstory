import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Client Stories"
  const description =
    "We don't just plan campaigns, we drive outcomes. Our content promotion case studies show measurable growth:"

  const cases = [
    {
      title: "Manufacturing ERP Transformation",
      description:
        "A leading manufacturing company faced inefficiencies due to manual workflows. We implemented a custom ERP system that automated production and reporting processes, resulting in 40% faster operations and a 70% reduction in errors."
    },
    {
      title: "Fintech CRM Overhaul",
      description:
        "A financial services firm struggled with an off-the-shelf CRM that could not meet compliance requirements. Our team delivered a tailored CRM with integrated analytics and a secure architecture, enabling three times faster customer onboarding while ensuring full regulatory compliance."
    },
    {
      title: "E-Commerce Platform Modernization",
      description:
        "An online retailer was losing sales and struggling with user experience on an outdated platform. We developed a SaaS-based e-commerce system with integrated analytics, leading to a 50% increase in conversion rates and a seamless mobile experience for customers."
    },
  ]
  const footer = "These examples show how custom software transforms business outcomes."
    return <CommonBigIndex 
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}