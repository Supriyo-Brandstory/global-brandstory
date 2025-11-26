import { CommonBigIndex } from "../common/CommonBigIndex"

export const RealStories =()=>{
  const heading = "Real Stories, Real Results"
  const description =
    "We don’t just plan campaigns, we drive outcomes. Our content promotion case studies show measurable growth:"

  const cases = [
    {
      title: "Healthcare Campaign",
      description:
        "We helped a healthcare client boost webinar registrations by 250% through a highly targeted email campaign. By segmenting audiences and delivering personalized messaging, the campaign reached the right professionals and encouraged meaningful sign-ups."
    },
    {
      title: "E-commerce Client",
      description:
        "For an e-commerce brand, we designed an influencer-driven content strategy that not only tripled social shares but also doubled website traffic. The authentic product stories created by influencers generated trust, engagement, and conversions."
    },
    {
      title: "Technology Provider",
      description:
        "A technology provider saw a 40% increase in leads after we executed a syndication and multi-channel promotion strategy. By combining authoritative placements with targeted distribution, we ensured the content reached decision-makers at scale."
    },
  ]
  const footer = "These examples illustrate how strategic promotion delivers tangible ROI, turning content into a business growth engine."
    return <CommonBigIndex 
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}