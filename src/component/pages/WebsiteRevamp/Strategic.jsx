import { CommonOptionSelector } from "../common/CommonOptionSelector"

export const Strategic = () => {
  const title = "Strategies We Use to Modernize and<br/>Optimize Your Website"
  const desc = "Our website redesign strategy goes beyond aesthetics:"

  const options = [
    {
      heading: "Audit & Benchmarking",
      description:
        "We start by taking a deep dive into your current website, analyzing every aspect from design and content to performance and user experience. This comprehensive audit helps us identify your strengths, uncover weaknesses, and pinpoint opportunities for improvement, so every recommendation is rooted in clear insights, not assumptions."
    },
    {
      heading: "UX Optimization",
      description:
        "A seamless user experience keeps visitors engaged and encourages them to take action. We refine navigation, simplify interactions, and remove friction points to ensure users move effortlessly through your website. The result is higher engagement, longer sessions, and more conversions."
    },
    {
      heading: "Visual & Content Overhaul",
      description:
        "Your website should reflect your brand’s identity and goals. We refresh visuals, revamp messaging, and ensure every element aligns with your brand story. From graphics to copy, every detail is crafted to resonate with your audience and communicate your value clearly."
    },
    {
      heading: "SEO Migration & Technical Optimization",
      description:
        "Migrating a website or updating its technical framework doesn’t have to risk your search rankings. We carefully plan and execute SEO-friendly migrations, optimize site speed, clean up code, and structure pages to maximize performance, all while protecting your visibility on search engines."
    },
    {
      heading: "Conversion Optimization",
      description:
        "Turning visitors into customers requires more than good design, it requires data-driven testing. We implement A/B tests, refine calls-to-action, and track analytics to identify what drives engagement and conversions. Continuous testing ensures your website evolves to meet user expectations and business goals."
    },
    {
      heading: "Continuous Improvement",
      description:
        "The launch is just the beginning. We monitor performance, analyze user behavior, and implement iterative enhancements to keep your website effective and competitive. With ongoing improvements, your website continues to grow, adapt, and deliver measurable results."
    }
  ]

  return (
    <CommonOptionSelector title={title} description={desc} options={options} />
  )
}