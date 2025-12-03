import { CommonBigIndex } from "../common/CommonBigIndex"

export const Discover =()=>{
  const heading = "Discover the Subreddits That Boost ROI"
  const description =
    "Success On Reddit Begins With Finding The Right Communities. At BrandStory, We Make Sure Your Brand Reaches The People Who Truly Matter."

  const cases = [
    {
      title: "Audience Overlap Tools",
      description:
        "We Look At Websites And Social Media To Find Out Where People Who Might Like Your Business Go. We Watch Where They Spend Their Time And What They Do There. This Helps Us Know The Best Places To Show Them Your Business."
    },
    {
      title: "Competitor Benchmarking",
      description:
        "We See What Other Companies Are Doing To Sell Their Products. We Look For Things They Forget Or Don’t Do Well. Then We Can Use New Ideas To Make Your Business Better And Reach More People."
    },
    {
      title: "In-Subreddit Sentiment Mapping",
      description:
        "We Check Certain Parts Of The Internet Called Subreddits. We Watch How People Feel, What They Talk About, And How They React. This Helps Us Understand What People Like And Don’t Like."
    },
  ]
  const footer = "By Targeting The Right Niche, We Reduce Wasted Spending And Help Your Campaigns Perform Better, Giving Strong Results And Measurable ROI."
    return <CommonBigIndex 
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}