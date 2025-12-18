import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories = () => {
  const heading = "Client Stories"
  const description = "" 

  const cases = [
    {
      title: "High-Volume B2B Migration",
      description:
        "A leading industrial supplier faced performance issues and outdated workflows on their legacy platform. We migrated their store to Magento 2 with zero downtime, implementing automated quote management and streamlined processes. The result: 40% faster load times, improved operational efficiency, and a smoother purchasing experience for wholesale clients."
    },
    {
      title: "Complex Catalog Optimization",
      description:
        "A fashion retailer managing over 50,000 SKUs struggled with product discoverability and checkout abandonment. Our team redesigned the catalog structure, optimized navigation, and fine-tuned the checkout flow. The outcome: a 30% uplift in conversions and a significantly more intuitive shopping experience for customers."
    },
    {
      title: "Scalable Enterprise Platform",
      description:
        "A multinational brand operated multiple fragmented stores, making management cumbersome and inefficient. We consolidated all their stores into a single Magento ecosystem with centralized inventory, analytics, and reporting. This transformation enhanced operational efficiency, reduced maintenance costs, and maximized ROI across markets."
    },
  ]

  return (
    <CommonBigIndex 
        caseLabel="Case Study"
        data={cases}
        description={description}
        heading={heading}
    />
  )
}