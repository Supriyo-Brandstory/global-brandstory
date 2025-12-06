import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const Programetic =()=>{
    const data = {
    heading: "Programmatic Creative Strategy<br/>That Converts",
    subheading:
      "Static Ads Are Not Enough. With BrandStory, Your Ads Change And Adapt To The People, The Device, And Where They See Them.",
    cards: [
            {
              title: "Dynamic Creative Optimization (DCO)",
              description:
                "We Make Ads Personal For Each Person In Real Time. This Helps Your Ads Feel Relevant And Interesting.",
            },
            {
              title: "Responsive Formats",
              description:
                "Your Ads Look Good On Any Device—Desktop, Mobile, Or Connected TV. People See The Right Message In The Right Place.",
            },
            {
              title: "A/B Testing",
              description:
                "We Try Different Versions Of Ads To See Which One Works Best. The Best Ads Stay And Get More Exposure.",
            },
            {
              title: "Emotional Triggers",
              description:
                "We Create Ads With Messages That Make People Act. This Can Help People Click, Sign Up, Or Buy.",
            }
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>We Mix Creativity And Data To Make Sure Every Ad Makes An Impact And Helps Your Business Grow.</p>
        </>
    )
}