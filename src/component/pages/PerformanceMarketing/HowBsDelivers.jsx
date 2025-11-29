import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const HowBsDelivers =()=>{
    const data = {
    heading: "How Brandstory Delivers<br/>Data-Backed Growth",
    subheading:
      "As a results-first performance marketing agency, our work is grounded in data. Every decision is backed by numbers. Every campaign is engineered to convert.",
    cards: [
            {
              title: "Data-Driven Strategy",
              description:
                "Every campaign begins with deep research, audience behavior, competitive landscape, funnel gaps, and buying intent signals. We don't move until the numbers align with your business goals.",
            },
            {
              title: "Analytics-First Execution",
              description:
                "Using platforms like GA4, Meta Ads Manager, HubSpot, and Mixpanel, we ensure every action is tracked. From impressions to conversions, the full customer journey is visible.",
            },
            {
              title: "Attribution Modeling",
              description:
                "Single-touch doesn't cut it anymore. We implement multi-touch attribution to understand how different touchpoints influence your conversions. This means smarter scaling and efficient budget allocation.",
            },
            {
              title: "Continuous Optimization Loop",
              description:
                "Weekly sprints. Creative refresh cycles. Segmentation refinement. Keyword tuning. No set-and-forget. Your campaigns get better every week.",
            }
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
        </>
    )
}