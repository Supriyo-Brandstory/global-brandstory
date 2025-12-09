import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Client Stories"
  const description =
    "We don’t just plan campaigns, we drive outcomes. Our content promotion case studies show measurable growth:"

  const cases = [
    {
      title: "E-Commerce Platform",
      description:
        "A leading online retailer faced frequent downtime during peak sales periods, which threatened revenue and customer trust. We implemented a combination of preventive and corrective maintenance with 24/7 monitoring. As a result, downtime was reduced by 95%, ensuring consistent sales continuity and a reliable shopping experience."
    },
    {
      title: "Legacy Enterprise Software",
      description:
        "An enterprise running outdated software struggled with compliance and performance issues. Our team applied adaptive maintenance, refactored critical components, and implemented strategic upgrades. The system remained fully functional, secure, and compliant for five additional years, extending its value and reducing the need for costly replacement."
    },
    {
      title: "SaaS Company",
      description:
        "A software-as-a-service provider experienced slow response times and poor user experience. Through perfective maintenance and performance optimization, we improved system efficiency, achieving 40% faster load times and significantly enhancing user retention."
    },
  ]
  // The original image/content does not include a footer text in this format, so we'll omit it as in the original provided code.
  // const footer = "CRO Reduces Costs Per Lead And Maximizes Ad Effectiveness."
    return <CommonBigIndex 
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
        // footer={footer}
    />
}