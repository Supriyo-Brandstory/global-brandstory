import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientSuccess = () => {
  const heading = "Client Success Stories"
  const description = "" 

  const cases = [
    {
      title: "Startup Launch",
      description:
        "We partnered with a fintech startup to develop a custom-built, component-driven website that perfectly aligned with their brand and user needs. By focusing on intuitive navigation, responsive design, and high-performance interactions, the platform saw a 60% increase in user engagement within the first few months, enabling rapid adoption and market traction."
    },
    {
      title: "Enterprise Optimization",
      description:
        "For a healthcare enterprise, we modernized a legacy interface with scalable front-end architecture and optimized performance. The updated platform reduced page load times by 45% and significantly improved mobile usability, resulting in higher engagement and an increase in mobile conversions across patient and provider portals."
    },
    {
      title: "E-Commerce Growth",
      description:
        "An online retail brand partnered with us to revamp their front-end experience. By implementing seamless navigation, faster load speeds, and visually engaging design elements, we helped the brand double their conversion rates, enhancing both customer satisfaction and revenue."
    },
  ]

  return (
    <CommonBigIndex 
        caseLabel="Case Label"
        data={cases}
        description={description}
        heading={heading}
    />
  )
}