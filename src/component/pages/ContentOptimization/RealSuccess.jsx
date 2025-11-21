import { CommonBigIndex } from "../common/CommonBigIndex"

export const RealSuccess =()=>{
  const heading = "Real Success Stories"
  const description ="<b class='highlited-text'>Client Results:</b>"

  const cases = [
    {
      title: "Fintech Startup",
      description:
        "Within just three months of optimizing their content, this growing fintech company saw a 45% boost in organic traffic. The right mix of strategy and execution helped them reach more of the audience they were after."
    },
    {
      title: "Healthcare Provider",
      description:
        "By refreshing and aligning their website content with what patients were searching for, this provider achieved a 60% increase in qualified leads. Clearer, more informative content made all the difference."
    },
    {
      title: "E-commerce Brand",
      description:
        "Through sharper copy and better on-page structure, this brand managed to triple its click-through rates. The updates not only improved visibility but also inspired more customers to take action."
    },
  ]
  const footer = "Each story proves how Content Optimization Services can deliver tangible, measurable results."
    return <CommonBigIndex 
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}