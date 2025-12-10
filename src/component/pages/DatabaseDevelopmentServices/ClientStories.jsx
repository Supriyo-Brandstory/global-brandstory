import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Client Stories"
  const description =
    "We don’t just plan campaigns, we drive outcomes. Our content promotion case studies show measurable growth:"

  const cases = [
    {
      title: "Startup Success Story",
      description:
        "A tech startup needed a database capable of handling rapid growth. We built a scalable NoSQL solution that reduced downtime by 80% and enabled faster, data-driven decision-making, supporting the startup’s accelerated expansion."
    },
    {
      title: "Enterprise Transformation",
      description:
        "An enterprise client was struggling with performance issues in their legacy SQL system. We redesigned the database architecture, implemented query optimization, and migrated to a hybrid SQL/NoSQL system. The result was faster reporting, improved data integrity, and a system ready to support complex operations."
    },
    {
      title: "E-Commerce Upgrade",
      description:
        "A growing e-commerce brand required a high-performance inventory database. Our team implemented data modeling, SQL development, and performance tuning, resulting in 50% faster transaction processing and enhanced customer satisfaction."
    },
  ]
  const footer = "CRO Reduces Costs Per Lead And Maximizes Ad Effectiveness."
    return <CommonBigIndex 
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
        // footer={footer}
    />
}