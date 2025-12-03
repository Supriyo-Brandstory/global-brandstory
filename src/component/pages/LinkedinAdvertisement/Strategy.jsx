import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const Strategy =()=>{
    const data = {
    heading: "Strategy + Data + Creativity:<br/>LinkedIn Ads That Work",
    subheading:
      "At BrandStory, We Do More Than Get Clicks. We Make Ads That Bring Real Leads And Results. Here Is How We Do It:",
    cards: [
            {
              title: "Audience Insights",
              description:
                "We Find Out Who Your Best Customers Are And What Signs Show They Are Ready To Buy. This Helps Us Aim Your Ads At The Right People.",
            },
            {
              title: "Platform Expertise",
              description:
                "We Know How To Use LinkedIn’s Special Tools For B2B Brands. This Means Your Ads Can Reach The Right Job Titles, Industries, And Companies.",
            },
            {
              title: "Conversion-Focused Creatives",
              description:
                "We Make Ads That Do More Than Look Nice. They Are Built To Make People Click, Fill Forms, And Become Leads.",
            },
            {
              title: "Continuous Optimization",
              description:
                "We Keep Testing And Changing The Ads. When We See What Works Best, We Make It Bigger And Better.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>Every Campaign We Run Is Made To Show Clear Results. Your Money Is Used In A Way That Brings Real Business Growth.</p>
        </>
    )
}