import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const MediaBuying =()=>{
    const data = {
    
    heading: "Media Buying Platforms We Work With",
    subheading:
      "To Achieve Scale And Quality, We Use Leading Programmatic Media Platforms And Tap Into Global Ad Exchanges To Source Premium Inventory Sources. We Work With:",

    cards: [
            {
              
              title: "DV360 (Display & Video 360)",
              
              description:
                "Access To Google's Entire Inventory Ecosystem.",
            },
            {
              
              title: "The Trade Desk",
              
              description:
                "Full-Funnel Buying Across Open Web, Video, Mobile, And CTV.",
            },
            {
              
              title: "Amazon DSP",
              
              description:
                "Exclusive Inventory Across Amazon Properties And Third-Party Apps.",
            },
            {
              
              title: "Google Display Network",
              
              description:
                "Contextual And Affinity-Based Placements At Global Scale.",
            },
            {
              
              title: "Meta Audience Network",
              
              description:
                "Target Facebook And Instagram Users Across Apps And Devices.",
            },
            {
              
              title: "Spotify & YouTube Inventory",
              
              description:
                "Extend Your Audio And Video Presence Where Users Actively Engage.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            {/* Footer Text: These Platforms Support Programmatic Ad Buying And Are The Foundation Of Scalable, Measurable Media Execution. */}
            <p className='max-w-[1200px] text-center mx-auto mb-30'>These Platforms Support Programmatic Ad Buying And Are The Foundation Of Scalable, Measurable Media Execution.</p>
        </>
    )
}