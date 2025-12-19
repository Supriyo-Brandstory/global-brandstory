import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Client Stories"
  const description =
    ""

  const cases = [
    {
      title: "Startup Launch Success",
      description:
        "A fintech startup wanted a rapid launch on iOS and Android. Using Flutter, we delivered a secure, scalable app in half the time it would take for two native apps, boosting user acquisition by 50%."
    },
    {
      title: "Enterprise Mobile Solution",
      description:
        "A retail giant needed a unified app experience for iOS and Android. With React Native, we built a modular, easy-to-maintain app that increased engagement and drove a 30% revenue uplift."
    },
    {
      title: "Digital Transformation For Health Tech",
      description:
        "A healthcare platform integrated APIs and device hardware seamlessly, enabling real-time monitoring and improving patient engagement."
    },
  ]
    return <CommonBigIndex 
        caseLabel="Case Study"
        data={cases}
        description={description}
        heading={heading}
    />
}