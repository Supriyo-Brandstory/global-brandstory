import { CommonOptionSelector } from "../common/CommonOptionSelector"

export const FocusedApproach = () => {
  const title = "Focused Approaches to Optimize<br/>Ecommerce Performance"
  const desc = "Every Online Store Requires A Tailored Strategy. Our Approach Ensures Measurable Outcomes:"

  const options = [
    {
      heading: "Conversion Rate Optimization",
      description:
        "We meticulously optimize every aspect of your online store, from product pages and category listings to checkout flows. By analyzing user behavior and refining workflows, we ensure visitors can navigate your site effortlessly, resulting in higher conversion rates and more completed purchases."
    },
    {
      heading: "Upselling & Cross-Selling",
      description:
        "Our strategies include personalized product recommendations and carefully planned upsell and cross-sell opportunities. This not only increases your average order value but also enhances the shopping experience by helping customers discover relevant products that meet their needs."
    },
    {
      heading: "Scalable Architecture",
      description:
        "We design e-commerce platforms that are built to grow with your business. Whether it’s handling seasonal traffic surges, scaling for a larger audience, or adding new features, our architectures ensure consistent performance, reliability, and flexibility for long-term growth."
    },
    {
      heading: "Operational Efficiency",
      description:
        "By integrating your e-commerce system with ERP, CRM, and inventory management platforms, we eliminate redundant tasks and reduce manual work. Streamlined operations allow your team to focus on strategic priorities, while your store runs smoothly and efficiently behind the scenes."
    },
    {
      heading: "Customer Retention",
      description:
        "We implement automated emails, loyalty programs, and user-friendly experiences that keep customers engaged and coming back. By focusing on satisfaction, personalization, and ease of use, we help boost repeat purchases and maximize customer lifetime value."
    }
  ]

  return (
    <CommonOptionSelector title={title} description={desc} options={options} />
  )
}