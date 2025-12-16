import { CommonBigIndex } from "../common/CommonBigIndex"

export const Client =()=>{
  const heading = "Client Stories"
  const description =
    "We don't just plan, we drive outcomes. Our WordPress development case studies show measurable growth:"

  const cases = [
    {
      title: "Startup Success",
      description:
        "A tech startup approached us for a custom WordPress site to replace a templated website. We built a headless solution with a bespoke theme, boosting load speed by 70% and increasing conversions by 40% within the first three months."
    },
    {
      title: "Enterprise Modernization",
      description:
        "An established enterprise needed a website revamp to support new product lines and automation. Our team delivered a scalable architecture with a custom UX/UI design, integrating WooCommerce for internal sales management and reducing downtime to near zero."
    },
    {
      title: "E-Commerce Transformation:",
      description:
        "We helped an online retailer migrate from a standard WooCommerce template to a custom-built store, integrating unique payment gateways and inventory automation. Result: higher transaction completion rates and faster page loads, leading to a 30% revenue growth within six months."
    },
  ]

    return <CommonBigIndex 
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
       
    />
}