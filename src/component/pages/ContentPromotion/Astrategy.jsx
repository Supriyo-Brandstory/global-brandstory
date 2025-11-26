import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const Astrategy =()=>{
    const data = {
    heading: "A Strategy That Converts: From Planning<br/>to Performance", 
    subheading:
      "A Strong Content Promotion Strategy Is Both Systematic And Flexible. Our Process Ensures Every Campaign Delivers Results:", 
    cards: [
            {
              title: "Content Audit",
              description:
                "We Begin By Reviewing Your Existing Content To Uncover Hidden Opportunities. This Helps Us Identify High-Performing Assets And Refine Underutilized Ones, So Every Piece We Promote Has The Potential To Generate Real Impact.",
            },
            { 
              title: "Audience Mapping",
              description:
                "Content Is Only As Powerful As The Audience It Reaches. That's Why We Analyze Audience Segments In Detail, Understanding Their Needs, Behaviors, And Preferences—To Ensure Your Message Resonates Where It Matters Most.",
            },
            {
              title: "Channel Selection",
              description:
                "Not All Channels Are Created Equal. We Carefully Select The Platforms And Distribution Networks That Will Maximize Visibility And Engagement For Your Brand; Whether It's Organic, Paid, Or A Hybrid Approach.",
            },
            {
              title: "Campaign Execution",
              description:
                "Once The Groundwork Is In Place, We Bring Your Campaign To Life. Our Team Develops Multi-Channel Campaigns With Messaging Tailored For Each Audience Segment, Ensuring Consistency While Driving Action.",
            },
            {
              title: "Performance Monitoring",
              description:
                "Success Doesn't Stop At Launch. We Continuously Monitor Campaign Performance In Real Time, Identifying What's Working And What Can Be Optimized, So Your Investment Is Always Aligned With Results.",
            },
            {
              title: "Insight Reporting",
              description:
                "Clear, Data-Driven Reporting Is At The Core Of Our Process. We Provide Actionable Insights That Help You Understand Not Just The What But Also The Why Behind Campaign Performance, Tying Outcomes Directly To ROI.",
            },
            
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            {/* The text below the cards is also updated to match the image's closing statement */}
            <p className='max-w-[1200px] text-center mx-auto mb-30'>Every Strategy Is Customized, Ensuring Your Campaigns Respond To Trends, Audience Behavior, And Business Goals.</p>
        </>
    )
}