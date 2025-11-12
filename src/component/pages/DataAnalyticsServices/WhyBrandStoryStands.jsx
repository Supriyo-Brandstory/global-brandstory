import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'


export const WhyBrandStoryStands =()=>{
    const data = {
    heading: "Why BrandStory Stands Out from Other<br/>Data Analytics Companies",
    subheading:
      "We’re not order-takers. We’re your strategic partner. What makes our data analytics consulting<br/>service stand out:",
    cards: [
            {
              title: "A team that blends data science with real business sense",
              description:
                "Our consultants aren’t just tech-savvy, they think like strategists. You get insights that connect directly to your goals.",
            },
            {
              title: "Solutions that go deeper than the surface",
              description:
                "We don’t stop at pretty visuals. We dig into the why behind your numbers, helping you fix what’s broken and grow what works.",
            },
            {
              title: "Full ownership from day one",
              description:
                "We manage the setup, the rollout, the updates, and everything in between. No handholding needed. No confusion. Just progress.",
            },
            {
              title: "You’ll notice the difference immediately",
              description:
                "From the very first call, you’ll see that we listen better, think sharper, and work faster than most. That’s not by accident, it’s by design.",
            }
        ],
    };


    return (
        <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>  
    )
}
