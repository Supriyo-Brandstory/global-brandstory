import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories = () => {
  const heading = "Client Stories"
  const description = ""

  const cases = [
    {
      title: "SaaS Explainer Video",
      description:
        "<b>Challenge</b><br/>The software had complex features that users struggled to understand, resulting in low engagement.<br/><br/><b>Solution</b><br/>We created a 90-second animated explainer video using dynamic motion graphics to visually simplify key features and showcase benefits.<br/><br/><b>Result</b><br/>Sign-ups increased by 25% within three months, and users reported a clearer understanding of the product's value."
    },
    {
      title: "Healthcare Tutorial",
      description:
        "<b>Challenge</b><br/>Patients frequently contacted support due to confusion with treatment instructions.<br/><br/><b>Solution</b><br/>We produced a whiteboard animation breaking down the steps visually, making it easy to follow and remember.<br/><br/><b>Result</b><br/>Support queries dropped by 40%, while patient compliance and satisfaction improved significantly."
    },
    {
      title: "E-Commerce Product Launch",
      description:
        "<b>Challenge</b><br/>Online shoppers struggled to grasp product features and benefits quickly.<br/><br/><b>Solution</b><br/>A 3D animated video was developed, optimized for both web and social media, highlighting features in a visually compelling way.<br/><br/><b>Result</b><br/>Product page conversions increased by 30%, and engagement across social platforms rose noticeably."
    },
  ]

  return <CommonBigIndex 
        caseLabel="Case Study"
        data={cases}
        description={description}
        heading={heading}
    />
}