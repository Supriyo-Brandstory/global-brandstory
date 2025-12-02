import { CommonBigIndex } from "../common/CommonBigIndex"

export const BsPinterest =()=>{
  const heading = "BrandStory’s Pinterest Success"
  const description =
    "Our Pinterest ad agency has delivered measurable results:"
  const cases = [
    {
      title: "Home décor brands",
      description:
        "By using well-optimized promoted pins, these brands saw a 300% increase in website traffic. The pins highlighted products clearly and reached the right audience at the right time."
    },
    {
      title: "Fashion brands",
      description:
        "Engaging carousel ads that showcased multiple products in one swipe helped these brands achieve twice the usual click-through rate. Users could explore more items easily, which led to higher engagement and sales."
    },
    {
      title: "Wellness companies",
      description:
        "Attention-grabbing video pins helped wellness brands connect with health-conscious audiences, generating a 250% boost in sales. The videos showcased products in a way that felt authentic and inspiring."
    },
  ]
  const footer = "We have worked with many industries and delivered results that matter."
    return <CommonBigIndex 
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}