import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const StrategiesThatAcclerate =()=>{
    const data = {
    heading: "Strategies That Accelerate<br/>Business Performance",
    subheading:
      "Consulting is only valuable if it drives real results. Our strategies are designed for performance, ensuring tangible ROI:",
    cards: [
            {
              title: "Boost Operational Efficiency",
              description:
                "Implementing automation and streamlined processes reduces wasted time, eliminates bottlenecks, and allows teams to focus on high-value work.",
            },
            {
              title: "Accelerate Time-to-Market",
              description:
                "Structured planning, expert guidance, and agile execution enable faster launches and quicker delivery of products and services.",
            },
            {
              title: "Reduce Total Cost of Ownership (TCO)",
              description:
                "Strategic technology decisions prevent costly mistakes, minimize redundant investments, and optimize resource allocation.",
            },
            {
              title: "Enable Scalability & Agility",
              description:
                "Systems are designed to adapt, grow, and evolve alongside your business, ensuring you remain flexible in a changing market.",
            },
        ],
        footer:'Every strategy is actionable, measurable, and designed for long-term impact.'
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            {/* <p className='max-w-[1200px] text-center mx-auto mb-30'>Every strategy is actionable, measurable, and designed for long-term impact.</p> */}
        </>
    )
}