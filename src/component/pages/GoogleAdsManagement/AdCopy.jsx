import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const AdCopy =()=>{
    const data = {
    heading: "Ad Copy and Creatives That Convert", 
    cards: [
            {
              title: "Urgency And Benefit-Led Headlines Consistently Outperform Generic Claims", // Top Left Card Title
              description:
                "Headlines are designed to grab attention fast by focusing on urgency, tangible benefits, and problem-solving value propositions. This technique not only increases clicks but also draws in higher-intent visitors ready to act.", // Top Left Card Description
            },
            {
              title: "Structured RSAs Deliver Higher CTR Across Industries", // Top Right Card Title
              description:
                "Responsive Search Ads are built with carefully curated combinations of high-intent headlines and compelling descriptions. Google's algorithm then adapts these combinations to match user search patterns, improving ad match relevance and click-through performance.", // Top Right Card Description
            },
            {
              title: "Copywriting Uses CTA Variants With Emotion Triggers Rooted in Psychology", // Bottom Left Card Title
              description:
                "Every call to action is crafted and tested for its emotional pull, from scarcity-driven urgency (\"Last Chance!\") to authority-based trust signals (\"Recommended by Experts\"). This ensures each ad group pushes the right emotional button to convert.", // Bottom Left Card Description
            },
            {
              title: "Visuals Adapted To Persona Preferences Across Placements", // Bottom Right Card Title
              description:
                "Creative assets are tailored to the platform and audience, from lifestyle imagery for awareness campaigns to infographic-style visuals for educational touchpoints, and branded videos for conversion-focused ads. Every design choice is made to support conversion, not just aesthetics.", // Bottom Right Card Description
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>High converting ad copy is an outcome of creative strategy + performance data.</p>
        </>
    )
}