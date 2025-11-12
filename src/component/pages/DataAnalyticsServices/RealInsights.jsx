import { CommonOptionSelector } from "../common/CommonOptionSelector"

export const RealInsights = () => {
  const title = "Real Insights You Can Use Today"
  const desc = "Want to know what’s working in the world of analytics? Dive into our collection of blogs, reports, and real-world stories."

  const options = [
    {
      heading: "Explore trends that actually impact your industry",
      description:
        "From evolving tools to smarter data practices, we break down what’s shaping the future of analytics."
    },
    {
      heading: "Learn from real case studies and benchmarks",
      description:
        "See how other businesses solved tough challenges with smart, practical use of data."
    },
    {
      heading: "Pick up tips you can use right now",
      description:
        "Our content is built to help you get results, faster, smarter, and with less guesswork."
    }
  ]

  return (
    <CommonOptionSelector title={title} description={desc} options={options} />
  )
}
