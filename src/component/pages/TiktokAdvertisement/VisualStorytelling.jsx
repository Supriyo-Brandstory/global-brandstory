import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const VisualStorytelling =()=>{
    const data = {
    heading: "Visual Storytelling That Drives Results",
    subheading:
      "A High-Quality Targeting Setup Can Only Succeed If The Ad Creative Resonates. That’s Why A Dedicated Video-First Content Studio Focuses Entirely On Producing TikTok Video Ads That Feel Native And Authentic. <br/><span class='highlited-text'>Creative Process Highlights:</span>",
    cards: [
            {
              title: "UGC-Style Content",
              description:
                "Crafted to look and feel like authentic TikTok posts from everyday users, but strategically designed to drive conversions. This approach blends seamlessly into the feed, increasing watch time, engagement, and trust, without feeling like an ad.",
            },
            {
              title: "Rapid Editing Cycles",
              description:
                "Agile editing workflows mean creative concepts can be shot, cut, and published in hours, ensuring campaigns stay relevant, ride viral moments, and capture peak audience attention.",
            },
            {
              title: "Storytelling Frameworks",
              description:
                "Every TikTok Video Is Built Around A Proven Formula: Grab Attention In The First Three Seconds With A Powerful Hook, Deliver A Clear And Engaging Value Message, And Close With A Compelling, Action-Oriented Call-To-Action. This Keeps Viewers Engaged From Start To Finish And Drives Them To Act Immediately.",
            },
            {
              title: "Platform-Optimized Formatting",
              description:
                "Ads Are Designed Specifically For TikTok’s Environment: Vertical Video, Sound-On By Default, Full-Screen Immersion, And High-Contrast Visuals. This Ensures Maximum Visibility, Higher Retention Rates, And Stronger Emotional Impact.",
            }
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>The Result? Ads That Stop The Scroll, Hold Attention, And Inspire Action.</p>
        </>
    )
}