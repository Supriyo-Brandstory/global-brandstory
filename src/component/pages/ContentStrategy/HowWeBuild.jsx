import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const HowWeBuild =()=>{
    const data = {
    heading: "How We Build Content Strategies That<br/>Work for Your Business",
    subheading:
      "Impactful Content Doesn't Happen By Chance. Our Process Ensures Each Asset Has A Clear Purpose And Measurable Outcome.",
    cards: [
            {
              title: "Setting Clear Goals",
              description:
                "We Begin By Defining Objectives And KPIs That Reflect Genuine Business Impact.",
            },
            {
              title: "Research And Insights",
              description:
                "We Study Markets, Competitors, And Existing Assets To Uncover Opportunities.",
            },
            {
              title: "Understanding Your Audience",
              description:
                "We Create Detailed Profiles That Map Behaviors, Needs, And Decision Points.",
            },
            {
              title: "Planning Your Content",
              description:
                "We Identify Topics, Formats, And Channels That Best Connect With Your Audience.",
            },
            {
              title: "Execution And Improvement",
              description:
                "We Publish Strategically, Track Results Closely, And Refine Continuously.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>This Approach Turns Content Into A Growth Engine That Strengthens Your Brand While Building Lasting Relationships.</p>
        </>
    )
}