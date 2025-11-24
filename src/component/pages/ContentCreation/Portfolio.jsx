import { CommonBigIndex } from "../common/CommonBigIndex"

export const Portfolio =()=>{
  const heading = "Portfolio & Case Studies"
  const description =
    "Here’s how we turn a guest post into a real SEO asset, step by step."

  const cases = [
    {
      title: "B2B SaaS Launch",
      description:
        "A growing SaaS company was struggling with low website engagement and stagnant lead. We created targeted blogs to answer customer pain points, designed video explainers to simplify the product, and backed it up with engaging social content. The campaign led to a 180% increase in leads and users spent more time exploring the site, boosting overall engagement."
    },
    {
      title: "E-commerce Growth Campaign",
      description:
        "An online store saw a steady drop in sales despite good traffic. We focused on product storytelling, supported by well-timed email campaigns and creative social ads to re-engage customers. Conversions grew by 220% during the campaign period, and customer retention improved significantly."
    },
    {
      title: "Healthcare Brand<br/>Awareness",
      description:
        "A healthcare provider wanted to build trust and educate patients about its services. We produced easy-to-understand blogs, short explainer videos, and clear infographics to simplify medical topics for patients. The brand saw a 150% increase in website engagement and a sharp rise in patient enquiries."
    },
  ]
  const footer = "CRO Reduces Costs Per Lead And Maximizes Ad Effectiveness."
    return <CommonBigIndex 
        data={cases}
        description={description}
        heading={heading}
        // footer={footer}
    />
}