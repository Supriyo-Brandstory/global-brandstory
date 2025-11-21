import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const HowWeMake =()=>{
    const data = {
    heading: "How We Make Content Work Harder",
    subheading:
      "Our approach to content optimization is simple: we make sure your content connects with the right people, delivers value, and supports your business goals. Here’s how we get it done:",
    cards: [
            {
              title: "Audit and Insights",
              description:
                "We start by reviewing what you already have. This means checking how your content performs, identifying strengths to build on, and uncovering gaps that may be holding you back. By doing this, we get a clear picture of where your content stands today and where it can go next.",
            },
            {
              title: "Shaping the Strategy",
              description:
                "Once we understand your baseline, we set a plan. This includes defining the right topics, keywords, and goals so your content attracts the audience that matters most. We don’t just focus on rankings, we make sure the content aligns with your brand voice and business objectives.",
            },
            {
              title: "Making Improvements",
              description:
                "Here we refine and optimize. That might mean rewriting sections for clarity, restructuring content for better flow, or improving titles, visuals, and calls-to-action. Every adjustment is made to ensure your content is not only discoverable but also enjoyable and useful for readers.",
            },
            {
              title: "Keeping It Fresh",
              description:
                "The work doesn’t end after publishing. We track performance over time and update content regularly to keep it relevant and competitive. Outdated information is refreshed, trends are reflected, and improvements are made so your content keeps working for you long-term.",
            }
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>With this approach, every piece of content works harder for your brand, driving visibility, engagement, and growth.</p>
        </>
    )
}
