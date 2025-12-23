import { CommonOptionSelector } from "../common/CommonOptionSelector"

export const HowWeOptimize = () => {
  const title = "How We Optimize Back-End Development With Targeted Strategies"
  const desc = "" // The description is not present in the reference image for this section

  const options = [
    {
      heading: "Blazing-Fast Performance",
      description:
        "We Design Highly Optimized Back-End Architectures That Minimize Latency And Maximize Responsiveness. Fast, Reliable Systems Keep Users Engaged, Reduce Bounce Rates, And Support Seamless Real-Time Interactions."
    },
    {
      heading: "Enhanced Security & Compliance",
      description:
        "Your data is protected with enterprise-grade encryption, secure authentication, and regular audits. Compliance with standards such as GDPR and HIPAA ensures user trust and safeguards your brand’s reputation."
    },
    {
      heading: "Unmatched Scalability",
      description:
        "Our solutions are built to grow with your business. Whether you’re serving hundreds or hundreds of thousands of users, your back-end can handle traffic spikes and increased workloads without sacrificing performance."
    },
    {
      heading: "Reduced Long-Term Costs",
      description:
        "By using clean, modular, and maintainable code, we simplify future updates and integrations. This reduces the total cost of ownership while enabling your platform to evolve efficiently as your business expands."
    }
  ]

  return (
    <CommonOptionSelector title={title} description={desc} options={options} />
  )
}